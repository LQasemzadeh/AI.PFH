'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';

const Navbar: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [language, setLanguage] = useState<'DE' | 'EN'>('EN');
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setSearchOpen(false);
            }
        };

        if (searchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchOpen]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-blue-900 shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-2">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Links */}
                    <div className="flex items-center space-x-6">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image
                                    src="/image/PFH.png"
                                    alt="PFH Logo"
                                    width={200}
                                    height={200}
                                    className="object-contain cursor-pointer"
                                />
                            </Link>
                        </div>

                        {/* Links */}
                        <div className="hidden md:flex space-x-6 text-sm">
                            <a href="#news" className="text-white hover:text-cyan-200">
                                News
                            </a>
                            <a href="#publications" className="text-white hover:text-cyan-200">
                                Publications
                            </a>
                            <a href="#events" className="text-white hover:text-cyan-200">
                                Events
                            </a>
                            <a href="#about" className="text-white hover:text-cyan-200">
                                About
                            </a>
                            <a href="#contact" className="text-white hover:text-cyan-200">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Search Bar and Language Toggle */}
                    <div className="hidden md:flex items-center relative space-x-4" ref={searchRef}>
                        <FiSearch
                            className="text-white text-xl cursor-pointer z-10"
                            onClick={() => setSearchOpen(!searchOpen)}
                        />

                        <input
                            type="text"
                            placeholder="Search..."
                            className={`absolute bg-white text-gray-900 px-4 py-2 rounded-md outline-none shadow-lg transition-all duration-300 ease-in-out ${
                                searchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'
                            }`}
                            style={{
                                right: 'calc(2.5rem + 48px)',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 5,
                            }}
                        />

                        <div
                            className="flex items-center text-white text-sm cursor-pointer hover:text-cyan-200"
                            onClick={() => setLanguage((prev) => (prev === 'EN' ? 'DE' : 'EN'))}
                        >
                            <MdLanguage className="text-xl mr-1" />
                            <span>{language}</span>
                        </div>
                    </div>

                    {/* Hamburger Menu */}
                    <div className="flex md:hidden items-center space-x-4">
                        <div
                            className="flex items-center text-white text-sm cursor-pointer hover:text-cyan-200"
                            onClick={() => setLanguage((prev) => (prev === 'EN' ? 'DE' : 'EN'))}
                        >
                            <MdLanguage className="text-xl mr-1" />
                            <span>{language}</span>
                        </div>
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="text-white text-2xl focus:outline-none"
                        >
                            {navbarOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
