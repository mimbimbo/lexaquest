import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { word, context } = await request.json();

  if (!word || !context) {
    return NextResponse.json(
      { error: "Missing word or context" },
      { status: 400 }
    );
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY" },
      { status: 500 }
    );
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: `
You are a French-English dictionary for English-speaking learners.

Clicked word: ${word}

Context:
${context}

Explain the clicked word in this context. Use simple English.
`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            word: { type: Type.STRING },
            lemma: { type: Type.STRING },
            partOfSpeech: { type: Type.STRING },
            meaning: { type: Type.STRING },
            meaningInContext: { type: Type.STRING },
            grammarNote: { type: Type.STRING },
            distractors: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: [
            "word",
            "lemma",
            "partOfSpeech",
            "meaning",
            "meaningInContext",
            "grammarNote",
            "distractors",
          ],
        },
      },
    });

    const text = response.text;

    if (!text) {
      return NextResponse.json(
        { error: "Gemini returned no text" },
        { status: 500 }
      );
    }

    const parsed = JSON.parse(text);

    return NextResponse.json({
      word: parsed.word || word,
      lemma: parsed.lemma || word,
      partOfSpeech: parsed.partOfSpeech || "unknown",
      meaning: parsed.meaning || word,
      meaningInContext: parsed.meaningInContext || parsed.meaning || word,
      grammarNote: parsed.grammarNote || "",
      distractors:
        Array.isArray(parsed.distractors) && parsed.distractors.length >= 3
          ? parsed.distractors.slice(0, 3)
          : ["ship", "harbor", "captain"],
    });
  } catch (error) {
    console.error("Gemini route failed:", error);

    return NextResponse.json(
      { error: "Gemini route failed", word },
      { status: 500 }
    );
  }
}