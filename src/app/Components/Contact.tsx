'use client';

import React from 'react';

const Contact: React.FC = () => {
    return (
        <div id="contact" className="bg-gray-50 py-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-blue-900">Let's Talk about AI@PFH!</h2>
                    <p className="text-gray-600 text-sm">
                        The content and support listed here is coordinated at PFH by the "AI@PFH" working group.
                        This interdisciplinary working group is headed by Prof. Dr.-Ing. Stefan Wagenpfeil.
                    </p>
                    <p className="text-gray-600 text-sm">
                        If you have any questions or suggestions, please contact the central contact point at{' '}
                        <a href="mailto:ai@pfh.de" className="text-blue-600 hover:underline">ai@pfh.de</a> or{' '}
                        <a href="mailto:s.wagenpfeil@pfh.de" className="text-blue-600 hover:underline">s.wagenpfeil@pfh.de</a> at any time.
                    </p>
                </div>

                {/* Right Section - Contact Form */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <form action="#" method="POST" className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
