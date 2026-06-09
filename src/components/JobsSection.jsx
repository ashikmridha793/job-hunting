"use client";

import {
    Card,
    Button,
    Chip,
} from "@heroui/react";

import {
    MapPin,
    Briefcase,
    ArrowRight
} from "@gravity-ui/icons";

const jobs = [
    {
        title: "Frontend Developer",
        location: "New York, USA",
        type: "Hybrid",
        salary: "€25–€40/hour",
    },
    {
        title: "UI/UX Designer",
        location: "California, USA",
        type: "Remote",
        salary: "€30–€50/hour",
    },
    {
        title: "React Developer",
        location: "London, UK",
        type: "Hybrid",
        salary: "€35–€60/hour",
    },
    {
        title: "Next.js Developer",
        location: "Berlin, Germany",
        type: "Remote",
        salary: "€40–€70/hour",
    },
    {
        title: "Backend Developer",
        location: "Toronto, Canada",
        type: "On Site",
        salary: "€30–€55/hour",
    },
    {
        title: "Full Stack Engineer",
        location: "Dubai, UAE",
        type: "Hybrid",
        salary: "€45–€80/hour",
    },
];

export default function JobsSection() {
    return (
        <section className="relative overflow-hidden bg-black py-20">

            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a0912_0%,#000_70%)]" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 rounded-full bg-pink-500/10 text-pink-300 text-xs uppercase tracking-widest">
                        Smart Job Discovery
                    </span>

                    <h2 className="text-white text-3xl md:text-5xl font-bold mt-6">
                        The roles you would never
                        <br />
                        find by searching
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {jobs.map((job, i) => (
                        <Card
                            key={i}
                            className="
                                    bg-white/5
                                    border border-white/10
                                    backdrop-blur-xl
                                    hover:scale-105
                                    transition-all
                                    duration-300
                                    "
                        >
                            <div className="p-7">

                                <h3 className="text-2xl text-white font-semibold mb-3">
                                    {job.title}
                                </h3>

                                <p className="text-gray-400 mb-6">
                                    Showcase your commitment to diversity and
                                    inclusion by highlighting initiatives
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">

                                    <Chip
                                        startContent={<MapPin width={14} />}
                                    >
                                        {job.location}
                                    </Chip>

                                    <Chip
                                        startContent={<Briefcase width={14} />}
                                    >
                                        {job.type}
                                    </Chip>

                                </div>

                                <Button
                                    variant="light"
                                    endContent={<ArrowRight width={16} />}
                                >
                                    Apply Now
                                </Button>

                            </div>

                        </Card>
                    ))}

                </div>

                <div className="mt-12 text-center">

                    <Button
                        size="lg"
                        className="bg-white text-black"
                    >
                        View all jobs
                    </Button>

                </div>

            </div>
        </section>
    );
}