"use client";

import { useState } from "react";
import { Button, Card, Switch } from "@heroui/react";
import {
    ArrowRight,
    Plus,
    Rocket,
    ChartColumn,
    ThunderboltFill,
} from "@gravity-ui/icons";

const plans = {
    monthly: [
        {
            name: "Starter",
            icon: Rocket,
            price: 0,
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited",
            ],
        },
        {
            name: "Growth",
            icon: ChartColumn,
            price: 17,
            popular: true,
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited",
            ],
        },
        {
            name: "Premium",
            icon: ThunderboltFill,
            price: 99,
            features: [
                "Everything in Pro",
                "Multi-profile career portfolios",
                "Shared talent rooms",
                "Recruiter view (read-only)",
            ],
        },
    ],

    yearly: [
        {
            name: "Starter",
            icon: Rocket,
            price: 0,
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited",
            ],
        },
        {
            name: "Growth",
            icon: ChartColumn,
            price: 13,
            popular: true,
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited",
            ],
        },
        {
            name: "Premium",
            icon: ThunderboltFill,
            price: 75,
            features: [
                "Everything in Pro",
                "Multi-profile career portfolios",
                "Shared talent rooms",
                "Recruiter view (read-only)",
            ],
        },
    ],
};

export default function PricingSection() {
    const [yearly, setYearly] = useState(false);

    const currentPlans = yearly ? plans.yearly : plans.monthly;

    return (
        <section className="relative overflow-hidden py-20 lg:py-28">
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]" />

            <div className="container relative z-10 mx-auto px-4">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
                        Pricing
                    </p>

                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        Pay for the leverage,
                        <br />
                        not the listings
                    </h2>

                    {/* Toggle */}
                    <div className="mt-10 flex justify-center">
                        <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-xl">
                            <span
                                className={`text-sm ${!yearly ? "text-white" : "text-white/60"
                                    }`}
                            >
                                Monthly
                            </span>

                            <Switch
                                isSelected={yearly}
                                onValueChange={setYearly}
                                color="secondary"
                            />

                            <div className="flex items-center gap-2">
                                <span
                                    className={`text-sm ${yearly ? "text-white" : "text-white/60"
                                        }`}
                                >
                                    Yearly
                                </span>

                                <span className="rounded-full bg-fuchsia-600 px-2 py-1 text-xs text-white">
                                    25%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {currentPlans.map((plan) => {
                        const Icon = plan.icon;

                        return (
                            <Card
                                key={plan.name}
                                className={`
                                        relative overflow-hidden border
                                        backdrop-blur-xl
                                        bg-white/[0.04]
                                        border-white/10
                                        p-6
                                        min-h-[520px]
                                        ${plan.popular
                                        ? "scale-100 xl:scale-105 border-fuchsia-500/30 shadow-[0_0_50px_rgba(217,70,239,0.15)]"
                                        : ""
                                    }
                                      `}
                            >
                                {/* Glow */}
                                {plan.popular && (
                                    <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent" />
                                )}

                                <div className="relative z-10 flex h-full flex-col">
                                    {/* Top */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                                                <Icon
                                                    width={18}
                                                    height={18}
                                                    className="text-fuchsia-400"
                                                />
                                            </div>

                                            <h3 className="text-2xl text-white">
                                                {plan.name}
                                            </h3>
                                        </div>

                                        <div className="text-right">
                                            <div className="text-5xl font-bold text-white">
                                                ${plan.price}
                                            </div>

                                            <span className="text-sm text-white/60">
                                                /month
                                            </span>
                                        </div>
                                    </div>

                                    <p className="mt-8 text-white/80">
                                        Start building your insights hub:
                                    </p>

                                    {/* Features */}
                                    <ul className="mt-6 space-y-4">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-3 text-white/65"
                                            >
                                                <div className="flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/5">
                                                    <Plus width={12} height={12} />
                                                </div>

                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button */}
                                    <div className="mt-auto pt-10">
                                        <Button
                                            radius="full"
                                            className={`
                        h-14 w-full
                        ${plan.popular
                                                    ? "bg-white text-black"
                                                    : "bg-white/10 text-white backdrop-blur-xl"
                                                }
                      `}
                                        >
                                            <div className="flex w-full items-center justify-between px-2">
                                                <span>Choose This Plan</span>

                                                <ArrowRight width={18} height={18} />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}