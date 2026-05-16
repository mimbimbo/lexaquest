import { CultureReading } from "@/app/data/paris/bakeryCulture";
import { speakFrench } from "@/utils/speakFrench";

type CultureLessonProps = {
  currentReading: CultureReading;
  answers: string[];
  selectedAnswer: string | null;
  answered: boolean;
  questionIndex: number;
  xp: number;

  onBack: () => void;
  onAnswer: (answer: string) => void;
  onNext: () => void;
};

export function CultureLesson({
  currentReading,
  answers,
  selectedAnswer,
  answered,
  questionIndex,
  xp,
  onBack,
  onAnswer,
  onNext,
}: CultureLessonProps) {
  const currentQuestion = currentReading.questions[questionIndex];

  return (
    <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
      <div className="mx-auto max-w-3xl">
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
                Culture Reading
              </p>

              <h1 className="mt-2 text-3xl font-bold">
                {currentReading.title}
              </h1>

              <p className="mt-2 text-stone-600">
                {currentReading.subtitle}
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-4 text-right">
              <p className="text-sm text-stone-500">XP</p>
              <p className="text-3xl font-bold">{xp}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-yellow-50 p-6">
            <div className="flex items-start justify-between gap-3">
              <p className="whitespace-pre-line text-lg leading-8 text-yellow-950">
                {currentReading.frenchText}
              </p>

              <button
                onClick={() => speakFrench(currentReading.frenchText)}
                className="shrink-0 rounded-full bg-white px-3 py-2 text-lg shadow hover:bg-stone-100"
                aria-label="Listen"
              >
                🔊
              </button>
            </div>
          </div>

          {currentReading.englishSupport && (
            <div className="mt-4 rounded-xl bg-blue-50 p-4 text-blue-900">
              <p className="text-sm font-semibold">English support</p>
              <p className="mt-2">{currentReading.englishSupport}</p>
            </div>
          )}

          <div className="mt-5 rounded-xl bg-stone-50 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Key vocabulary
            </p>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {currentReading.vocab.map((item) => (
                <div
                  key={item.french}
                  className="rounded-lg bg-white px-3 py-2 text-sm"
                >
                  <span className="font-semibold">{item.french}</span>
                  <span className="text-stone-500"> — {item.english}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border p-5">
            <p className="text-sm text-stone-500">
              Question {questionIndex + 1} / {currentReading.questions.length}
            </p>

            <h2 className="mt-2 text-xl font-semibold">
              {currentQuestion.question}
            </h2>

            <div className="mt-4 space-y-3">
              {answers.map((answer) => (
                <button
                  key={answer}
                  onClick={() => onAnswer(answer)}
                  disabled={answered}
                  className={`block w-full rounded-xl border px-4 py-4 text-left ${
                    selectedAnswer === answer
                      ? answer === currentQuestion.correctAnswer
                        ? "border-green-500 bg-green-100"
                        : "border-red-500 bg-red-100"
                      : "bg-white hover:bg-stone-100"
                  } disabled:cursor-not-allowed`}
                >
                  {answer}
                </button>
              ))}
            </div>

            {answered && (
              <div className="mt-5 flex justify-end">
                <button
                  onClick={onNext}
                  className="rounded bg-black px-4 py-2 text-white"
                >
                  {questionIndex < currentReading.questions.length - 1
                    ? "Next question"
                    : "Finish culture lesson"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}