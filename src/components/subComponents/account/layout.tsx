import { Breadcrumb } from "@/components/shared/breadcrumb"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react";
import { Sidebar } from "./sidebar";
import { AuthGuard } from "@/services/authGuard";
import { MainLayout } from "@/components/shared/MainLayout";

interface LayoutProps {
    children: JSX.Element;
    title: string
    baseUrl: string
}

export const Layout: FC<LayoutProps> = ({
    children, title,baseUrl
}): JSX.Element => {
    const breadcrumbData = [
        { name: <FontAwesomeIcon icon={faHome} />, link: "/" },
        { name: "Account", link: "/" },
    ]
    return (
        <AuthGuard baseUrl={baseUrl}>
            <MainLayout>
                <div className="bg-zinc-100">
                    <div className="h-60 sm:h-72 md:h-80 w-full relative bg-zinc-200">
                        <div className="flex flex-col gap-y-3 justify-center items-center container1 h-full">
                            <Breadcrumb hoverColor="hover:text-black" linkColor="text-zinc-700" breadcrumbData={breadcrumbData} />
                            <h1 className="text-2xl sm:text-3xl fw_700 text-black">{title}</h1>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-5 container1 py-10 relative">
                        <Sidebar />
                        <div className="w-full overflow-hidden bg-white rounded-md p-5 min-h-[500px]">
                            {children}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </AuthGuard>
    )
}