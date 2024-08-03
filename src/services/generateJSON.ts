import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { generateObject } from "ai";
import { jsonSchema } from "ai";
import { NextResponse } from "next/server";

const mySchema = jsonSchema<{
  recipe: {
    name: string;
    ingredients: { name: string; amount: string }[];
    steps: string[];
  };
}>({
  type: "object",
  properties: {
    recipe: {
      type: "object",
      properties: {
        name: { type: "string" },
        ingredients: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              amount: { type: "string" },
            },
            required: ["name", "amount"],
          },
        },
        steps: {
          type: "array",
          items: { type: "string" },
        },
      },
      required: ["name", "ingredients", "steps"],
    },
  },
  required: ["recipe"],
});

// Allow streaming responses up to 30 seconds
// export const maxDuration = 30;

export async function generateJSON(prompt: string) {
  // const { messages } = await req.json();
  // const result = await streamText({
  //   model: google("models/gemini-1.5-pro-latest"),
  //   messages,
  // });
  // return result.toAIStreamResponse();

  try {
    const { object } = await generateObject({
      model: google("models/gemini-1.5-pro-latest"),
      schema: mySchema,
      prompt: prompt,
    });
    return NextResponse.json(object);
  } catch (error) {
    console.error("Error generating recipe:", error);
    return NextResponse.json(
      { error: "Failed to generate recipe." },
      { status: 500 }
    );
  }
}
