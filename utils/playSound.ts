export function playCorrectSound() {
  if (typeof window === "undefined") return;

  const audio = new Audio("/sounds/correct.mp3");
  audio.volume = 0.45;
  audio.play().catch(() => {});
}

export function playWrongSound() {
  if (typeof window === "undefined") return;

  const audio = new Audio("/sounds/wrong.mp3");
  audio.volume = 0.35;
  audio.play().catch(() => {});
}