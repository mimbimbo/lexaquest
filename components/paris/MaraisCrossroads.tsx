"use client";

import { useState } from "react";
import { AvatarLottie } from "@/components/paris/AvatarLottie";

type MaraisCrossroadsProps = {
  bakeryComplete: boolean;
  vosgesComplete: boolean;
  onOpenBakery: () => void;
  onOpenVosges: () => void;
  onOpenConjugationSprint: () => void;
};

type Position = {
  x: number;
  y: number;
};

const START_POSITION: Position = {
  x: 38,
  y: 66,
};

const BAKERY_POSITION: Position = {
  x: 23,
  y: 46,
};

const VOSGES_POSITION: Position = {
  x: 69,
  y: 63,
};

const WALK_DURATION = 900;

export function MaraisCrossroads({
  bakeryComplete,
  vosgesComplete,
  onOpenBakery,
  onOpenVosges,
  onOpenConjugationSprint,
}: MaraisCrossroadsProps) {
  const [playerPosition, setPlayerPosition] =
    useState<Position>(START_POSITION);

  const [isWalking, setIsWalking] = useState(false);

  function walkTo(destination: Position, onArrive: () => void) {
    if (isWalking) return;

    setIsWalking(true);
    setPlayerPosition(destination);

    setTimeout(() => {
      setIsWalking(false);
      onArrive();
    }, WALK_DURATION);
  }

  return (
    <section className="mt-8 overflow-hidden rounded-[2rem] bg-stone-950 p-3 shadow-xl sm:p-6">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-stone-800 bg-stone-900">
        <img
          src="/maps/marais-adventure-map.png"
          alt="Illustrated adventure map of Le Marais"
          className="block w-full"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

        <div
          className={`pointer-events-none absolute w-[10%] -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out ${
            isWalking ? "scale-110" : "scale-100"
          }`}
          style={{
            left: `${playerPosition.x}%`,
            top: `${playerPosition.y}%`,
            transitionDuration: `${WALK_DURATION}ms`,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-amber-300/30 blur-xl" />

          <div className="relative">
            <AvatarLottie />
          </div>
        </div>

        <button
          onClick={() => walkTo(BAKERY_POSITION, onOpenBakery)}
          aria-label="Open Boulangerie campaign"
          disabled={isWalking}
          className="absolute left-[16%] top-[41%] h-[18%] w-[22%] rounded-2xl border-2 border-transparent transition hover:border-amber-300/80 hover:bg-amber-300/10 disabled:cursor-wait"
        >
          <span className="sr-only">Boulangerie</span>

          {bakeryComplete && (
            <span className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-1 text-xs font-bold text-white shadow">
              ✅
            </span>
          )}
        </button>

        <button
          onClick={() => walkTo(VOSGES_POSITION, onOpenVosges)}
          aria-label="Open Place des Vosges campaign"
          disabled={isWalking}
          className="absolute left-[60%] top-[63%] h-[18%] w-[25%] rounded-2xl border-2 border-transparent transition hover:border-amber-300/80 hover:bg-amber-300/10 disabled:cursor-wait"
        >
          <span className="sr-only">Place des Vosges</span>

          {vosgesComplete && (
            <span className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-1 text-xs font-bold text-white shadow">
              ✅
            </span>
          )}
        </button>
      </div>

      <div className="mt-4 rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-sm text-stone-300 shadow-lg">
        <p className="font-semibold text-amber-200">
          {isWalking
            ? "🚶 Walking through Le Marais..."
            : "🧭 Tap a destination on the map to begin your next Paris encounter."}
        </p>

        <p className="mt-2 text-stone-400">
          Explore bakeries, landmarks, cafés, and hidden corners of Paris while
          building real-world French comprehension.
        </p>

        {!isWalking && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={onOpenConjugationSprint}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
            >
              ⚡ Enter the Verb Gym
            </button>
          </div>
        )}
      </div>
    </section>
  );
}