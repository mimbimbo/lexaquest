"use client";

import { useParisGame } from "@/hooks/useParisGame";

import { PlayerStatus } from "@/components/paris/PlayerStatus";
import { MaraisCrossroads } from "@/components/paris/MaraisCrossroads";
import { CampaignHub } from "@/components/paris/CampaignHub";
import { OnboardingScreen } from "@/components/paris/OnboardingScreen";
import { VocabLesson } from "@/components/paris/VocabLesson";
import { TypingLesson } from "@/components/paris/TypingLesson";
import { DialogueLesson } from "@/components/paris/DialogueLesson";
import { IdiomLesson } from "@/components/paris/IdiomLesson";
import { CultureLesson } from "@/components/paris/CultureLesson";
import { ConjugationChallenge } from "@/components/paris/ConjugationChallenge";

export default function ParisPage() {
  const game = useParisGame();

  if (game.screen === "onboarding") {
    return <OnboardingScreen onChooseLevel={game.chooseStartingLevel} />;
  }

  if (game.screen === "campaign") {
    return (
      <CampaignHub
        campaign={game.activeCampaign}
        selectedLevel={game.selectedLevel}
        unlockedLevels={game.unlockedLevels}
        completedLessons={game.completedLessons}
        breadIdiomsComplete={game.breadIdiomsComplete}
        onBack={() => game.setScreen("map")}
        onSelectLevel={game.selectCampaignLevel}
        onOpenLesson={game.openLesson}
        onOpenIdiomSideQuest={() => game.startIdiomSideQuest("section1")}
      />
    );
  }

  if (game.screen === "vocab" && game.currentVocab) {
    return (
      <VocabLesson
        currentVocab={game.currentVocab}
        vocabAnswers={game.vocabAnswers}
        xp={game.xp}
        vocabIndex={game.vocabIndex}
        totalWords={game.currentVocabItems.length}
        feedback={game.vocabFeedback}
        selectedLevel={game.selectedLevel}
        selectedSection={game.selectedSection}
        onBack={() => game.setScreen("campaign")}
        onAnswer={game.handleVocabAnswer}
      />
    );
  }

  if (game.screen === "typing" && game.currentTyping) {
    return (
      <TypingLesson
        currentTyping={game.currentTyping}
        typedAnswer={game.typedAnswer}
        typingFeedback={game.typingFeedback}
        xp={game.xp}
        typingIndex={game.typingIndex}
        totalChallenges={game.currentTypingItems.length}
        onBack={() => game.setScreen("campaign")}
        onTypedAnswerChange={game.setTypedAnswer}
        onCheckAnswer={game.checkTypingAnswer}
      />
    );
  }

  if (game.screen === "bakery" && game.currentNode) {
    return (
      <DialogueLesson
        title={game.currentQuest.title}
        level={game.currentQuest.level}
        locationName={game.currentQuest.locationName}
        xp={game.xp}
        currentNode={game.currentNode}
        feedback={game.dialogueFeedback}
        successBadge={game.currentQuest.successBadge}
        onBack={() => game.setScreen("campaign")}
        onChooseAnswer={game.chooseDialogueAnswer}
        onReturnToCampaign={() => game.setScreen("campaign")}
      />
    );
  }

  if (game.screen === "idioms" && game.currentIdiom) {
    return (
      <IdiomLesson
        currentIdiom={game.currentIdiom}
        idiomAnswers={game.idiomAnswers}
        xp={game.xp}
        idiomIndex={game.idiomIndex}
        totalIdioms={game.currentIdiomItems.length}
        idiomFeedback={game.idiomFeedback}
        idiomAnswered={game.idiomAnswered}
        idiomSelectedAnswer={game.idiomSelectedAnswer}
        currentSection={game.idiomSection}
        onBack={() => game.setScreen("campaign")}
        onAnswer={game.handleIdiomAnswer}
        onNext={game.nextIdiom}
      />
    );
  }

  if (game.screen === "culture" && game.currentCultureReading) {
    return (
      <CultureLesson
        currentReading={game.currentCultureReading}
        answers={game.cultureAnswers}
        selectedAnswer={game.cultureSelectedAnswer}
        answered={game.cultureAnswered}
        questionIndex={game.cultureQuestionIndex}
        xp={game.xp}
        onBack={() => game.setScreen("campaign")}
        onAnswer={game.handleCultureAnswer}
        onNext={game.nextCultureQuestion}
      />
    );
  }

  if (game.screen === "conjugation") {
  return (
    <ConjugationChallenge
      infinitive={game.currentConjugationChallenge.infinitive}
      tense={game.currentConjugationChallenge.tense}
      pronoun={game.currentConjugationChallenge.pronoun}
      answer={game.currentConjugationChallenge.answer}
      typedAnswer={game.conjugationTypedAnswer}
      feedback={game.conjugationFeedback}
      xp={game.xp}
      timeLeft={game.conjugationTimeLeft}
      score={game.conjugationScore}
      streak={game.conjugationStreak}
      isGameOver={game.conjugationGameOver}
      onTypedAnswerChange={game.setConjugationTypedAnswer}
      onCheckAnswer={game.checkConjugationAnswer}
      onNext={game.nextConjugationChallenge}
      onRestart={game.restartConjugationSprint}
      onBack={() => game.setScreen("map")}
      english={game.currentConjugationChallenge.english}
    />
  );
}

  return (
    <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Lexaquest
        </p>

        <h1 className="mt-2 text-4xl font-bold">First Day in Paris</h1>

        <p className="mt-3 text-lg text-stone-600">
          Explore Le Marais, complete real-life language quests, and become more
          confident in French.
        </p>

        <PlayerStatus xp={game.xp} badges={game.badges} />

       


       <MaraisCrossroads
  bakeryComplete={game.bakeryComplete}
  vosgesComplete={game.vosgesComplete}
  onOpenBakery={game.openBakeryCampaign}
  onOpenVosges={game.openVosgesCampaign}
  onOpenConjugationSprint={game.openConjugationSprint}
/>
      </div>
    </main>
  );
}