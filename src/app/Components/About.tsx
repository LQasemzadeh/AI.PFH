'use client';

import React from 'react';

const About: React.FC = () => {
    return (
        <div id="about" className="-mt-34">
            <div className="flex justify-center items-center py-10 px-4">
                <div
                    className="relative max-w-5xl w-full bg-cover bg-center rounded-xl shadow-lg text-white"
                    style={{
                        backgroundImage: `url('/image/About.png')`,
                    }}
                >
                    {/* Overlay for darken */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center p-10 md:p-16">
                        <h2 className="text-2xl md:text-4xl font-bold">Our Mission</h2>
                        <p className="mt-4 text-sm md:text-base text-gray-100">
                            PFH - Private University of Applied Sciences Göttingen is a modern and application-oriented private university. Students acquire specific technical and professional qualifications as well as overarching skills that prepare them for the most pressing challenges of our time.
                        </p>
                        <p className="mt-4 text-sm md:text-base text-gray-100">
                            Our underlying leitmotif <span className="text-blue-300 font-bold">&quot;D3: Make your studies count - today and in the future&quot;</span> emphasises the high relevance of our degree programmes for professional practice in a global and social context by consistently maintaining direct links to the defining trends of our time: digitalisation, decarbonisation and demographic change.
                        </p>
                        <button
                            onClick={() => (window.location.href = '/AboutUs')}
                            className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
