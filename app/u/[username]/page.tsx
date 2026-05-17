import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

type ProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

export default async function UserProfilePage({
  params,
}: ProfilePageProps) {
  const { username: rawUsername } = await params;

  const username = rawUsername.trim().toLowerCase();

  const {
    data: profile,
    error: profileError,
  } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", username)
    .single();

  if (
    profileError ||
    !profile
  ) {
    return (
      <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold">
            Profile not found
          </h1>

          <p className="mt-4 text-stone-600">
            Could not find user:
            {" "}
            {username}
          </p>

          <pre className="mt-6 overflow-auto rounded-xl bg-stone-100 p-4 text-sm">
            {JSON.stringify(
              profileError,
              null,
              2
            )}
          </pre>
        </div>
      </main>
    );
  }

  const {
    data: progress,
  } = await supabase
    .from("user_progress")
    .select("*")
    .eq(
      "user_id",
      profile.id
    )
    .single();

  const badges: string[] =
    progress?.badges ?? [];

  const completedLocations:
    string[] =
    progress?.completed_locations ??
    [];

  return (
    <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-5xl">
              🧍
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-stone-500">
                Paris Profile
              </p>

              <h1 className="mt-1 text-4xl font-black">
                @{profile.username}
              </h1>

              <p className="mt-2 text-xl font-semibold text-amber-700">
                {profile.rank}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm text-stone-500">
                Total XP
              </p>

              <p className="mt-1 text-3xl font-black">
                {profile.total_xp}
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm text-stone-500">
                Badges
              </p>

              <p className="mt-1 text-3xl font-black">
                {badges.length}
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm text-stone-500">
                Places Explored
              </p>

              <p className="mt-1 text-3xl font-black">
                {
                  completedLocations.length
                }
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">
              Badges
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {badges.length ===
              0 ? (
                <div className="rounded-full bg-stone-200 px-4 py-2 text-stone-500">
                  No badges yet
                </div>
              ) : (
                badges.map(
                  (badge) => (
                    <div
                      key={badge}
                      className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-900"
                    >
                      {badge}
                    </div>
                  )
                )
              )}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">
              Explored Places
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {completedLocations.length ===
              0 ? (
                <div className="rounded-full bg-stone-200 px-4 py-2 text-stone-500">
                  No places completed
                  yet
                </div>
              ) : (
                completedLocations.map(
                  (
                    location
                  ) => (
                    <div
                      key={
                        location
                      }
                      className="rounded-full bg-green-100 px-4 py-2 font-semibold capitalize text-green-900"
                    >
                      {location.replaceAll(
                        "-",
                        " "
                      )}
                    </div>
                  )
                )
              )}
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-black p-5 text-white">
            <p className="text-sm text-stone-300">
              Share profile
            </p>

            <p className="mt-2 break-all font-mono text-sm">
              /u/
              {
                profile.username
              }
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}