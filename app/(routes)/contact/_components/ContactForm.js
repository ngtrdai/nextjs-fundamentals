"use client";
import FormField from "@/app/_components/Form/FormField";
import Input from "@/app/_components/Form/Input";
import TextArea from "@/app/_components/Form/TextArea";
import { useState } from "react";

export default function ContactForm() {
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState({});
    const defaultForm = {
        name: '',
        email: '',
        website: '',
        message: '',
    }
    const [form, setForm] = useState(defaultForm);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/contact', {
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
                    setNotification(data.data);
                    setForm(defaultForm);
                });

                setErrors({});
            }
        });
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {notification.message && <div className="notification">{notification.message}</div>}
            <fieldset>
                <FormField error={errors.name}>
                    <Input fieldName={"name"} className={"full-width"}
                           placeholder={"Your Name"}
                           value={form.name}
                           onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </FormField>
                <FormField error={errors.email}>
                    <Input fieldName={"email"} className={"full-width"}
                           placeholder={"Email Address"}
                           value={form.email}
                           onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                </FormField>
                <FormField error={errors.website}>
                    <Input fieldName={"website"} className={"full-width"}
                           placeholder={"Website"}
                           value={form.website}
                           onChange={(e) => setForm({ ...form, website: e.target.value })}
                    />
                </FormField>
                <FormField className={"message"} error={errors.message}>
                    <TextArea fieldName={"message"} className={"full-width"}
                              placeholder={"Your Message"}
                              value={form.message}
                              onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                </FormField>
                <button type="submit" className="submit button-primary full-width-on-mobile">Submit</button>
            </fieldset>
        </form>
    )
}