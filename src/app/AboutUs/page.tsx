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
                <div className="flex flex-col md:flex-row items-center max-w-5xl w-full bg-white rounded-lg shadow-lg">
                    {/* Text Content */}
                    <div className="w-full p-6 text-sm md:p-10 text-gray-800 text-justify leading-relaxed">
                        <p className="mb-4">
                            <span className="font-bold text-2xl text-blue-900">PFH</span>- Private University of Applied
                            Sciences Göttingen is a modern and application-oriented private university. Students acquire
                            specific technical and professional qualifications as well as overarching skills that prepare
                            them for the most pressing challenges of our time.
                        </p>
                        <p className="mb-4">
                            Our underlying leitmotif &quot;D3: Make your studies count - today and in the future&quot;
                            emphasises the high relevance of our degree programmes for professional practice in a global
                            and social context by consistently maintaining direct links to the defining trends of our
                            time: digitalisation, decarbonisation and demographic change.
                        </p>
                        <p className="mb-4">
                            Modern technologies and AI are already an integral part of our lives, both in many
                            professional fields and in society. At PFH, we promote and demand an active approach to AI in
                            compliance with the rules and principles of good scientific practice.
                        </p>
                        <p>
                            We see it as our mission to provide students, teaching staff and employees of the university
                            with comprehensive training in the confident use of AI and to sensitise them to compliance
                            with legal and ethical rules. AI can and should be used in teaching, learning and also in the
                            context of academic work, such as Bachelor&apos;s or Master&apos;s theses, term papers and
                            practical reflections. The focus here is on transparent and reflective use, while always
                            keeping an open mindset towards its appliance as well as a critical attitude towards its
                            limitations.
                        </p>
                        <br />
                        <h2 className="mt-4 mb-2 text-gray-900 text-lg font-bold">Digital literacy with AI</h2>
                        <p>
                            We have produced a series of videos in response to the question as to how AI could be used
                            during one&apos;s studies. AI avatars have been used to create these videos. These are
                            artificially generated speakers who present content that has been created and edited by PFH
                            professors.
                            The use of avatars in the videos is an expression of our commitment of actively exploring
                            and utilising the possibilities of AI. Some PFH professors have also agreed to have personal
                            avatars created of themselves. These avatars have been trained by real-life PFH professors
                            and thus represent their <span className="italic">&quot;personal avatars&quot;</span>. To
                            ensure maximum transparency, all videos in which avatars can be seen are labelled &quot;PFH
                            | AI-Avatar&quot;.
                            <br />
                            <br />
                            <span>The field of &quot;Digital Literacy with AI&quot; comprises three key areas:</span>
                            <br />
                            <span className="font-bold">1. Technology:</span> background content on AI, definitions of
                            terms, possible applications.
                            <br />
                            <span className="font-bold">2. Written assignments:</span> how AI can be used to facilitate
                            written papers.
                            <br />
                            <span className="font-bold">3. Tools:</span> how AI can be utilised and implemented in
                            specific ways.
                            <br />
                            <br />
                            Let us be curious and open-minded and have fun and success using the new opportunities that
                            AI offers to us all! The videos and contents on this page will continuously be expanded and
                            updated!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
