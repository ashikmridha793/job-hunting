"use client";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            label: "Browse Jobs",
            href: "/jobs",
        },
        {
            label: "Companies",
            href: "/companies",
        },
        {
            label: "Pricing",
            href: "/pricing",
        },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-lg">
            <header className="mx-auto flex h-20 max-w-11/12 items-center justify-between px-6">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <div className="rounded-lg bg-linear-to-r from-blue-500 to-orange-500 p-2">
                        <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 11V6a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6m-6 0v5m6-5v5"
                            />
                        </svg>
                    </div>

                    <h1 className="text-2xl font-bold">
                        <span className="text-blue-500">
                            Hire
                        </span>
                        <span className="text-orange-500">
                            Loop
                        </span>
                    </h1>
                </Link>

                {/* Right side desktop */}
                <div className="hidden md:flex items-center ml-auto gap-8">

                    {/* nav links */}
                    <ul className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="
                                    text-gray-300
                                    transition
                                    hover:text-white
                                    "
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Vertical Divider */}
                    <div className="h-6 w-px bg-white/20" />

                    {/* Auth actions */}
                    <div className="flex items-center gap-5">

                        <Link
                            href="/signIn"
                            className="
                            text-violet-400
                            hover:text-violet-300
                            transition
                            "
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/signUp"
                            className="
                            rounded-xl
                            bg-linear-to-r
                            from-indigo-500
                            to-violet-600
                            px-5
                            py-2.5
                            text-white
                            font-medium
                            transition
                            hover:scale-105
                            "
                        >
                            Get Started
                        </Link>

                    </div>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden"
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

            </header>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="border-t border-white/10 bg-black/95 md:hidden">
                    <ul className="flex flex-col gap-5 p-6">

                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="
                                    block
                                    text-gray-300
                                    hover:text-white
                                    "
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}

                        <div className="border-t border-white/10 pt-4 space-y-4">

                            <li>
                                <Link
                                    href="/signIn"
                                    className="block text-violet-400"
                                >
                                    Sign In
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/signUp"
                                    className="
                                    block
                                    rounded-xl
                                    bg-linear-to-r
                                    from-indigo-500
                                    to-violet-600
                                    px-4
                                    py-3
                                    text-center
                                    text-white
                                    "
                                >
                                    Get Started
                                </Link>
                            </li>

                        </div>

                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;