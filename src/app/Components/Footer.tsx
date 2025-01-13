'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                {/* Footer Columns */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
                    {/* First Column */}
                    <div className="md:col-span-1">
                        <ul className="space-y-2">
                            <li>
                                <a href="#news" className="hover:text-cyan-200">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="#publications" className="hover:text-cyan-200">
                                    Publications
                                </a>
                            </li>
                            <li>
                                <a href="#events" className="hover:text-cyan-200">
                                    Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Second Column */}
                    <div className="md:col-span-1">
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="hover:text-cyan-200">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-cyan-200">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Third Column */}
                    <div className="md:col-span-2">
                        <p className="mb-4 text-gray-400">
                            Get the latest news, articles, and updates delivered straight to your inbox.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-2 rounded-l-md bg-white text-gray-300 placeholder-gray-500 outline-none"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Empty Space for Alignment */}
                    <div className="hidden md:block"></div>
                </div>

                {/* Divider and Social Media Icons */}
                <div className="border-t border-gray-500 mt-8 pt-4">
                    <div className="flex justify-between items-center">

                        {/* Footer Text */}
                        <p className="text-sm text-gray-400">
                            © by PFH Private Hochschule Göttingen 2025
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-6">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-200"
                            >
                                <FaFacebookF size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-200"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-200"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-200"
                            >
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
