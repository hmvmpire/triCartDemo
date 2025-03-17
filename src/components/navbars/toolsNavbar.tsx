import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { Nav2SearchBox } from "../searchBoxes/nav2SearchBox";
import { ToolsNavLinks } from "./subComponents/toolsNavLinks";
import { ToolsSideNav } from "./subComponents/toolsSideNav";
import Link from "next/link";

export const ToolsNavbar = () => {
    const matches = useMediaQuery("(max-width:1480px)");
    const matches2 = useMediaQuery("(max-width:1130px)");
    const matches3 = useMediaQuery("(max-width:980px)");
    const [show, setShow] = useState(false);
    const router = useRouter()
    return (
        <div
            className={`container1 flex flex-col justify-center md:justify-center ${matches3 ? "h-20 gap-y-5" : "h-44 gap-y-5 sticky -top-20 z-50"
                }`}
        >
            <div
                className={`flex items-center ${matches ? (matches2 ? "gap-x-14" : "gap-x-20") : "gap-x-36"
                    } justify-between`}
            >
                <div className="flex items-start gap-x-4">
                    {matches3 && (
                        <button
                            onClick={() => setShow(!show)}
                            className={`flex items-center justify-center mt-1`}
                        >
                            <FontAwesomeIcon icon={faBars} className="text-xl" />
                        </button>
                    )}
                    <button onClick={() => router.push("/tricart-tools")} className={`text-2xl fw_600 text-TOOLS_PRIMARY-HOVER`}>LOGO</button>
                </div>
                <div
                    className={`flex items-center ${matches3 ? "justify-end w-max" : (matches2 ? "gap-x-14 w-full" : "gap-x-20 w-full")
                        }`}
                >
                    {!matches3 && (
                        <div className="w-full">
                            <Nav2SearchBox placeholder="Search for products..." />
                        </div>
                    )}
                    <Link href={"/tricart-tools/account/my-account"} className="border-none outline-none shadow-none block sm:hidden relative mr-5">
                        <FontAwesomeIcon icon={faUser} className="text-2xl text-zinc-800" />
                    </Link>
                    <Link href={"/tricart-tools/cart"} className="border-none outline-none shadow-none block sm:hidden relative">
                        <FontAwesomeIcon icon={faBagShopping} className="text-2xl text-zinc-800" />
                        <div className="h-4 min-w-4 rounded-full bg-TOOLS_PRIMARY flex items-center justify-center absolute top-0 -right-2 text-xs">0</div>
                    </Link>
                    <div
                        className={`hidden sm:flex items-center ${matches3 ? "gap-x-5" : "gap-x-8"}`}
                    >
                        <Link href={"/tricart-tools/account/my-account"} className="border-none outline-none shadow-none text-zinc-700 flex items-center gap-x-3">
                            <FontAwesomeIcon icon={faUser} className="text-3xl" />
                            <div className="flex flex-col items-start">
                                <span className="text-xs text-zinc-500 text-left fw_400">Welcome</span>
                                <p className="fw_600 text-base whitespace-nowrap">Sign In / Register</p>
                            </div>
                        </Link>
                        <Link href={"/tricart-tools/cart"} className="flex items-center gap-x-5 border-none outline-none shadow-none text-zinc-700">
                            <div className="relative">
                                <FontAwesomeIcon icon={faBagShopping} className="text-3xl" />
                                <div className="h-4 min-w-4 rounded-full bg-TOOLS_PRIMARY flex items-center justify-center absolute top-0 -right-2 text-xs">0</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-xs text-zinc-500 whitespace-nowrap text-left fw_400">Shopping Cart</span>
                                <p className="fw_700 text-base whitespace-nowrap text-black">$0.00</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {!matches3 && <ToolsNavLinks />}
            <ToolsSideNav show={show} setShow={setShow} />
        </div>
    );
};
