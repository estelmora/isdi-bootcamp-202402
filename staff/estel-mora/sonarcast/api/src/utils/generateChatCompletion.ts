import OpenAI from "openai";

const openai = new OpenAI();

export default async function generateChatCompletion(systemPrompt: string, userPrompt: string): Promise<string> {
    const completion = await openai.chat.completions.create({
        messages: [
            { "role": "system", "content": `${systemPrompt}` },
            { "role": "user", "content": `${userPrompt}` },
        ],
        model: "gpt-4-turbo",
    });

    if (completion && completion.choices[0] && completion.choices[0].message && completion.choices[0].message.content) {
        return completion.choices[0].message.content;
    } else {
        throw new Error("No valid content found or completion is missing required fields.");
    }
}
