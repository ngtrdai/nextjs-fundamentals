import Link from "next/link";
import Image from "next/image";

export default function BlogCard({blog}) {
    const images = require.context('@/app/_assets/images/thumbs', true);
    const keys = images.keys();
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomImage = images(randomKey).default;

    return (
        <article className="brick entry format-standard">
            <div className="entry-thumb">
                <Link href={`/blogs/${blog.id}`}>
                    <Image
                        src={randomImage}
                        alt={blog.title}
                        width={400}
                        height={400}
                    />
                </Link>
            </div>
            <div className="entry-text">
                <div className="entry-header">
                    <div className={"entry-meta"}>
                        <span className="cat-links">
                            <Link href="#">Categories</Link>
                        </span>
                    </div>
                    <h1 className="entry-title">
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </h1>
                </div>
                <div className={"entry-excerpt"}>
                    <p>{blog.body}</p>
                </div>
            </div>
        </article>
    );
}