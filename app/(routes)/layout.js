"use client";
import React from 'react';

export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchUser = localStorage.getItem('user');
        if (fetchUser) {
            setUser(JSON.parse(fetchUser));
        }
        setLoading(false);
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <UserProvider>
                {children}
            </UserProvider>
        </html>
    )
}
