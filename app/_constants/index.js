export const MENU_HEADER_ITEMS = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Categories",
        url: "/categories",
        children: [
            {
                name: "Wordpress",
                url: "/categories"
            },
            {
                name: "HTML",
                url: "/categories"
            },
            {
                name: "Photography",
                url: "/categories"
            },
            {
                name: "UI",
                url: "/categories"
            },
            {
                name: "Mockups",
                url: "/categories"
            },
            {
                name: "Branding",
                url: "/categories"
            }
        ]
    },
    {
        name: "Blog",
        url: "/blogs",
        children: [
            {
                name: "Video Post",
                url: "/blogs/single-video"
            },
            {
                name: "Audio Post",
                url: "/blogs/single-audio"
            },
            {
                name: "Gallery Post",
                url: "/blogs/single-gallery"
            },
            {
                name: "Standard Post",
                url: "/blogs/single-standard"
            }
        ]
    },
    {
        name: "Styles",
        url: "/styles"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Contact",
        url: "/contact"
    }
];