import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarSearchbox } from "../searchBoxes/navbarSearchbox";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mui/material";
import { ElectronicsNavLinks } from "./subComponents/electronicsNavLinks";
import { ElectronicsSideNav } from "./subComponents/electronicsSideNav";
import { useState } from "react";
import logo from "../../static/electronicsLogo.png"
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { faFirstOrder } from "@fortawesome/free-brands-svg-icons";
import { categoriesData } from "@/data/electronicsData";

export const ElectronicsNavbar = () => {
  const matches = useMediaQuery("(max-width:1480px)");
  const matches2 = useMediaQuery("(max-width:1130px)");
  const matches3 = useMediaQuery("(max-width:980px)");
  const [show, setShow] = useState(false);
  const router = useRouter()
  return (
    <div
      className={`container1 flex flex-col justify-center ${matches3 ? "h-40 gap-y-5" : "h-40 gap-y-8"
        }`}
    >
      <div
        className={`flex items-center ${matches ? (matches2 ? "gap-x-14" : "gap-x-20") : "gap-x-36"
          } justify-between`}
      >
        <div className="flex items-center gap-x-4">
          {matches3 && (
            <button
              onClick={() => setShow(!show)}
              className={`h-10 w-10 min-w-10 rounded-md flex items-center justify-center bg-white`}
            >
              <FontAwesomeIcon icon={faBars} className="text-lg text-ELECTRONICS_PRIMARY-HOVER" />
            </button>
          )}
          <Image src={logo} alt="logo" className="w-32 sm:w-44 cursor-pointer" onClick={() => router.push("/tricart-electronics")} />
        </div>
        <div
          className={`flex items-center ${matches3 ? "justify-end w-max" : "gap-x-10 w-full"
            }`}
        >
          {!matches3 && (
            <div className="w-full">
              <NavbarSearchbox border="border" placeholder="Search for products..." />
            </div>
          )}
          <div
            className={`flex items-center ${matches3 ? "gap-x-2" : "gap-x-5"}`}
          >
            <Link href="/tricart-electronics/account/wishlist" className="border-none outline-none shadow-none text-black hover:text-ELECTRONICS_PRIMARY-HOVER hidden sm:flex items-center gap-x-1 fw_400 text-sm whitespace-nowrap">
              <div className="h-10 w-10 rounded-md flex items-center justify-center bg-white">
                <FontAwesomeIcon icon={faHeart} className="text-lg" />
              </div>
              {!matches3 && "Wishlist"}
            </Link>
            {!matches2 && (
              <Link href="/tricart-electronics/account/orders" className="border-none outline-none shadow-none text-black hover:text-ELECTRONICS_PRIMARY-HOVER flex items-center gap-x-1 fw_400 text-sm whitespace-nowrap">
                <div className="h-10 w-10 rounded-md flex items-center justify-center bg-white">
                  <FontAwesomeIcon icon={faFirstOrder} className="text-lg" />
                </div>
                Orders
              </Link>
            )}
            <Link href={"/tricart-electronics/account/my-account"} className="border-none outline-none shadow-none text-black hover:text-ELECTRONICS_PRIMARY-HOVER flex items-center gap-x-1 fw_400 text-sm whitespace-nowrap">
              <div className="h-10 w-10 rounded-md flex items-center justify-center bg-white">
                <FontAwesomeIcon icon={faUser} className="text-lg" />
              </div>
              {!matches3 && "My Account"}
            </Link>
            <Link href={"/tricart-electronics/cart"}
              className={`${matches3 ? "h-10 w-10 min-w-10" : "h-12 w-12 min-w-12"
                } rounded-md flex items-center justify-center bg-ELECTRONICS_PRIMARY hover:bg-ELECTRONICS_PRIMARY-HOVER text-white border-none outline-none shadow-none`}
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-lg md:text-xl" />
            </Link>
          </div>
        </div>
      </div>
      {matches3 && (
        <div className="w-full">
          <NavbarSearchbox border="border" placeholder="Search for products..." />
        </div>
      )}
      {!matches3 && <ElectronicsNavLinks />}
      <ElectronicsSideNav colorScheme="orange" productBaseUrl={"/tricart-electronics/product"} categoryBaseUrl="/tricart-electronics/category" show={show} setShow={setShow} dataList={categoriesData} />
    </div>
  );
};
