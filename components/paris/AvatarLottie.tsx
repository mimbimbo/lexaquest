"use client";

import { useEffect, useState } from "react";

export function AvatarLottie() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadAnimation() {
      const [{ default: Lottie }, animation] = await Promise.all([
        import("lottie-react"),
        import("@/animations/avatar-idle.json"),
      ]);

      if (!mounted) return;

      setAnimationData({
        Lottie,
        data: animation.default,
      });
    }

    loadAnimation();

    return () => {
      mounted = false;
    };
  }, []);

  if (!animationData) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-full bg-black/70 text-2xl shadow-lg backdrop-blur">
        🧍
      </div>
    );
  }

  const LottieComponent = (animationData as any).Lottie;

  return <LottieComponent animationData={(animationData as any).data} loop />;
}