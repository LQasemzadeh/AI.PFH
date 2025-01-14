import React from "react";

const Introduction: React.FC = () => {
    return (
        <section className="relative bg-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8 lg:px-16">
                {/* Left Side: Video */}
                <div className="w-full md:w-1/2">
                    <video
                        src="https://res.cloudinary.com/dmytdvbal/video/upload/v1736695594/pfh_ai_einfu%CC%88hrung_prof._dr._frank_albe_1080p_1_ofxqjv.mp4"
                        poster="/image/Cover-1.png"
                        controls
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-lg md:text-2xl font-bold text-blue-900">
                        Prof. Dr. Frank Albe,
                        <br/>
                        President of PFH on the question of AI
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
