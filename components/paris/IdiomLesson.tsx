import { BakeryIdiom } from "@/app/data/paris/bakeryIdioms";
import { speakFrench } from "@/utils/speakFrench";

type IdiomLessonProps = {
  currentIdiom: BakeryIdiom;

  idiomAnswers: string[];

  xp: number;

  idiomIndex: number;
  totalIdioms: number;

  idiomFeedback: string | null;

  idiomAnswered: boolean;
  idiomSelectedAnswer: string | null;

  currentSection: string;

  onBack: () => void;

  onAnswer: (answer: string) => void;
  onNext: () => void;
};

export function IdiomLesson({
  currentIdiom,
  idiomAnswers,
  xp,
  idiomIndex,
  totalIdioms,
  idiomFeedback,
  idiomAnswered,
  idiomSelectedAnswer,
  currentSection,
  onBack,
  onAnswer,
  onNext,
}: IdiomLessonProps) {
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
                Side Quest
              </p>

              <h1 className="mt-2 text-3xl font-bold">
                Bread Idioms
              </h1>

              <p className="mt-2 text-stone-600 capitalize">
                {currentSection}
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-4 text-right">
              <p className="text-sm text-stone-500">XP</p>
              <p className="text-3xl font-bold">{xp}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-stone-50 p-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <p className="text-3xl font-bold">
                {currentIdiom.phrase}
              </p>

              <button
                onClick={() =>
                  speakFrench(currentIdiom.phrase)
                }
                className="rounded-full bg-white px-3 py-2 text-xl shadow hover:bg-stone-100"
                aria-label="Listen"
              >
                🔊
              </button>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-900">
              Example
            </p>

            <div className="mt-2 flex items-start gap-3">
              <p className="text-blue-950">
                {currentIdiom.exampleFrench}
              </p>

              <button
                onClick={() =>
                  speakFrench(
                    currentIdiom.exampleFrench
                  )
                }
                className="rounded-full bg-white px-3 py-2 text-sm shadow hover:bg-stone-100"
                aria-label="Listen"
              >
                🔊
              </button>
            </div>

            <p className="mt-2 text-sm text-blue-800">
              {currentIdiom.exampleEnglish}
            </p>
          </div>

          <p className="mt-4 text-sm text-stone-500">
            Idiom {idiomIndex + 1} / {totalIdioms}
          </p>

          <div className="mt-6 space-y-3">
            {idiomAnswers.map((answer) => (
              <button
                key={answer}
                onClick={() => onAnswer(answer)}
                disabled={idiomAnswered}
                className={`block w-full rounded-xl border px-4 py-4 text-left ${
                  idiomSelectedAnswer === answer
                    ? answer === currentIdiom.meaning
                      ? "border-green-500 bg-green-100"
                      : "border-red-500 bg-red-100"
                    : "bg-white hover:bg-stone-100"
                } disabled:cursor-not-allowed`}
              >
                {answer}
              </button>
            ))}
          </div>

          {idiomFeedback && (
            <div className="mt-4 rounded-xl bg-yellow-100 p-4 text-yellow-900">
              <p>
                💡 <strong>Meaning:</strong>{" "}
                {currentIdiom.meaning}
              </p>

              <p className="mt-2">
                <strong>Literal:</strong>{" "}
                {currentIdiom.literalMeaning}
              </p>

              <p className="mt-2">
                {currentIdiom.explanation}
              </p>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            <button
              onClick={onBack}
              className="rounded bg-stone-200 px-4 py-2"
            >
              Exit side quest
            </button>

            <button
              onClick={onNext}
              disabled={!idiomAnswered}
              className="rounded bg-black px-4 py-2 text-white disabled:opacity-40"
            >
              {idiomIndex < totalIdioms - 1
                ? "Next idiom"
                : "Finish section"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}