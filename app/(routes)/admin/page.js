import AdminLayout from "@/app/_components/Layout/AdminLayout";

export default function Admin() {
    return (
        <AdminLayout title={"Dashboard"}>
            <div className="p-6 lg:p-8 bg-white border-b border-gray-200">
                <h1 className="mt-8 text-2xl font-medium text-gray-900">
                    Welcome to the Admin Dashboard
                </h1>
            </div>
        </AdminLayout>
    )
}