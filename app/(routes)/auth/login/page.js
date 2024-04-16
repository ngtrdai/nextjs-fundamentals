"use client"
import AuthLayout from "@/app/_components/Layout/AuthLayout";
import {useState} from "react";
import LoginForm from "@/app/(routes)/auth/_components/LoginForm";

export default function Login() {
    const [status, setStatus] = useState(false);

    return (
        <AuthLayout>
            {
                status && (
                    <div className="mb-4 font-medium text-sm text-red-600">
                        {status}
                    </div>
                )
            }
            <LoginForm setStatus={setStatus} />
        </AuthLayout>
)
}