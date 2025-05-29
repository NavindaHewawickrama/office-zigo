"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About us", path: "/" },
        { name: "Our Brands", path: "/pages/brands" },
        { name: "Production", path: "/pages/production" },
        { name: "Contact Us", path: "/pages/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={` z-100 fixed top-0 left-0 w-full transition-all duration-300 ${scrolling ? "bg-blue-500 opacity-70" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <div
                                className={`relative bg-white rounded-bl-3xl rounded-br-3xl ${scrolling ? "opacity-0" : ""
                                    }  items-center justify-center hidden sm:flex sm:w-48 sm:h-16 md:w-64 md:h-20 lg:w-80 lg:h-24`}
                            >
                                <Image
                                    src="/images/Web site images-04.png"
                                    alt="Zigo Technology Logo"
                                    height={200}
                                    width={300}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop menu - responsive spacing and sizing for tablets */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="text-white text-xs md:text-sm lg:text-[0.95rem] hover:text-blue-200 px-1 md:px-2 lg:px-3 py-2 flex items-center whitespace-nowrap"
                            >
                                {item.name}
                                <svg
                                    className="w-3 h-3 md:w-4 md:h-4 ml-0.5 md:ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button - only for small screens */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide - only for small screens */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800 bg-opacity-90">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;