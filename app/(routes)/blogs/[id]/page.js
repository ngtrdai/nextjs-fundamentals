"use client"
import GuestLayout from "@/app/_components/Layout/GuestLayout";
import {useState, useEffect, Suspense} from "react";
import Image from "next/image";

export default function BlogDetail({ params }) {
    const id = params.id;
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/blogs/${id}`)
            .then(response => response.json())
            .then(data => {
                setBlog(data.data);
                setLoading(false);
            });
    }, []);

    const images = require.context('@/app/_assets/images/thumbs', true);
    const keys = images.keys();
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomImage = images(randomKey).default;

    return (
        <GuestLayout>
            <section id={"content-wrap"} className={"blog-single"}>
                <div className={"row"}>
                    <div className={"col-twelve"}>
                        <article className="format-standard">
                            <div className="content-media">
                                <div className="post-thumb">
                                    <Image src={randomImage} alt="blog" width={1200} height={800} />
                                </div>
                            </div>
                            <div className="primary-content">
                                <Suspense fallback={<div>Loading...</div>}>
                                    {loading ? <div>Loading...</div> : (
                                        <div>
                                            <h1>{blog.title}</h1>
                                            <div dangerouslySetInnerHTML={{__html: blog.body}}></div>
                                        </div>
                                    )}
                                </Suspense>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </GuestLayout>
    )
}