type PlayerStatusProps = {
  xp: number;
  badges: string[];
};

export function PlayerStatus({ xp, badges }: PlayerStatusProps) {
  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-stone-500">
            Current Rank
          </p>

          <h2 className="mt-1 text-2xl font-bold">Touriste</h2>
        </div>

        <div className="text-right">
          <p className="text-sm text-stone-500">XP</p>
          <p className="text-3xl font-bold">{xp}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Badges
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {badges.length === 0 ? (
            <div className="rounded-full bg-stone-200 px-3 py-1 text-sm text-stone-500">
              No badges yet
            </div>
          ) : (
            badges.map((badge) => (
              <div
                key={badge}
                className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-900"
              >
                {badge}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}