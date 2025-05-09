import Image from "next/image";
import logo from "../../static/commonLogo2.png";
import logo2 from "../../static/commonLogo1.png";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";
import { handleSmoothScroll } from "@/services/generalService";
import Link from "next/link";
import { commonNavbarLinks } from "@/data/MainPageData";

interface CommonNavbarProps {
    container?: boolean
}


export const CommonNavbar: FC<CommonNavbarProps> = ({
    container
}): JSX.Element => {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For sidebar toggle
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    const loc = window.location.pathname;
    return (
        <>
            <div className={`sticky z-30 top-0 h-20 left-0 text-black bg-white shadow-sm`}>
                <div className={`${container ? "container1" : "container3"} h-20 flex items-center justify-between gap-x-4`}>
                    <Image
                        src={logo2}
                        alt="logo"
                        className="w-24 sm:w-28 md:w-32 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                        onClick={() => router.push("/")}
                    />
                    {!isSidebarOpen && <button
                        onClick={toggleSidebar}
                        className={`lg:hidden text-black hover:scale-95 transition-colors`}
                    >
                        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="text-xl" />
                    </button>}

                    <div className="hidden lg:flex items-center gap-x-5">
                        {commonNavbarLinks.map((navlink, index) => (
                            <div
                                key={index + 1}
                                className="relative"
                            >
                                {loc === "/" ? <a href={navlink.path}
                                    onClick={handleSmoothScroll}
                                    className={`border-none outline-none shadow-none cursor-pointer duration-300 w-max text-zinc-700 hover:text-black fw_400 px-4 py-1 text-base flex items-center gap-x-2 py-2`}
                                >
                                    {navlink.label}
                                </a> :
                                    <Link href={"/" + navlink.path}
                                        className={`border-none outline-none shadow-none cursor-pointer duration-300 w-max text-zinc-700 hover:text-black fw_400 px-4 py-1 text-base flex items-center gap-x-2 py-2`}
                                    >
                                        {navlink.label}
                                    </Link>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar for Small Screens */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={toggleSidebar}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-5 border-b border-gray-200">
                    <Image
                        src={logo2}
                        alt="logo"
                        className="w-20 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                        onClick={() => router.push("/")}
                    />
                    <button
                        onClick={toggleSidebar}
                        className="text-black hover:scale-95 transition-colors"
                    >
                        <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <div className="h-[calc(100vh-180px)] overflow-y-auto">

                    <div className="px-5 py-8 flex flex-col gap-y-6">
                        {commonNavbarLinks.map((navlink, index) => (
                            <div key={index + 1}>
                                <a href={navlink.path}
                                    onClick={(e) => { toggleSidebar(); handleSmoothScroll(e) }}
                                    className="border-none outline-none shadow-none flex items-center gap-x-2 fw_$00 text-black hover:scale-95 transition-colors"
                                >
                                    {navlink.label}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};