"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { supabase } from "@/lib/supabaseClient";

type PlayerStatusProps = {
  xp: number;
  badges: string[];
};

type Profile = {
  username: string;
  display_name: string | null;
};

export function PlayerStatus({
  xp,
  badges,
}: PlayerStatusProps) {
  const [profile, setProfile] =
    useState<Profile | null>(null);

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select(
          "username, display_name"
        )
        .eq("id", user.id)
        .single();

      if (data) {
        setProfile(data);
      }
    }

    loadProfile();
  }, []);

  const rank = useMemo(() => {
    if (xp >= 2000) {
      return "Parisien d’adoption";
    }

    if (xp >= 1000) {
      return "Habitué";
    }

    if (xp >= 400) {
      return "Explorateur";
    }

    return "Touriste";
  }, [xp]);

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-stone-500">
            Current Rank
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            {rank}
          </h2>

          {profile && (
            <p className="mt-1 text-stone-600">
              @{profile.username}
            </p>
          )}

          {profile ? (
            <Link
              href={`/u/${profile.username}`}
              className="mt-2 inline-block text-sm font-medium text-amber-700 underline"
            >
              View profile →
            </Link>
          ) : (
            <Link
              href="/login"
              className="mt-2 inline-block text-sm font-medium text-amber-700 underline"
            >
              Log in to save progress →
            </Link>
          )}
        </div>

        <div className="text-right">
          <p className="text-sm text-stone-500">
            XP
          </p>

          <p className="text-3xl font-bold">
            {xp}
          </p>
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