import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    // Debugging: Check if OpenAI API Key is loaded
    console.log("OpenAI API Key:", process.env.OPENAI_API_KEY ? "Loaded" : "NOT LOADED");

    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
        return NextResponse.json(
            { error: "Invalid request: 'message' is required and must be a string" },
            { status: 400 }
        );
    }

    if (!process.env.OPENAI_API_KEY) {
        console.error("OpenAI API Key is missing!");
        return NextResponse.json(
            { error: "Server error: OpenAI API key is missing." },
            { status: 500 }
        );
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: message }
                ],
                max_tokens: 100,
            }),
        });

        if (!response.ok) {
            console.error("Failed to fetch AI response", response.status, await response.text());
            return NextResponse.json(
                { error: `Failed to fetch AI response (status: ${response.status})` },
                { status: 500 }
            );
        }

        const data = await response.json();
        return NextResponse.json({ reply: data.choices?.[0]?.message?.content ?? "No response from AI" });
    } catch (error) {
        console.error("Error processing OpenAI request:", error);
        return NextResponse.json(
            { error: "Server error: Unable to connect to OpenAI" },
            { status: 500 }
        );
    }
}
