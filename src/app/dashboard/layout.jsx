import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen">
                <DashboardSidebar />
                {/* Place children where you want to render a page or nested layout */}
                <div className="flex-1">{children}</div>
        </div>
    )
}