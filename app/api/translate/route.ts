import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { word, context } = await request.json();

  if (!word) {
    return NextResponse.json({ error: "Missing word" }, { status: 400 });
  }

  const apiKey = process.env.DEEPL_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing DEEPL_API_KEY" },
      { status: 500 }
    );
  }

  const textToTranslate = context
    ? `French word: ${word}\nFrench context: ${context}`
    : word;

  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: [textToTranslate],
      source_lang: "FR",
      target_lang: "EN-US",
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Translation failed" },
      { status: response.status }
    );
  }

  const data = await response.json();

  return NextResponse.json({
    translation: data.translations?.[0]?.text ?? null,
  });
}