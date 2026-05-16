import {
  DialogueNode,
  DialogueChoice,
} from "@/app/data/paris/bakeryQuest";

import { speakFrench } from "@/utils/speakFrench";

type DialogueLessonProps = {
  title: string;
  level: string;
  locationName: string;

  xp: number;

  currentNode: DialogueNode;

  feedback: string | null;

  successBadge: string;

  onBack: () => void;
  onChooseAnswer: (choice: DialogueChoice) => void;

  onReturnToCampaign: () => void;
};

export function DialogueLesson({
  title,
  level,
  locationName,
  xp,
  currentNode,
  feedback,
  successBadge,
  onBack,
  onChooseAnswer,
  onReturnToCampaign,
}: DialogueLessonProps) {
  const isSuccess = currentNode.id === "success";

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
                {locationName}
              </p>

              <h1 className="mt-2 text-3xl font-bold">{title}</h1>

              <p className="mt-2 text-stone-600 capitalize">
                Level: {level}
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-4 text-right">
              <p className="text-sm text-stone-500">XP</p>
              <p className="text-3xl font-bold">{xp}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-stone-50 p-6">
            <p className="text-sm text-stone-500">
              {currentNode.speaker}
            </p>

            <div className="mt-2 flex items-start gap-3">
  <p className="text-2xl leading-relaxed">
    {currentNode.french}
  </p>

  <button
    onClick={() => speakFrench(currentNode.french)}
    className="mt-1 rounded-full bg-white px-3 py-2 text-lg shadow hover:bg-stone-100"
    aria-label="Listen"
  >
    🔊
  </button>
</div>

            {currentNode.english && (
              <p className="mt-4 text-stone-500">
                {currentNode.english}
              </p>
            )}
          </div>

          {feedback && (
            <div className="mt-4 rounded-xl bg-yellow-100 p-4 text-yellow-900">
              💡 {feedback}
            </div>
          )}

          {!isSuccess ? (
            <div className="mt-6 space-y-3">
              {currentNode.choices.map((choice) => (
                <button
                  key={choice.text}
                  onClick={() => onChooseAnswer(choice)}
                  className="block w-full rounded-xl border bg-white px-4 py-4 text-left hover:bg-stone-100"
                >
                  {choice.text}
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl bg-green-100 p-5 text-green-900">
              <p className="text-xl font-semibold">
                Quest complete!
              </p>

              <p className="mt-2">
                You earned the {successBadge} badge.
              </p>

              <button
                onClick={onReturnToCampaign}
                className="mt-5 rounded-xl bg-black px-4 py-2 text-white hover:bg-stone-800"
              >
                Return to campaign
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}