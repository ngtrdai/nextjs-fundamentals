"use client"
import {useState} from "react";
import FormField from "@/app/_components/Form/FormField";
import Input from "@/app/_components/Form/Input";
import {redirect} from "next/navigation";
import {UserContext} from "@/app/(routes)/layout";
import React from "react";

export default function LoginForm() {
    const userContext = React.useContext(UserContext);
    const [errors, setErrors] = useState({});
    const defaultForm = {
        email: '',
        password: ''
    }
    const [form, setForm] = useState(defaultForm);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            if (res.status === 422) {
                res.json().then(data => {
                    setErrors(data.error.reduce((acc, error) => {
                        acc[error.path] = error.message;
                        return acc;
                    }, {}));
                });
            } else if (res.status === 200) {
                res.json().then(data => {
                    localStorage.setItem('user', JSON.stringify(data.data.user));
                    userContext.setUser(data.data.user)
                });
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormField error={errors.email}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input fieldName={"email"}
                       className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}
                       placeholder={"Email"}
                       value={form.email}
                       onChange={(e) => setForm({...form, email: e.target.value})}
                />
            </FormField>
            <FormField error={errors.password}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Input fieldName={"password"}
                       className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}
                       placeholder={"Password"}
                       value={form.password}
                       onChange={(e) => setForm({...form, password: e.target.value})}
                />
            </FormField>
            <div className="flex items-center justify-end mt-4">
                <button type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Login
                </button>
            </div>
        </form>
    )
}