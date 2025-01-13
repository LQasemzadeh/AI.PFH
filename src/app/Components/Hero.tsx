import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative bg-blue-900 text-white overflow-hidden">
            <div className="max-w-7xl h-screen mx-auto px-6 sm:px-12 lg:px-24 py-32">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="text-center lg:text-left lg:w-1/2 px-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            AI@PFH
                        </h1>
                        <p className="text-xl sm:text-xl mb-8 text-gray-300">
                            the central contact point for all information relating to the use of{' '}
                            <span className="font-bold text-gray-100">AI at PFH</span>
                        </p>
                    </div>

                    {/* Right Image Layout */}
                    <div className="relative lg:w-1/2 mt-12 lg:mt-0 grid grid-cols-3 gap-4">
                        <div className="flex flex-col space-y-4 items-center">
                            <Image
                                src="/image/Hero-6.jpg"
                                alt="AI Transformation 3"
                                width={128}
                                height={192}
                                className="w-28 sm:w-32 h-44 sm:h-48 rounded-lg object-cover shadow-lg mt-14"
                            />
                            <Image
                                src="/image/Hero-5.jpg"
                                alt="AI Transformation 4"
                                width={128}
                                height={192}
                                className="w-28 sm:w-32 h-44 sm:h-48 rounded-lg object-cover shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col space-y-4 items-center">
                            <Image
                                src="/image/Hero-1.jpg"
                                alt="AI Transformation 1"
                                width={128}
                                height={192}
                                className="w-28 sm:w-32 h-44 sm:h-48 rounded-lg object-cover shadow-lg"
                            />
                            <Image
                                src="/image/Hero-2.jpg"
                                alt="AI Transformation 2"
                                width={128}
                                height={192}
                                className="w-28 sm:w-32 h-44 sm:h-48 rounded-lg object-cover shadow-lg"
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                src="/image/Hero-4.jpg"
                                alt="AI Transformation Middle"
                                width={128}
                                height={192}
                                className="w-28 sm:w-32 h-44 sm:h-48 rounded-lg object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
