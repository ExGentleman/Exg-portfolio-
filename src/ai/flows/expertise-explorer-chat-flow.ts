'use server';
/**
 * @fileOverview An AI agent that answers questions about ExGenleman Technologies, its founder Mr. Lawrence, and their expertise.
 *
 * - exploreExpertise - A function that handles the expertise exploration process.
 * - ExpertiseExplorerChatInput - The input type for the exploreExpertise function.
 * - ExpertiseExplorerChatOutput - The return type for the exploreExpertise function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExpertiseExplorerChatInputSchema = z.object({
  query: z
    .string()
    .describe("The user's question about ExGentleman Technologies, its founder Mr. Lawrence, skills, projects, or experience."),
});
export type ExpertiseExplorerChatInput = z.infer<typeof ExpertiseExplorerChatInputSchema>;

const ExpertiseExplorerChatOutputSchema = z.object({
  answer: z.string().describe('A tailored answer to the user query.'),
});
export type ExpertiseExplorerChatOutput = z.infer<typeof ExpertiseExplorerChatOutputSchema>;

export async function exploreExpertise(
  input: ExpertiseExplorerChatInput
): Promise<ExpertiseExplorerChatOutput> {
  return expertiseExplorerChatFlow(input);
}

const expertiseExplorerChatPrompt = ai.definePrompt({
  name: 'expertiseExplorerChatPrompt',
  input: {schema: ExpertiseExplorerChatInputSchema},
  output: {schema: ExpertiseExplorerChatOutputSchema},
  system: `You are an AI assistant for ExGentleman Technologies, a Zimbabwean startup IT firm. 
  
  Key Facts:
  - Founder: Mr. Lawrence, a Software Engineering student at Bindura University (BUSE) in Zimbabwe.
  - Location: Based in Zimbabwe.
  - Core Mission: Bridging the gap between academic innovation and industry needs.
  
  Professional Proficiency:
  - Programming: Python, C++, Java, JavaScript (React/Next.js).
  - Web Design: HTML, CSS, Modern UI/UX.
  - Mobile Development: Cross-platform solutions.
  - Database Management: MySQL, PostgreSQL optimization.
  - Graphics Designing: Business cards, branding, high-quality printing solutions, and corporate identity.

  Answer concisely. If asked about the founder, mention he is a dedicated student at Bindura University. If asked about the firm, highlight its Zimbabwean roots and commitment to excellence.`,
  prompt: `{{{query}}} `,
});

const expertiseExplorerChatFlow = ai.defineFlow(
  {
    name: 'expertiseExplorerChatFlow',
    inputSchema: ExpertiseExplorerChatInputSchema,
    outputSchema: ExpertiseExplorerChatOutputSchema,
  },
  async input => {
    const {output} = await expertiseExplorerChatPrompt(input);
    return output!;
  }
);
