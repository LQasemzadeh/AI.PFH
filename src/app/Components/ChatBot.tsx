'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react'; // Chat & Close Icons

// Define a type for messages
type ChatMessage = {
    role: 'user' | 'bot';
    text: string;
};

const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const chatBoxRef = useRef<HTMLDivElement>(null);

    // Close chat if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (chatBoxRef.current && !chatBoxRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        // Add user's message
        const newMessages: ChatMessage[] = [...messages, { role: 'user', text: input }];
        setMessages(newMessages);

        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();
            setMessages([...newMessages, { role: 'bot', text: data.reply }]);
        } catch (error) {
            setMessages([...newMessages, { role: 'bot', text: 'Error: Unable to get response.' }]);
        }

        setInput('');
    };

    return (
        <div className="fixed bottom-5 right-5 flex flex-col items-end">
            {/* Chat Icon (Floating Button) */}
            {!isOpen && (
                <button
                    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
                    onClick={() => setIsOpen(true)}
                >
                    <MessageSquare size={28} />
                </button>
            )}

            {/* Chat Box */}
            {isOpen && (
                <div ref={chatBoxRef} className="w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4 relative">
                    {/* Close Button */}
                    <button
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={20} />
                    </button>

                    <h3 className="text-lg font-bold text-gray-700 mb-2">AI ChatBot</h3>

                    {/* Chat Messages */}
                    <div className="h-64 overflow-y-auto mb-3 bg-gray-100 p-2 rounded-md">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg mb-2 ${
                                    msg.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input Field */}
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-l-lg"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Ask something..."
                        />
                        <button className="p-2 bg-blue-500 text-white rounded-r-lg" onClick={handleSendMessage}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
