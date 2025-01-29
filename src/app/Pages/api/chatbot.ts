import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { message } = await req.json();
    if (!message) return NextResponse.json({ message: 'No message provided' }, { status: 400 });

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
            }),
        });

        if (!response.ok) {
            return NextResponse.json({ message: 'Failed to fetch AI response' }, { status: 500 });
        }

        const data = await response.json();
        return NextResponse.json({ reply: data.choices[0].message.content }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
