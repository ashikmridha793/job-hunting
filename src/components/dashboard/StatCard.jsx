import React from 'react';
import { Card } from '@heroui/react';
import { motion } from 'framer-motion';

export const StatCard = ({ title, value, icon: Icon, className = "" }) => {
    return (
        <motion.div
            // হভার অ্যানিমেশন
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full"
        >
            <Card
                className={`bg-[#18181b] border border-neutral-800 rounded-2xl p-2 h-full transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] ${className}`}
            >
                <div className="flex flex-col gap-6 justify-between p-4 overflow-visible">
                    {/* Icon Wrapper with subtle rotation */}
                    {Icon && (
                        <motion.div
                            whileHover={{ rotate: 15 }}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-800 text-neutral-300"
                        >
                            <Icon width={20} height={20} />
                        </motion.div>
                    )}

                    {/* Content */}
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-neutral-400">
                            {title}
                        </span>

                        {/* Value Text with Fade-in effect */}
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl font-semibold text-white tracking-tight"
                        >
                            {value}
                        </motion.span>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};