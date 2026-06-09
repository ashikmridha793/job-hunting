"use client";

import { Briefcase, Magnifier, MapPin } from "@gravity-ui/icons";


export default function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black flex items-center">

            {/* Background */}
            <div className="absolute inset-0">

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black to-black" />

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-1/2 h-[250px] w-[350px] sm:h-[350px] sm:w-[500px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Badge */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">

                        <Briefcase
                            size={16}
                            className="text-orange-400"
                        />

                        <span className="font-semibold text-white text-sm sm:text-base">
                            50,000+
                        </span>

                        <span className="text-gray-400 uppercase text-[10px] sm:text-xs tracking-wider text-center">
                            New Jobs This Month
                        </span>

                    </div>
                </div>

                {/* Heading */}
                <h1 className="mx-auto max-w-4xl text-center font-bold text-white leading-tight
        text-3xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl">

                    Find Your Dream Job Today

                </h1>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed px-3">

                    HireLoop connects top talent with world-class
                    companies. Browse thousands of curated
                    opportunities and land your next role faster.

                </p>

                {/* Search Box */}
                <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-3">

                    <div className="flex flex-col lg:flex-row gap-3">

                        {/* Job Search */}
                        <div className="flex items-center flex-1 rounded-xl border border-white/5 px-4 py-4">

                            <Magnifier
                                size={20}
                                className="text-gray-400 mr-3 shrink-0"
                            />

                            <input
                                type="text"
                                placeholder="Job title, skill or company"
                                className="w-full bg-transparent outline-none text-white placeholder:text-gray-500 text-sm sm:text-base"
                            />

                        </div>

                        {/* Location */}
                        <div className="flex items-center flex-1 rounded-xl border border-white/5 px-4 py-4">

                            <MapPin
                                size={20}
                                className="text-gray-400 mr-3 shrink-0"
                            />

                            <input
                                type="text"
                                placeholder="Location or Remote"
                                className="w-full bg-transparent outline-none text-white placeholder:text-gray-500 text-sm sm:text-base"
                            />

                        </div>

                        {/* Search Button */}
                        <button className="h-14 w-full lg:w-14 rounded-xl bg-violet-600 flex items-center justify-center hover:bg-violet-700 transition">

                            <Magnifier
                                size={22}
                                className="text-white"
                            />

                        </button>

                    </div>
                </div>

                {/* Trending Tags */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-3 px-4">

                    <span className="text-gray-400 text-sm">
                        Trending Position
                    </span>

                    {[
                        "Product Designer",
                        "AI Engineering",
                        "DevOps Engineer",
                    ].map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm text-gray-300 backdrop-blur-md"
                        >
                            {item}
                        </span>
                    ))}

                </div>

            </div>
        </section>
    );
}