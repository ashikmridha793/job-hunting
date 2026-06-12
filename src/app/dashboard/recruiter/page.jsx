"use client"
import { useSession } from '@/lib/auth-client';
import { Spinner} from '@heroui/react';
import React from 'react';

const RecruiterDashboardHomePage = () => {

    const { data: session, isPending } = useSession()

    if (isPending) {
        return <div className="flex items-center gap-4"><Spinner /></div>
    }

    const user = session?.user;
    console.log('session data in RecruiterDashboardHomePage:', session)


    return (
        <div className='m-5'>
            <h1 className='text-3xl font-semibold'>Welcome back, {user?.name}</h1>
        </div>
    );
};

export default RecruiterDashboardHomePage;