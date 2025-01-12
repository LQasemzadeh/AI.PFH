'use client'

import React from 'react';

const Technology = () => {
    const videos = [
        {
            title: "What is AI?",
            url: "https://res.cloudinary.com/dmytdvbal/video/upload/v1736695762/1.1_what_ist_ai_1080p_bavbc6.mp4",
        },
        {
            title: "What Can AI Do?",
            url: "https://res.cloudinary.com/dmytdvbal/video/upload/v1736695935/1.2_what_can_ai_do_1080p_wy2ou1.mp4",
        },
        {
            title: "Neuronal Networks",
            url: "https://res.cloudinary.com/dmytdvbal/video/upload/v1736696030/1.3_neuronal_networks_1080p_cigro1.mp4",
        },
        {
            title: "Ethical Questions",
            url: "https://res.cloudinary.com/dmytdvbal/video/upload/v1736696077/1.5_ethical_questions_1080p_o5rzh3.mp4",
        },
    ];

    return (
        <div className="bg-white text-gray-900 py-10 px-4">
            <h2 className="text-3xl font-bold mb-6">1. Technology</h2>
            <p className="text-lg mb-8 leading-relaxed text-gray-700">
                Artificial Intelligence, or AI for short, is a fascinating and often misunderstood field of computer
                science.
                Although the term AI is often used, many people do not know exactly what it means. In the following
                videos,
                we wish to clarify any lingering doubts and explain what AI is, how it works and why it is so important.
            </p>
            <div className="flex overflow-x-scroll space-x-6 scrollbar-hide">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="group relative flex-shrink-0 w-64 h-36 md:w-80 md:h-44 cursor-pointer"
                    >
                        <video
                            className="absolute w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-110"
                            src={video.url}
                            loop
                            onMouseEnter={(e) => (e.currentTarget.play())}
                            onMouseLeave={(e) => (e.currentTarget.pause())}
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-sm font-semibold">{video.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technology;
