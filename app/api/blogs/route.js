export const GET = async (request) => {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || 1;
    const limit = searchParams.get("limit") || 10;

    const blogs = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    const MAX_BLOGS = 100

    const totalPages = Math.ceil(MAX_BLOGS / limit);
    const nextPage = page < totalPages ? +page + 1 : null;
    const prevPage = page > 1 ? +page - 1 : null;

    return Response.json({
        message: "GET /api/blogs",
        data: await blogs.json(),
        pagination: {
            total: MAX_BLOGS,
            totalPages,
            nextPage,
            prevPage
        }
    });
}