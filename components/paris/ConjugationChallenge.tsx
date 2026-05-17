"use client";

type ConjugationChallengeProps = {
  infinitive: string;
  tense: string;
  pronoun: string;
  answer: string;

  typedAnswer: string;
  feedback: string | null;

  xp: number;
  timeLeft: number;
  score: number;
  streak: number;
  isGameOver: boolean;

  onTypedAnswerChange: (value: string) => void;
  onCheckAnswer: () => void;
  onNext: () => void;
  onRestart: () => void;
  onBack: () => void;
};

export function ConjugationChallenge({
  infinitive,
  tense,
  pronoun,
  answer,
  typedAnswer,
  feedback,
  xp,
  timeLeft,
  score,
  streak,
  isGameOver,
  onTypedAnswerChange,
  onCheckAnswer,
  onNext,
  onRestart,
  onBack,
}: ConjugationChallengeProps) {
  const correct = feedback?.toLowerCase().startsWith("correct") ?? false;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  if (isGameOver) {
    return (
      <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
        <div className="mx-auto max-w-2xl">
          <button
            onClick={onBack}
            className="mb-6 rounded bg-stone-200 px-4 py-2 hover:bg-stone-300"
          >
            ← Back to map
          </button>

          <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
            <p className="text-sm uppercase tracking-wide text-stone-500">
              Verb Gym
            </p>

            <h1 className="mt-2 text-4xl font-black">Sprint Complete</h1>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-yellow-100 p-5">
                <p className="text-sm text-yellow-900">Score</p>
                <p className="mt-1 text-4xl font-black text-yellow-950">
                  {score}
                </p>
              </div>

              <div className="rounded-2xl bg-green-100 p-5">
                <p className="text-sm text-green-900">Best Streak</p>
                <p className="mt-1 text-4xl font-black text-green-950">
                  {streak}
                </p>
              </div>

              <div className="rounded-2xl bg-stone-100 p-5">
                <p className="text-sm text-stone-500">Total XP</p>
                <p className="mt-1 text-4xl font-black">{xp}</p>
              </div>
            </div>

            <p className="mt-6 text-stone-600">
              Nice work. Verb sprints are repeatable practice rounds for earning
              XP and sharpening conjugations.
            </p>

            <div className="mt-8 flex justify-center gap-3">
              <button
                onClick={onRestart}
                className="rounded-xl bg-black px-5 py-3 font-semibold text-white"
              >
                Play again
              </button>

              <button
                onClick={onBack}
                className="rounded-xl bg-stone-200 px-5 py-3 font-semibold text-stone-900"
              >
                Return to map
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={onBack}
          className="mb-6 rounded bg-stone-200 px-4 py-2 hover:bg-stone-300"
        >
          ← Back to map
        </button>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-stone-500">
                Verb Gym
              </p>

              <h1 className="mt-2 text-4xl font-black">
                3-Minute Verb Sprint
              </h1>
            </div>

            <div className="rounded-xl bg-yellow-100 px-4 py-2 text-right font-bold text-yellow-900">
              <p className="text-xs uppercase tracking-wide">XP</p>
              <p>{xp}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-black p-5 text-white">
              <p className="text-sm text-stone-300">Time</p>
              <p className="mt-1 text-3xl font-black">{formattedTime}</p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm text-stone-500">Score</p>
              <p className="mt-1 text-3xl font-black">{score}</p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm text-stone-500">Streak</p>
              <p className="mt-1 text-3xl font-black">{streak}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-stone-100 p-6">
            <p className="text-sm uppercase tracking-wide text-stone-500">
              Infinitive
            </p>

            <p className="mt-2 text-5xl font-black">{infinitive}</p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm uppercase tracking-wide text-stone-500">
                Pronoun
              </p>

              <p className="mt-1 text-3xl font-bold">{pronoun}</p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm uppercase tracking-wide text-stone-500">
                Tense
              </p>

              <p className="mt-1 text-3xl font-bold capitalize">
                {tense.replaceAll("_", " ")}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm uppercase tracking-wide text-stone-500">
              Your answer
            </label>

            <input
              value={typedAnswer}
              onChange={(event) => onTypedAnswerChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  onCheckAnswer();
                }
              }}
              placeholder="Type the conjugated form..."
              className="mt-2 w-full rounded-2xl border px-5 py-4 text-2xl font-semibold outline-none focus:ring-2 focus:ring-black"
              autoFocus
            />
          </div>

          {feedback && (
            <div
              className={`mt-5 rounded-2xl p-4 font-semibold ${
                correct
                  ? "bg-green-100 text-green-900"
                  : "bg-red-100 text-red-900"
              }`}
            >
              {feedback}

              {!correct && (
                <p className="mt-2 text-sm">
                  Correct answer:{" "}
                  <span className="font-black">{answer}</span>
                </p>
              )}
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <button
              onClick={onCheckAnswer}
              className="rounded-xl bg-black px-5 py-3 font-semibold text-white"
            >
              Check
            </button>

            <button
              onClick={onNext}
              className="rounded-xl bg-stone-200 px-5 py-3 font-semibold text-stone-900"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}