import { exploreExpertise } from '@/ai/flows/expertise-explorer-chat-flow';

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    
    if (!query?.trim()) {
      return Response.json({ error: 'Query is required' }, { status: 400 });
    }
    
    const result = await exploreExpertise({ query });
    return Response.json(result);
  } catch (error) {
    console.error('Expertise exploration error:', error);
    return Response.json(
      { error: 'Failed to process your question' },
      { status: 500 }
    );
  }
}
