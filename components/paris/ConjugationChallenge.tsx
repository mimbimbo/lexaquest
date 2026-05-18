"use client";

type ConjugationChallengeProps = {
  infinitive: string;
  english: string;
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
  english,
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
  const correct =
    feedback?.toLowerCase().startsWith("correct") ?? false;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (isGameOver) {
    return (
      <main className="min-h-screen bg-stone-100 p-4 text-stone-900">
        <div className="mx-auto max-w-2xl">
          <button
            onClick={onBack}
            className="mb-4 rounded bg-stone-200 px-4 py-2 text-sm hover:bg-stone-300"
          >
            ← Back to map
          </button>

          <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
            <p className="text-xs uppercase tracking-wide text-stone-500">
              Verb Gym
            </p>

            <h1 className="mt-2 text-3xl font-black">
              Sprint Complete
            </h1>

            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="rounded-2xl bg-yellow-100 p-4">
                <p className="text-xs text-yellow-900">Score</p>
                <p className="mt-1 text-3xl font-black text-yellow-950">
                  {score}
                </p>
              </div>

              <div className="rounded-2xl bg-green-100 p-4">
                <p className="text-xs text-green-900">Streak</p>
                <p className="mt-1 text-3xl font-black text-green-950">
                  {streak}
                </p>
              </div>

              <div className="rounded-2xl bg-stone-100 p-4">
                <p className="text-xs text-stone-500">XP</p>
                <p className="mt-1 text-3xl font-black">{xp}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-3">
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
                Map
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-100 p-3 text-stone-900 sm:p-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="rounded bg-stone-200 px-3 py-2 text-xs font-semibold hover:bg-stone-300"
          >
            ← Map
          </button>

          <p className="text-xs font-bold uppercase tracking-wide text-stone-500">
            3-Minute Verb Sprint
          </p>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-sm sm:p-8">
          <div className="grid grid-cols-4 gap-2">
            <div className="rounded-2xl bg-black p-3 text-center text-white">
              <p className="text-[10px] uppercase text-stone-300">
                Time
              </p>
              <p className="text-xl font-black">{formattedTime}</p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-3 text-center">
              <p className="text-[10px] uppercase text-stone-500">
                Score
              </p>
              <p className="text-xl font-black">{score}</p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-3 text-center">
              <p className="text-[10px] uppercase text-stone-500">
                Streak
              </p>
              <p className="text-xl font-black">{streak}</p>
            </div>

            <div className="rounded-2xl bg-yellow-100 p-3 text-center">
              <p className="text-[10px] uppercase text-yellow-900">
                XP
              </p>
              <p className="text-xl font-black text-yellow-950">
                {xp}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-stone-100 p-4 text-center">
            <p className="text-xs uppercase tracking-wide text-stone-500">
              Infinitive
            </p>

            <p className="mt-1 text-4xl font-black sm:text-5xl">
              {infinitive}
            </p>

            <p className="mt-1 text-base font-semibold text-stone-500">
              {english}
            </p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-2xl bg-stone-100 p-3 text-center">
              <p className="text-[10px] uppercase tracking-wide text-stone-500">
                Pronoun
              </p>

              <p className="mt-1 text-2xl font-bold">{pronoun}</p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-3 text-center">
              <p className="text-[10px] uppercase tracking-wide text-stone-500">
                Tense
              </p>

              <p className="mt-1 text-lg font-bold capitalize">
                {tense}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <input
              value={typedAnswer}
              onChange={(event) =>
                onTypedAnswerChange(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  onCheckAnswer();
                }
              }}
              placeholder="Type answer..."
              className="w-full rounded-2xl border px-4 py-3 text-xl font-semibold outline-none focus:ring-2 focus:ring-black"
              autoFocus
            />
          </div>

          {feedback && (
            <div
              className={`mt-3 rounded-2xl p-3 text-sm font-semibold ${
                correct
                  ? "bg-green-100 text-green-900"
                  : "bg-red-100 text-red-900"
              }`}
            >
              {feedback}

              {!correct && (
                <p className="mt-1 text-xs">
                  Answer:{" "}
                  <span className="font-black">{answer}</span>
                </p>
              )}
            </div>
          )}

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              onClick={onCheckAnswer}
              className="rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white"
            >
              Check
            </button>

            <button
              onClick={onNext}
              className="rounded-xl bg-stone-200 px-4 py-3 text-sm font-semibold text-stone-900"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}