"use client"
import React from 'react'
import {UserContext} from "@/app/(routes)/layout";
import {useRouter} from "next/navigation";

export default function RootLayout({ children }) {
    const { user, loading } = React.useContext(UserContext)
    const router = useRouter()

    React.useEffect(() => {
        if (!loading && !user) {
            router.push('/auth/login')
        }
    }, [loading, user])

    return (
        <>
            {children}
        </>
    )
}
