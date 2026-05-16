import { CampaignDifficulty } from "@/app/data/paris/bakeryCampaign";

type OnboardingScreenProps = {
  onChooseLevel: (level: CampaignDifficulty) => void;
};

export function OnboardingScreen({ onChooseLevel }: OnboardingScreenProps) {
  return (
    <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Lexaquest
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Choose Your Paris Starting Level
        </h1>

        <p className="mt-3 text-lg text-stone-600">
          Start where you feel comfortable. Completing your level unlocks the
          next level.
        </p>

        <div className="mt-8 grid gap-4">
          <button
            onClick={() => onChooseLevel("beginner")}
            className="rounded-2xl bg-white p-6 text-left shadow-sm hover:bg-stone-50"
          >
            <h2 className="text-2xl font-semibold">Beginner</h2>
            <p className="mt-2 text-stone-600">
              I need support with basic phrases like “Je voudrais…”
            </p>
          </button>

          <button
            onClick={() => onChooseLevel("intermediate")}
            className="rounded-2xl bg-white p-6 text-left shadow-sm hover:bg-stone-50"
          >
            <h2 className="text-2xl font-semibold">Intermediate</h2>
            <p className="mt-2 text-stone-600">
              I can handle simple conversations and want more natural French.
            </p>
          </button>

          <button
            onClick={() => onChooseLevel("advanced")}
            className="rounded-2xl bg-white p-6 text-left shadow-sm hover:bg-stone-50"
          >
            <h2 className="text-2xl font-semibold">Advanced</h2>
            <p className="mt-2 text-stone-600">
              I want nuance, idioms, speed, and realistic complications.
            </p>
          </button>
        </div>
      </div>
    </main>
  );
}