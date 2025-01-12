'use client'

import React from 'react';

const Tools = () => {
    const videos = [
        {
            title: "What is AI?",
            url: "https://res.cloudinary.com/dmytdvbal/video/upload/v1736708921/3.3_midjourney_1080p_ruzr7y.mp4",
            poster: "/image/Cover-2.png",
        },
        {
            title: "What Can AI Do?",
            url: "https://res.cloudinary.com/dmytdvbal/video/upload/v1736708939/3.1_prompt_engineering_1080p_dshmdy.mp4",
            poster: "/image/Cover-3.png",
        },
        {
            title: "Neuronal Networks",
            url: "https://res.cloudinary.com/dmytdvbal/video/upload/v1736708957/3.2_chatgpt_1080p_bfnn1f.mp4",
            poster: "/image/Cover-4.png",
        },
    ];

    return (
        <div className="bg-white text-gray-900 py-10 px-12">
            <h2 className="text-3xl font-bold mb-6">1. Technology</h2>
            <p className="text-sm mb-8 leading-relaxed text-gray-700">
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
                        {/* Video element */}
                        <video
                            className="absolute w-full h-full object-cover rounded-lg shadow-lg"
                            src={video.url}
                            poster={video.poster || ""}
                            controls
                        />
                        {/* Dark overlay */}
                        <div className="absolute w-full h-full bg-black opacity-30 rounded-lg"></div>

                        {/* Title */}
                        <div
                            className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg">
                            <p className="text-sm font-semibold text-white">{video.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;
