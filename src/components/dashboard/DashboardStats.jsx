import React from 'react';
import { StatCard } from './StatCard';
import { motion } from 'framer-motion';

export const DashboardStats = ({ statsData = [] }) => {
    // প্যারেন্ট কন্টেইনারের ভ্যারিয়েন্ট (শিশুদের অ্যানিমেশন নিয়ন্ত্রণ করবে)
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1 // একটি কার্ডের ০.১ সেকেন্ড পর আরেকটি আসবে
            }
        }
    };

    // প্রতিটি সিঙ্গেল আইটেমের অ্যানিমেশন ভ্যারিয়েন্ট
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div className="w-full">
            {/* Framer motion wrapper for the grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                {statsData.map((stat, index) => (
                    <motion.div key={stat.id || index} variants={itemVariants}>
                        <StatCard
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};