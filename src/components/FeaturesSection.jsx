"use client";

import { Card } from "@heroui/react";

import {

    FileText,
    Star,
    Bookmark,
    ArrowUpRight,
    Magnifier,
    Sparkles,
    Factory,
    ChartColumn
} from "@gravity-ui/icons";

const features = [
    {
        icon: Magnifier,
        title: "Smart Search",
        description:
            "Find your ideal job with advanced filters.",
    },
    {
        icon: ChartColumn,
        title: "Salary Insights",
        description:
            "Get real salary data to negotiate confidently.",
    },
    {
        icon: Factory,
        title: "Top Companies",
        description:
            "Apply to vetted companies that are hiring.",
    },
    {
        icon: Bookmark,
        title: "Saved Jobs",
        description:
            "Manage apps & favorites on your dashboard.",
    },
    {
        icon: Sparkles,
        title: "One-Click Apply",
        description:
            "Simplify your job applications.",
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description:
            "Create professional resumes with templates.",
    },
    {
        icon: Star,
        title: "Skill-Based Matching",
        description:
            "Discover jobs that match your skills.",
    },
    {
        icon: ArrowUpRight,
        title: "Career Growth Resources",
        description:
            "Boost your career with interview tips.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative overflow-hidden bg-black py-24">

            {/* background */}
            <div className="absolute inset-0">

                {/* radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2c1018_0%,black_70%)]" />

            </div>

            <div className="container relative z-10 mx-auto px-5">

                {/* Heading */}
                <div className="mb-20 text-center">

                    <span
                        className="
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-gray-400
                        "
                    >
                        <span className="h-2 w-2 bg-violet-500"></span>
                        Features Job
                        <span className="h-2 w-2 bg-violet-500"></span>
                    </span>

                    <h2
                        className="
                                    mx-auto
                                    mt-5
                                    max-w-2xl
                                    text-4xl
                                    font-bold
                                    leading-tight
                                    text-white
                                    md:text-6xl
                                    "
                    >
                        Everything you need
                        <br />
                        to succeed
                    </h2>

                </div>

                {/* Features */}

                <div
                    className="
                                grid
                                grid-cols-1
                                gap-y-10
                                sm:grid-cols-2
                                lg:grid-cols-4
                                lg:gap-x-10
                                "
                >
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="flex items-start gap-4"
                            >
                                {/* Icon box */}

                                <Card
                                    className="
                                        min-w-[62px]
                                        h-[62px]
                                        w-[62px]
                                        bg-gradient-to-b
                                        from-[#1f0f16]
                                        to-[#15080f]
                                        border
                                        border-white/10
                                        backdrop-blur-xl
                                        flex
                                        items-center
                                        justify-center
                                        "
                                >
                                    <Icon
                                        width={26}
                                        height={26}
                                        className="text-pink-300"
                                    />
                                </Card>

                                {/* Content */}

                                <div>
                                    <h3
                                        className="
                                                    mb-2
                                                    text-lg
                                                    font-medium
                                                    text-white
                                                    "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                                                    text-sm
                                                    leading-7
                                                    text-gray-400
                                                    "
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}