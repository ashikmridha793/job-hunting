"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { At, Lock, Person } from "@gravity-ui/icons";
import { Button, Card, CardHeader } from "@heroui/react";
import { signUp } from "@/lib/auth-client";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!name || !email || !password) {
            toast.error("Fill in all fields correctly!");
            setIsLoading(false);
            return;
        }

        try {
            const { data, error } = await signUp.email({
                email,
                password,
                name,
                callbackURL: "/dashboard",
            });

            if (error) {
                toast.error(error.message || "There was a problem signing up. Please try again.");
            } else {
                toast.success("Account creation was successful!");
            }
        } catch (err) {
            toast.error("There was a problem with the signup process. Please try again.");
            console.error("SignUp Error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md shadow-lg p-2">
                <CardHeader className="flex flex-col gap-1 items-center justify-center pt-6">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">Create a new account</h1>
                    <p className="text-small text-default-500">Enter your information to get started.</p>
                </CardHeader>

                <div className="pb-6">
                    <form onSubmit={handleSignUp} className="flex flex-col gap-4">

                        {/* নাম ফিল্ড */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-default-700">Name</label>
                            <div className="relative flex items-center">
                                <Person className="absolute left-3 text-default-400 text-xl pointer-events-none z-10" />
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-transparent border-2 border-default-200 hover:border-default-400 focus:border-primary rounded-xl text-foreground placeholder-default-400 focus:outline-none transition-colors text-sm min-h-10"
                                />
                            </div>
                        </div>

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
                            {isLoading ? "Creating account..." : "Sign Up"}
                        </Button>
                    </form>

                    {/* সাইন ইন পেজের লিংক */}
                    <div className="flex justify-center items-center mt-5 gap-1.5 text-sm">
                        <span className="text-default-500">Already have an account?</span>
                        <Link href="/signIn" className="text-primary hover:underline font-medium">
                            Log In
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default SignUpPage;