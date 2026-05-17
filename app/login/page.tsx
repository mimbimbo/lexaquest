"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [mode, setMode] =
    useState<"login" | "signup">(
      "signup"
    );

  const [message, setMessage] =
    useState<string | null>(null);

  const [loading, setLoading] =
    useState(false);

  async function handleSignup() {
    setLoading(true);
    setMessage(null);

    const { error } =
      await supabase.auth.signUp({
        email,
        password,

        options: {
          data: {
            username,
          },
        },
      });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage(
      "Account created successfully."
    );

    setLoading(false);

    router.push("/paris");
  }

  async function handleLogin() {
    setLoading(true);
    setMessage(null);

    const { error } =
      await supabase.auth.signInWithPassword(
        {
          email,
          password,
        }
      );

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);

    router.push("/paris");
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (mode === "signup") {
      await handleSignup();
    } else {
      await handleLogin();
    }
  }

  return (
    <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-stone-500">
          Lexaquest
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          {mode === "signup"
            ? "Create your Paris profile"
            : "Welcome back"}
        </h1>

        <p className="mt-3 text-stone-600">
          Save your XP, badges,
          avatar, and district
          progress.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          {mode === "signup" && (
            <input
              value={username}
              onChange={(event) =>
                setUsername(
                  event.target.value
                )
              }
              placeholder="Username"
              required
              className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          )}

          <input
            value={email}
            onChange={(event) =>
              setEmail(
                event.target.value
              )
            }
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            value={password}
            onChange={(event) =>
              setPassword(
                event.target.value
              )
            }
            type="password"
            placeholder="Password"
            required
            minLength={6}
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />

          {message && (
            <div className="rounded-xl bg-yellow-100 p-3 text-sm text-yellow-900">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black px-4 py-3 font-semibold text-white disabled:opacity-50"
          >
            {loading
              ? "Working..."
              : mode === "signup"
              ? "Create account"
              : "Log in"}
          </button>
        </form>

        <button
          onClick={() =>
            setMode((current) =>
              current === "signup"
                ? "login"
                : "signup"
            )
          }
          className="mt-5 w-full text-sm text-stone-600 underline"
        >
          {mode === "signup"
            ? "Already have an account? Log in"
            : "Need an account? Sign up"}
        </button>
      </div>
    </main>
  );
}