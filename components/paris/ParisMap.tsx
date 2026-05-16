type ParisMapProps = {
  bakeryComplete: boolean;
  vosgesComplete: boolean;

  onOpenBakery: () => void;
  onOpenVosges: () => void;
};

export function ParisMap({
  bakeryComplete,
  vosgesComplete,
  onOpenBakery,
  onOpenVosges,
}: ParisMapProps) {
  return (
    <section className="relative mt-8 overflow-hidden rounded-[2rem] shadow-xl">
      <img
        src="/maps/marais-clean-map.png"
        alt="Illustrated map of Le Marais"
        className="w-full rounded-[2rem]"
      />

      <button
        onClick={onOpenBakery}
        className={`absolute left-[22%] top-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-2 text-sm font-semibold shadow-lg transition hover:scale-105 ${
          bakeryComplete
            ? "bg-green-100 text-green-900 ring-2 ring-green-700"
            : "bg-white/90 text-stone-900"
        }`}
      >
        {bakeryComplete ? "✅ Boulangerie" : "🥖 Boulangerie"}
      </button>

      <button
        onClick={onOpenVosges}
        className={`absolute left-[65%] top-[43%] -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-2 text-sm font-semibold shadow-lg transition hover:scale-105 ${
          vosgesComplete
            ? "bg-green-100 text-green-900 ring-2 ring-green-700"
            : "bg-white/90 text-stone-900"
        }`}
      >
        {vosgesComplete ? "✅ Place des Vosges" : "🏛️ Place des Vosges"}
      </button>

      <button className="absolute left-[49%] top-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-200/90 px-4 py-2 text-sm text-stone-500 shadow-lg">
        🎨 Musée
      </button>

      <button className="absolute left-[78%] top-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-200/90 px-4 py-2 text-sm text-stone-500 shadow-lg">
        🏠 Apartment
      </button>
    </section>
  );
}