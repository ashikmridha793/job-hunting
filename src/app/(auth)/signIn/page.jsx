"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { At, Lock, Person } from "@gravity-ui/icons";
import { Button, Card, CardHeader } from "@heroui/react";
import { signIn, } from "@/lib/auth-client";

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!email || !password) {
            toast.error("Fill in all fields correctly!");
            setIsLoading(false);
            return;
        }

        try {
            const { data, error } = await signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            if (error) {
                toast.error(error.message || "There was a problem signing in. Please try again.");
            } else {
                toast.success("Signed in successfully!");
            }
        } catch (err) {
            toast.error("There was a problem with the sign-in process. Please try again.");
            console.error("SignIn Error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md shadow-lg p-2">
                <CardHeader className="flex flex-col gap-1 items-center justify-center pt-6">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Sign in to your account</h1>
                    <p className="text-small text-default-500">Enter your information to access your account.</p>
                </CardHeader>

                <div className="pb-6">
                    <form onSubmit={handleSignIn} className="flex flex-col gap-4">

                        {/* ইমেইল ফিল্ড */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-default-700">Email</label>
                            <div className="relative flex items-center">
                                <At className="absolute left-3 text-default-400 text-xl pointer-events-none z-10" />
                                <input
                                    type="email"
                                    placeholder="example@mail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-transparent border-2 border-default-200 hover:border-default-400 focus:border-primary rounded-xl text-foreground placeholder-default-400 focus:outline-none transition-colors text-sm min-h-10"
                                />
                            </div>
                        </div>

                        {/* পাসওয়ার্ড ফিল্ড */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-default-700">Password</label>
                            <div className="relative flex items-center">
                                <Lock className="absolute left-3 text-default-400 text-xl pointer-events-none z-10" />
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-transparent border-2 border-default-200 hover:border-default-400 focus:border-primary rounded-xl text-foreground placeholder-default-400 focus:outline-none transition-colors text-sm min-h-10"
                                />
                            </div>
                        </div>

                        {/* সাবমিট বাটন */}
                        <Button
                            type="submit"
                            color="primary"
                            variant="solid"
                            className="w-full mt-4 font-medium"
                            isLoading={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>
                    <div className="flex justify-center items-center mt-5 gap-1.5 text-sm">
                        <span className="text-default-500">Don't have an account?</span>
                        <Link href="/signUp" className="text-primary hover:underline font-medium">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default SignInPage;