"use server";

import { z } from "zod";
import { generateBookSummary } from "@/ai/flows/generate-book-summary";
import { revalidatePath } from "next/cache";

const summarySchema = z.object({
  file: z.string().min(1, "File is required."),
});

export type SummaryState = {
  summary?: string;
  error?: string;
};

export async function generateSummaryAction(
  prevState: SummaryState,
  formData: FormData
): Promise<SummaryState> {
  try {
    const validatedFields = summarySchema.safeParse({
      file: formData.get("file"),
    });

    if (!validatedFields.success) {
      return { error: "Validation failed. A file is required." };
    }
    
    const { file } = validatedFields.data;

    const result = await generateBookSummary({ fileDataUri: file });
    
    if (result.summary) {
        revalidatePath("/book-proposal");
        return { summary: result.summary };
    } else {
        return { error: "Failed to generate summary. The result was empty." };
    }
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { error: `An error occurred: ${errorMessage}` };
  }
}
