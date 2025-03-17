import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarSearchbox } from "../searchBoxes/navbarSearchbox";
import {
    faHeart,
    faQuestionCircle,
    faUser
} from "@fortawesome/free-regular-svg-icons";
import {
    faBars,
    faExchange,
    faBagShopping
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { ShippingMethods3 } from "./subComponents/shippingMethods";
import { DecorNavLinks } from "./subComponents/decorNavLinks";
import { homeDecorCategories } from "@/data/homeDecorData";
import { linkType } from "@/Types/navbarProsTypes";
import Link from "next/link";
import { DecorSideNav } from "./subComponents/decorSideNav";

const BREAKPOINTS = {
    LARGE_DESKTOP: "(max-width:1580px)",
    DESKTOP: "(max-width:1480px)",
    TABLET: "(max-width:1130px)",
    MOBILE: "(max-width:980px)",
} as const;

interface NavLinkProps {
    href: string;
    icon: any;
    text: string;
    showText?: boolean;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text, showText = true, className = "" }) => (
    <Link href={href} className={`border-none outline-none shadow-none flex items-center gap-x-2 fw_600 text-sm whitespace-nowrap text-DECOR_PRIMARY ${className}`}>
        <FontAwesomeIcon icon={icon} className="text-lg" />
        {showText && text}
    </Link>
);

export const DecorNavbar: React.FC = () => {
    const isLargeDesktop = useMediaQuery(BREAKPOINTS.LARGE_DESKTOP);
    const isDesktop = useMediaQuery(BREAKPOINTS.DESKTOP);
    const isMobile = useMediaQuery(BREAKPOINTS.MOBILE);

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const router = useRouter();

    const handleLogoClick = () => router.push("/tricart-home-decore");

    const renderSearchBox = () => (
        <div className="w-80 xl:w-96">
            <NavbarSearchbox
                bgColor="bg-zinc-100"
                placeholder="Search for products..."
            />
        </div>
    );

    const CartLink: React.FC = () => (
        <Link href="/tricart-home-decore/cart" className="border-none outline-none shadow-none flex items-center gap-x-5 lg:border-l lg:pl-4">
            <p className="fw_700 text-sm whitespace-nowrap hidden lg:block text-zinc-800">$0.00</p>
            <div className="relative">
                <FontAwesomeIcon icon={faBagShopping} className="text-3xl text-DECOR_PRIMARY" />
                <div className="h-4 min-w-4 rounded-full bg-DECOR_PRIMARY-HOVER text-DECOR_PRIMARY-LIGHT flex items-center justify-center absolute top-0 -right-2 text-xs">
                    0
                </div>
            </div>
        </Link>
    );


    const renderNavLinks = () => (
        <div className={`w-full flex items-center justify-end gap-x-6 lg:gap-x-8`}>
            {!isLargeDesktop && (
                <>
                    <NavLink
                        href="/tricart-home-decore/contact-us"
                        icon={faQuestionCircle}
                        text="Help"
                        showText={!isMobile}
                        className="hidden sm:flex"
                    />
                    <NavLink
                        href="/tricart-home-decore/account/orders"
                        icon={faExchange}
                        text="Orders"
                        showText={!isMobile}
                        className="hidden sm:flex"
                    />
                </>
            )}
            <NavLink
                href="/tricart-home-decore/account/wishlist"
                icon={faHeart}
                text="Wishlist"
                showText={!isMobile}
                className="hidden sm:flex"
            />
            <NavLink
                href="/tricart-home-decore/account/my-account"
                icon={faUser}
                text="My Account"
                showText={!isMobile}
            />
            <CartLink />
        </div>
    );

    return (
        <div className={`px-4 sm:px-5 lg:px-10 flex flex-col justify-center pt-6 pb-3 gap-y-4`}>
            <div className={`flex items-center border-b pb-5 ${isDesktop ? "gap-x-10" : "gap-x-10"}`}>
                <div className="hidden lg:block w-full">
                    {isLargeDesktop ? renderSearchBox() : <ShippingMethods3 />}
                </div>
                <button onClick={handleLogoClick} className={`text-2xl fw_600 text-DECOR_PRIMARY-HOVER`}>LOGO</button>
                <div className={`${isLargeDesktop ? "block lg:hidden" : "block"} w-full col-span-3`}>
                    <NavbarSearchbox
                        bgColor="bg-zinc-100"
                        placeholder="Search for products..."
                    />
                </div>
            </div>

            <div className={`w-full ${isLargeDesktop ? "flex items-center gap-x-3 lg:gap-x-0 lg:justify-center" : "grid grid-cols-11 gap-x-10"} relative`}>
                <div className="hidden lg:block col-span-7">
                    <DecorNavLinks />
                </div>
                <button
                    onClick={() => setIsSideNavOpen(!isSideNavOpen)}
                    className="block lg:hidden"
                >
                    <FontAwesomeIcon icon={faBars} className="text-xl" />
                </button>
                <div className={`${isLargeDesktop ? "block lg:hidden" : "block"} w-full col-span-4`}>
                    {renderNavLinks()}
                </div>
            </div>
            <DecorSideNav
                productBaseUrl="/tricart-home-decore/product"
                categoryBaseUrl=""
                show={isSideNavOpen}
                setShow={setIsSideNavOpen}
                dataList={homeDecorCategories as linkType[]}
            />
        </div>
    );
};

