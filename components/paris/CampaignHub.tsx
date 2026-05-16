import {
  bakeryCampaign,
  CampaignDifficulty,
  CampaignLesson,
} from "@/app/data/paris/bakeryCampaign";

type CampaignHubProps = {
  selectedLevel: CampaignDifficulty;
  unlockedLevels: CampaignDifficulty[];
  completedLessons: string[];
  breadIdiomsComplete: boolean;

  onBack: () => void;
  onSelectLevel: (level: CampaignDifficulty) => void;
  onOpenLesson: (lesson: CampaignLesson) => void;
  onOpenIdiomSideQuest: () => void;
};

export function CampaignHub({
  selectedLevel,
  unlockedLevels,
  completedLessons,
  breadIdiomsComplete,
  onBack,
  onSelectLevel,
  onOpenLesson,
  onOpenIdiomSideQuest,
}: CampaignHubProps) {
  const activeLessons = bakeryCampaign.lessons.filter(
    (lesson) => lesson.difficulty === selectedLevel
  );

  return (
    <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={onBack}
          className="mb-6 rounded bg-stone-200 px-4 py-2 hover:bg-stone-300"
        >
          ← Back to map
        </button>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-wide text-stone-500">
            Campaign
          </p>

          <h1 className="mt-2 text-4xl font-bold">{bakeryCampaign.title}</h1>

          <p className="mt-3 text-lg text-stone-600">
            {bakeryCampaign.description}
          </p>

          <div className="mt-6 flex gap-2">
            {(["beginner", "intermediate", "advanced"] as const).map(
              (level) => {
                const unlocked = unlockedLevels.includes(level);
                const active = selectedLevel === level;

                return (
                  <button
                    key={level}
                    onClick={() => onSelectLevel(level)}
                    disabled={!unlocked}
                    className={`rounded-full px-4 py-2 text-sm capitalize ${
                      active
                        ? "bg-black text-white"
                        : unlocked
                        ? "bg-stone-200 text-stone-800"
                        : "bg-stone-100 text-stone-400"
                    } disabled:cursor-not-allowed`}
                  >
                    {unlocked ? level : `🔒 ${level}`}
                  </button>
                );
              }
            )}
          </div>

          <div className="mt-8 rounded-2xl border-2 border-dashed border-yellow-600 bg-yellow-50 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-yellow-800">
                  Side Quest
                </p>

                <h2 className="mt-1 text-2xl font-bold text-yellow-950">
                  {breadIdiomsComplete ? "✅ " : ""}Bread Idioms
                </h2>

                <p className="mt-1 text-yellow-900">
                  Complete 3 short modules of food idioms and earn the 🥖 Bread
                  Philosopher badge.
                </p>
              </div>

              <button
                onClick={onOpenIdiomSideQuest}
                className="rounded-xl bg-yellow-600 px-4 py-2 font-semibold text-white hover:bg-yellow-700"
              >
                {breadIdiomsComplete ? "Review" : "Start"}
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {activeLessons.map((lesson, index) => {
              const complete = completedLessons.includes(lesson.id);

              return (
                <button
                  key={lesson.id}
                  onClick={() => onOpenLesson(lesson)}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white p-5 text-left transition hover:bg-stone-50"
                >
                  <div>
                    <p className="text-sm text-stone-500">
                      {selectedLevel} · {lesson.section} · Lesson {index + 1}
                    </p>

                    <h2 className="mt-1 text-2xl font-semibold">
                      {complete ? "✅ " : ""}
                      {lesson.title}
                    </h2>

                    <p className="mt-1 text-stone-600">
                      {lesson.description}
                    </p>
                  </div>

                  <div className="rounded-xl bg-yellow-100 px-3 py-2 text-sm font-semibold text-yellow-900">
                    +{lesson.xpReward} XP
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}