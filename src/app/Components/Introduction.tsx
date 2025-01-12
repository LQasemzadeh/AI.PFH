import React from "react";

const Introduction: React.FC = () => {
    return (
        <section className="relative bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8 lg:px-16">
                {/* Left Side: Video */}
                <div className="w-full md:w-1/2">
                    <video
                        src="/video/pfh_ai_einführung_prof._dr._frank_albe (1080p) (1).mp4"
                        poster="/image/Cover-1.png"
                        controls
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        History of PFH
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        PFH was founded with a commitment to innovation and excellence. Our
                        institution combines cutting-edge research with practical
                        applications, fostering an environment where education meets
                        real-world challenges.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Today, PFH has grown into a globally recognized university,
                        empowering students to lead in industries ranging from technology
                        and management to artificial intelligence and more.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
