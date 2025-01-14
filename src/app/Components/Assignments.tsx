'use client'

import React from 'react';

const Assignments = () => {
    const videos = [
        {
            title: "Phases of scientific work",
            url: "https://res.cloudinary.com/dmytdvbal/video/upload/v1736704978/2.1_phases_of_scientific_work_720p_agmsoy.mp4",
            poster: "/image/Cover-7.png",
        },

    ];

    return (
        <div className="bg-white text-gray-900 py-10 px-12">
            <h2 className="text-3xl font-bold mb-6">2. Assignments</h2>
            <p className="text-sm mb-8 leading-relaxed text-gray-700">
                Academic work can be divided into different phases and work stages. AI can be used as an aid to facilitate each of these phases. AI can provide support, but it cannot do the academic work on its own. Ultimately, AI is just a modern technology that can be utilised if needed.
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

export default Assignments;
