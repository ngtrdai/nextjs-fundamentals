"use client";

import GuestLayout from "@/app/_components/Layout/GuestLayout";
import Pagination from "@/app/_components/Pagination/Pagination";
import BlogCard from "@/app/_components/BlogCard/BlogCard";
import { useState, useEffect } from "react";

export default function Home() {
    const [blogs, setBlogs] = useState([]);
    const [pagination, setPagination] = useState({});
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('/api/blogs?page=' + page)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.data);
                setPagination({
                    ...data.pagination,
                    currentPage: page,
                });
            })
            .finally(() => setLoading(false));

        return () => {
            setBlogs([]);
            setPagination({});
        }
    }, [page]);


    return (
        <GuestLayout>
            <section id={"bricks"}>
                <div className={"row masonry"}>
                    <div className={"bricks-wrapper"}>
                        <div className="grid-sizer"></div>
                        {loading ? (
                            <div className={"col-twelve"} style={{ display: "flex", justifyContent: "center" }}>
                                <div className="loader" />
                            </div>
                        ): blogs.length > 0 ? blogs.map((blog, index) => (
                            <BlogCard key={index} blog={blog} />
                        )) : (
                            <div className={"col-twelve"} style={{ textAlign: "center" }}>
                                <p>No blogs found.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={"row"}>
                    {blogs.length > 0 && <Pagination pagination={pagination} setPage={setPage} />}
                </div>
            </section>
        </GuestLayout>
    )
}