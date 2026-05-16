import { TypingChallenge } from "@/app/data/paris/bakeryTyping";
import { speakFrench } from "@/utils/speakFrench";

type TypingLessonProps = {
  currentTyping: TypingChallenge;

  typedAnswer: string;
  typingFeedback: string | null;

  xp: number;
  typingIndex: number;
  totalChallenges: number;

  onBack: () => void;
  onTypedAnswerChange: (value: string) => void;
  onCheckAnswer: () => void;
};

export function TypingLesson({
  currentTyping,
  typedAnswer,
  typingFeedback,
  xp,
  typingIndex,
  totalChallenges,
  onBack,
  onTypedAnswerChange,
  onCheckAnswer,
}: TypingLessonProps) {
  return (
    <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={onBack}
          className="mb-6 rounded bg-stone-200 px-4 py-2 hover:bg-stone-300"
        >
          ← Back to campaign
        </button>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-stone-500">
                Typing Challenge
              </p>

              <h1 className="mt-2 text-3xl font-bold">Complete the Phrase</h1>

              <p className="mt-2 text-stone-600">
                Type the missing French word.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-4 text-right">
              <p className="text-sm text-stone-500">XP</p>
              <p className="text-3xl font-bold">{xp}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-stone-50 p-8 text-center">
            <p className="text-sm uppercase tracking-wide text-stone-500">
              {currentTyping.english}
            </p>

           <div className="mt-3 flex items-center justify-center gap-3">
  <p className="text-3xl font-bold">
    {currentTyping.prompt}
  </p>

  <button
    onClick={() => speakFrench(currentTyping.prompt)}
    className="rounded-full bg-white px-3 py-2 text-xl shadow hover:bg-stone-100"
    aria-label="Listen"
  >
    🔊
  </button>
</div>
          </div>

          <input
            value={typedAnswer}
            onChange={(event) => onTypedAnswerChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onCheckAnswer();
              }
            }}
            placeholder="Type your answer..."
            className="mt-6 w-full rounded-xl border px-4 py-4 text-xl outline-none focus:ring-2 focus:ring-black"
          />

          {typingFeedback && (
            <div className="mt-4 rounded-xl bg-yellow-100 p-4 text-yellow-900">
              💡 {typingFeedback}
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-stone-500">
              Challenge {typingIndex + 1} / {totalChallenges}
            </p>

            <button
              onClick={onCheckAnswer}
              className="rounded bg-black px-4 py-2 text-white"
            >
              Check
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}