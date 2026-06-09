"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden bg-black py-16 md:py-24 lg:py-32">
            {/* Globe Background */}
            <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-90"
                style={{
                    backgroundImage: "url('/images/globe.png')",
                }}
            />
                

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <h2
                        className="
              text-white
              font-semibold
              leading-tight

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
                    >
                        Your next role is
                        <br />
                        already looking for you
                    </h2>

                    <p
                        className="
              mt-4
              text-sm
              sm:text-base
              md:text-lg
              text-white/60
              max-w-2xl
              mx-auto
            "
                    >
                        Build a profile in three minutes. The matches start
                        arriving tomorrow morning.
                    </p>

                    <div
                        className="
              mt-8
              flex flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
            "
                    >
                        <Button
                            size="lg"
                            radius="md"
                            className="bg-white text-black min-w-[220px]"
                        >
                            Create a free account
                        </Button>

                        <Button
                            as={Link}
                            href="#pricing"
                            size="lg"
                            radius="md"
                            variant="bordered"
                            className="border-white/20 text-white min-w-[180px]"
                        >
                            View pricing
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}