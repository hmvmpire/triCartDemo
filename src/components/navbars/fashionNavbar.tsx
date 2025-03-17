import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarSearchbox } from "../searchBoxes/navbarSearchbox";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { FashionNavLinks } from "./subComponents/fashionNavLinks";
import Link from "next/link";
import { FashionSideNav } from "./subComponents/fashionSideNav";

export const FashionNavbar = () => {
    const matches3 = useMediaQuery("(max-width:980px)");
    const [show, setShow] = useState(false);
    const router = useRouter()
    const nav4Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-fashion")
    return (
        <div
            // style={{ backgroundColor: bgColor ? bgColor : "bg-fashionPrimary" }}
            className={`bg-fashionPrimary-MED_LIGHT flex flex-col justify-center pb-4 ${matches3 ? "gap-y-4" : "gap-y-4"
                }`}
        >
            <div className="bg-fashionPrimary">
                <div className={`flex items-center gap-x-4 justify-between h-14 ${!nav4Route ? "container1" : "container3"}`}>
                    <p className="text-white fw_400 text-sm">Get 10% OFF at the Tricart Fashion Selection -
                        <button className="fw_600">Shop Now!</button>
                    </p>
                    <div className="hidden lg:block">
                        <FashionNavLinks />
                    </div>
                </div>
            </div>
            <div className={`${!nav4Route ? "container1" : "container3"} flex items-center gap-x-4 justify-between relative`}>
                <div className="flex items-center gap-x-3">
                    <button className="text-2xl block lg:hidden" onClick={() => setShow(true)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <button onClick={() => router.push("/tricart-fashion")} className={`text-2xl fw_600 text-fashionPrimary-HOVER`}>LOGO</button>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className={`hidden lg:block w-80`}>
                        <NavbarSearchbox bgColor="bg-white" placeholder="Search for products..." />
                    </div>
                    <Link href={"/tricart-fashion/account/wishlist"} className="border-none outline-none shadow-none fw_600 text-sm whitespace-nowrap text-black">
                        <FontAwesomeIcon icon={faHeart} className="text-2xl" />
                    </Link>
                    <Link href={"/tricart-fashion/account/my-account"} className="border-none outline-none shadow-none fw_600 text-sm whitespace-nowrap text-black">
                        <FontAwesomeIcon icon={faUser} className="text-2xl" />
                    </Link>
                    <Link href={"/tricart-fashion/cart"} className="border-none outline-none shadow-none relative text-black">
                        <FontAwesomeIcon icon={faBagShopping} className="text-3xl" />
                        <div className="h-4 min-w-4 rounded-full bg-TOOLS_PRIMARY flex items-center justify-center absolute top-0 -right-2 text-xs">0</div>
                    </Link>
                </div>
            </div>
            <FashionSideNav nav4={true} productBaseUrl={"/tricart-fashion/product"} categoryBaseUrl="/tricart-fashion" show={show} setShow={setShow} showSearchBox={true} />
        </div>
    );
};
