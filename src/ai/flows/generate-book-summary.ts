/**
 * @fileOverview Generates a book summary from an uploaded file.
 *
 * - generateBookSummary - A function that generates a book summary from a file.
 * - GenerateBookSummaryInput - The input type for the generateBookSummary function.
 * - GenerateBookSummaryOutput - The return type for the generateBookSummary function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBookSummaryInputSchema = z.object({
  fileDataUri: z
    .string()
    .describe(
      'A file (e.g., a draft chapter or manuscript outline) as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // prettier-ignore
    ),
});
export type GenerateBookSummaryInput = z.infer<typeof GenerateBookSummaryInputSchema>;

const GenerateBookSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the book.'),
});
export type GenerateBookSummaryOutput = z.infer<typeof GenerateBookSummaryOutputSchema>;

export async function generateBookSummary(input: GenerateBookSummaryInput): Promise<GenerateBookSummaryOutput> {
  return generateBookSummaryFlow(input);
}

const generateBookSummaryPrompt = ai.definePrompt({
  name: 'generateBookSummaryPrompt',
  input: {schema: GenerateBookSummaryInputSchema},
  output: {schema: GenerateBookSummaryOutputSchema},
  prompt: `You are an AI assistant that generates a book summary from a file.

  Please provide a concise and informative summary of the book based on the content of the following file:

  File Content: {{fileDataUri}}`,
});

const generateBookSummaryFlow = ai.defineFlow(
  {
    name: 'generateBookSummaryFlow',
    inputSchema: GenerateBookSummaryInputSchema,
    outputSchema: GenerateBookSummaryOutputSchema,
  },
  async input => {
    const {output} = await generateBookSummaryPrompt(input);
    return output!;
  }
);
