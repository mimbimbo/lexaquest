import { supabase } from "@/lib/supabaseClient";

export type SavedProgress = {
  completed_lessons: string[];
  completed_locations: string[];
  completed_side_quests: string[];
  badges: string[];
  unlocked_levels: string[];
};

export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export async function loadUserProgress(userId: string) {
  const { data: progress, error: progressError } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (progressError) {
    console.error("Error loading progress:", progressError.message);
    return null;
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("total_xp")
    .eq("id", userId)
    .single();

  if (profileError) {
    console.error("Error loading profile XP:", profileError.message);
  }

  return {
    ...progress,
    total_xp: profile?.total_xp ?? 0,
  };
}

export async function saveUserProgress(userId: string, progress: SavedProgress) {
  const { error } = await supabase.from("user_progress").upsert({
    user_id: userId,
    completed_lessons: progress.completed_lessons,
    completed_locations: progress.completed_locations,
    completed_side_quests: progress.completed_side_quests,
    badges: progress.badges,
    unlocked_levels: progress.unlocked_levels,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Error saving progress:", error.message);
  }
}

export async function updateUserXp(userId: string, totalXp: number) {
  const { error } = await supabase
    .from("profiles")
    .update({
      total_xp: totalXp,
      rank:
        totalXp >= 2000
          ? "Parisien d’adoption"
          : totalXp >= 1000
          ? "Habitué"
          : totalXp >= 400
          ? "Explorateur"
          : "Touriste",
    })
    .eq("id", userId);

  if (error) {
    console.error("Error updating XP:", error.message);
  }
}