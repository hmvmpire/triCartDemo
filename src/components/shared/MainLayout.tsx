import { FC, Fragment } from "react";
import { ElectronicsNavbar } from "../navbars/electronicsNavbar"
import { ToolsNavbar } from "../navbars/toolsNavbar"
import { DecorNavbar } from "../navbars/decorNavbar"
import { FashionNavbar } from "../navbars/fashionNavbar"
import { ElectronicsFooter } from "../footers/electronicsFooter";
import { ToolsFooter } from "../footers/toolsFooter";
import { DecorFooter } from "../footers/decorFooter";
import { FashionFooter } from "../footers/fashionFooter";
import { CommonNavbar } from "../navbars/commonNavbar";
import CommonFooter from "../footers/commonFooter";

interface MainLayoutProps {
    children: JSX.Element;
}

export const MainLayout: FC<MainLayoutProps> = ({
    children
}): JSX.Element => {
    const isHome = window.location.pathname === "/"

    const nav1Route = window.location.pathname.includes("/tricart-electronics")
    const nav2Route = window.location.pathname.includes("/tricart-tools")
    const nav3Route = window.location.pathname.includes("/tricart-home-decore")
    const nav4Route = window.location.pathname.includes("/tricart-fashion")

    const navbar = nav1Route ? <ElectronicsNavbar /> : nav2Route ? <ToolsNavbar /> : nav3Route ? <DecorNavbar /> : nav4Route ? <FashionNavbar /> : <CommonNavbar container={true} otherRoute={!isHome} />
    const footer = nav1Route ? <ElectronicsFooter /> : nav2Route ? <ToolsFooter /> : nav3Route ? <DecorFooter /> : nav4Route ? <FashionFooter /> : <CommonFooter />
    return (
        <Fragment>
            {navbar}
            {children}
            {footer}
        </Fragment>
    )
}