"use client"
import React from "react"
import {UserContext} from "@/app/(routes)/layout";
import {redirect} from "next/navigation";

export default function RootLayout({ children }) {
    const user = React.useContext(UserContext).user
    if (user) {
        redirect("/admin")
    }

    return (
        <>
            {children}
        </>
    )
}
