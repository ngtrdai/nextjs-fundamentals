export const GET = async (request, { params }) => {
    const { id } = params;
    if (id) {
        const blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!blog.ok) {
            return Response.json({
                status: 404,
                data: {
                    message: 'Blog not found'
                }
            })
        }

        return Response.json({
            status: 200,
            data: await blog.json()
        })
    }
}