import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const SignInPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Sign In</h1>
            <Button>
                <Link href="/signUp">Sign Up</Link>
            </Button>
        </div>
    );
};

export default SignInPage;