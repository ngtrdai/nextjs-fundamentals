import { z } from "zod";

const schema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    website: z.string().url(),
    message: z.string().min(10).max(500),
});

export const GET = async (request) => {
    return Response.json({
        message: "GET /api/contact",
        data: [
            {
                id: 1,
                name: "John Doe",
                email: "john.doe@example.com",
                website: "https://example.com",
                message: "Hello, World!"
            },
            {
                id: 2,
                name: "Jane Doe",
                email: "jane.doe@example.com",
                website: "https://example.com",
                message: "Hello, World!"
            }
        ]
    });
}

export const POST = async (req) => {
    try {
        const parsedBody = schema.parse(await req.json());

        return Response.json({
            message: "POST /api/contact",
            data: parsedBody
        });
    } catch (error) {
        return Response.json({
            message: "POST /api/contact",
            error: error.errors
        }, { status: 422 });
    }
}