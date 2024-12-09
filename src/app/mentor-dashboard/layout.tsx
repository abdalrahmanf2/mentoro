import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import { PropsWithChildren } from "react";

const DashBoardLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <DashboardNavbar />
            <div className="relative bg-slate-50">
                <DashboardSidebar />
                <div className="pl-20 pr-10 py-10">{children}</div>
            </div>
        </>
    );
};

export default DashBoardLayout;
