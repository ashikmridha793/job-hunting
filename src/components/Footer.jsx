"use client";

import Link from "next/link";

import {
    LogoFacebook,
    LogoLinkedin,
    LogoGithub,
} from "@gravity-ui/icons";

function Footer() {
    const productLinks = [
        {
            title: "Job Discovery",
            href: "/jobs",
        },
        {
            title: "Worker AI",
            href: "/ai",
        },
        {
            title: "Companies",
            href: "/companies",
        },
        {
            title: "Salary Data",
            href: "/salary",
        },
    ];

    const navigationLinks = [
        {
            title: "Help Center",
            href: "/help",
        },
        {
            title: "Career Library",
            href: "/career-library",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ];

    const resourceLinks = [
        {
            title: "Brand Guideline",
            href: "/brand",
        },
        {
            title: "Newsroom",
            href: "/newsroom",
        },
    ];

    return (
        <footer className="border-t border-white/10 bg-black/70 backdrop-blur-lg">

            <div className="mx-auto max-w-11/12 px-6 py-16">

                {/* Main Footer Content */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Left Section */}
                    <section className="space-y-8">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center"
                        >
                            <h2 className="text-4xl font-bold">
                                <span className="text-blue-500">
                                    hire
                                </span>

                                <span className="text-orange-500">
                                    loop
                                </span>
                            </h2>
                        </Link>

                        {/* Description */}
                        <p className="max-w-xs text-gray-400 leading-8">
                            The AI-native career platform.
                            Built for people who take their
                            work seriously.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">

                            <Link
                                href="#"
                                className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                bg-white/5
                                text-gray-300
                                transition-all
                                duration-300
                                hover:bg-violet-600
                                hover:text-white
                                "
                            >
                                <LogoFacebook className="h-5 w-5" />
                            </Link>

                            <Link
                                href="#"
                                className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                bg-violet-600
                                text-white
                                "
                            >
                                <LogoGithub className="h-5 w-5" />
                            </Link>

                            <Link
                                href="#"
                                className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                bg-white/5
                                text-gray-300
                                transition-all
                                duration-300
                                hover:bg-violet-600
                                hover:text-white
                                "
                            >
                                <LogoLinkedin className="h-5 w-5" />
                            </Link>

                        </div>

                    </section>

                    {/* Product */}
                    <section>
                        <h3 className="mb-6 text-lg font-semibold text-violet-400">
                            Product
                        </h3>

                        <ul className="space-y-4">

                            {productLinks.map((item) => (
                                <li key={item.title}>
                                    <Link
                                        href={item.href}
                                        className="
                                        text-gray-400
                                        transition-colors
                                        duration-300
                                        hover:text-white
                                        "
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </section>

                    {/* Navigation */}
                    <section>
                        <h3 className="mb-6 text-lg font-semibold text-violet-400">
                            Navigations
                        </h3>

                        <ul className="space-y-4">

                            {navigationLinks.map((item) => (
                                <li key={item.title}>
                                    <Link
                                        href={item.href}
                                        className="
                                        text-gray-400
                                        transition-colors
                                        duration-300
                                        hover:text-white
                                        "
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </section>

                    {/* Resources */}
                    <section>
                        <h3 className="mb-6 text-lg font-semibold text-violet-400">
                            Resources
                        </h3>

                        <ul className="space-y-4">

                            {resourceLinks.map((item) => (
                                <li key={item.title}>
                                    <Link
                                        href={item.href}
                                        className="
                                        text-gray-400
                                        transition-colors
                                        duration-300
                                        hover:text-white
                                        "
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </section>

                </div>

                {/* Bottom Footer */}
                <div
                    className="
                    mt-14
                    flex
                    flex-col
                    gap-5
                    border-t
                    border-white/10
                    pt-8
                    text-sm
                    text-gray-500
                    md:flex-row
                    md:items-center
                    md:justify-between
                    "
                >
                    <p>
                        Copyright © 2024 — HireLoop
                    </p>

                    <div className="flex flex-wrap gap-6">

                        <Link
                            href="/terms"
                            className="
                            transition
                            hover:text-white
                            "
                        >
                            Terms & Policy
                        </Link>

                        <Link
                            href="/privacy"
                            className="
                            transition
                            hover:text-white
                            "
                        >
                            Privacy Guideline
                        </Link>

                    </div>
                </div>

            </div>

        </footer>
    );
}

export default Footer;