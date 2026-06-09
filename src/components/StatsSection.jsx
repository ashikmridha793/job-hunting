import {
    Briefcase,
    Factory,
    PersonMagnifier,
    Star,
} from "@gravity-ui/icons";

const stats = [
    {
        icon: Briefcase,
        value: "50K",
        label: "Active Jobs",
    },
    {
        icon: Factory,
        value: "12K",
        label: "Companies",
    },
    {
        icon: PersonMagnifier,
        value: "2M",
        label: "Job Seekers",
    },
    {
        icon: Star,
        value: "97%",
        label: "Satisfaction Rate",
    },
];

export default function StatsSection() {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-25">

            {/* Globe Background */}
            <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-90"
                style={{
                    backgroundImage: "url('/images/globe.png')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-3xl mx-auto mb-10 lg:mb-16">
                    Assisting over 15,000 job seekers
                    <br className="hidden sm:block" />
                    find their dream positions.
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="
                                            rounded-2xl
                                            border border-white/10
                                            bg-white/10
                                            backdrop-blur-lg
                                            p-6 sm:p-8
                                            transition-all
                                            duration-300
                                            hover:scale-105
                                            hover:bg-white/15
                                            cursor-pointer"
                            >
                                <Icon className="w-8 h-8 text-white mb-5" />

                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                    {item.value}
                                </h3>

                                <p className="mt-2 text-sm sm:text-base text-gray-300">
                                    {item.label}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}