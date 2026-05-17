"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabaseClient";

type Profile = {
  username: string;
  total_xp: number;
  rank: string;
};

export function UserProfileCard() {
  const [loading, setLoading] =
    useState(true);

  const [profile, setProfile] =
    useState<Profile | null>(null);

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select(
          "username, total_xp, rank"
        )
        .eq("id", user.id)
        .single();

      if (data) {
        setProfile(data);
      }

      setLoading(false);
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="rounded-3xl bg-stone-900 p-5 text-stone-200 shadow-lg">
        Loading profile...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="rounded-3xl bg-stone-900 p-5 text-stone-200 shadow-lg">
        <p className="text-sm uppercase tracking-wide text-stone-400">
          Lexaquest Profile
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          Save your Paris journey
        </h2>

        <p className="mt-3 text-stone-400">
          Create an account to save XP,
          badges, and unlocked districts.
        </p>

        <Link
          href="/login"
          className="mt-5 inline-flex rounded-xl bg-amber-300 px-4 py-3 font-semibold text-black"
        >
          Log in / Sign up
        </Link>
      </div>
    );
  }

  return (
    <Link
      href={`/u/${profile.username}`}
      className="block rounded-3xl bg-stone-900 p-5 text-stone-200 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <p className="text-sm uppercase tracking-wide text-stone-400">
        Paris Profile
      </p>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl">
          🧍
        </div>

        <div>
          <h2 className="text-2xl font-black">
            @{profile.username}
          </h2>

          <p className="text-amber-300">
            {profile.rank}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl bg-stone-800 p-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-stone-400">
            Total XP
          </p>

          <p className="mt-1 text-3xl font-black">
            {profile.total_xp}
          </p>
        </div>

        <div className="text-sm text-stone-400">
          View profile →
        </div>
      </div>
    </Link>
  );
}