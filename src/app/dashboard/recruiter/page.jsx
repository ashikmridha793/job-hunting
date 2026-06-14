"use client"
import { useSession } from '@/lib/auth-client';
import { Spinner } from '@heroui/react';
import React from 'react';
import { FileText, PersonSpeaker, ThunderboltFill, CircleCheckFill } from "@gravity-ui/icons";
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { motion } from 'framer-motion';

const RecruiterDashboardHomePage = () => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <div className="flex h-[80vh] w-full items-center justify-center">
                <Spinner size="lg" label="Loading dashboard..." color="primary" />
            </div>
        );
    }

    const recruiterStats = [
        { id: 1, title: "Total Job Posts", value: "48", icon: FileText },
        { id: 2, title: "Total Applicants", value: "1,284", icon: PersonSpeaker },
        { id: 3, title: "Active Jobs", value: "18", icon: ThunderboltFill },
        { id: 4, title: "Jobs Closed", value: "32", icon: CircleCheckFill },
    ];

    const user = session?.user;

    return (
        <div className="space-y-6 p-6 max-w-7xl mx-auto overflow-hidden">
            {/* Header with Fade-in-up animation */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h1 className="text-3xl font-bold tracking-tight text-white">
                    Welcome back, {user?.name || 'Recruiter'}
                </h1>
                <p className="text-neutral-400 text-sm mt-1">
                    Here is what's happening with your job listings today.
                </p>
            </motion.div>

            {/* Fully Animated Stats Grid */}
            <DashboardStats statsData={recruiterStats} />
        </div>
    );
};

export default RecruiterDashboardHomePage;