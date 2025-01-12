'use client';

import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Blue Section */}
            <div className="w-full bg-blue-800 flex flex-col items-center px-4 py-32 md:px-20">
                {/* Section Title */}
                <h1 className="text-xl md:text-xl font-bold text-center text-white p-gradient">
                    D3: Make your studies count - today and in the future
                </h1>
            </div>

            {/* White Section */}
            <div className="w-full flex flex-col items-center px-4 py-10 md:px-20 bg-white relative">
                {/* Container */}
                <div className="relative flex flex-col md:flex-row items-center max-w-5xl w-full bg-white rounded-lg shadow-lg">
                    {/* AI Image */}
                    <div className="absolute -top-10 md:-top-12 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-6">
                        <Image
                            src="/image/AI.webp"
                            alt="AI at PFH"
                            width={96} // Specify the image width
                            height={96} // Specify the image height
                            className="rounded-full shadow-md"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full p-6 text-sm md:p-10 text-gray-800 text-justify leading-relaxed">
                        <p className="mb-4">
                            PFH - Private University of Applied Sciences Göttingen is a modern and
                            application-oriented private university. Students acquire specific technical and
                            professional qualifications as well as overarching skills that prepare them for the
                            most pressing challenges of our time.
                        </p>
                        <p className="mb-4">
                            Our underlying leitmotif &quot;D3: Make your studies count - today and in the future&quot;
                            emphasises the high relevance of our degree programmes for professional practice
                            in a global and social context by consistently maintaining direct links to the defining
                            trends of our time: digitalisation, decarbonisation and demographic change.
                        </p>
                        <p className="mb-4">
                            Modern technologies and AI are already an integral part of our lives, both in many
                            professional fields and in society. At PFH, we promote and demand an active
                            approach to AI in compliance with the rules and principles of good scientific practice.
                        </p>
                        <p>
                            We see it as our mission to provide students, teaching staff and employees of the
                            university with comprehensive training in the confident use of AI and to sensitise
                            them to compliance with legal and ethical rules. AI can and should be used in
                            teaching, learning and also in the context of academic work, such as Bachelor&apos;s or
                            Master&apos;s theses, term papers and practical reflections. The focus here is on
                            transparent and reflective use, while always keeping an open mindset towards its
                            appliance as well as a critical attitude towards its limitations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
