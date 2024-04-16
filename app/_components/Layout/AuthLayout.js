import "@/app/_assets/css/admin/main.css"

export default function AuthLayout({ children }) {
    return (
        <body id={"top"}>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <strong>LOGIN</strong>
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </body>
    )
}