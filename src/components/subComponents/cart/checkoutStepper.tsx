import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router";
import { FC } from "react";

interface CheckoutStepperProps {
    step: number;
}


export const CheckoutStepper: FC<CheckoutStepperProps> = ({
    step,
}): JSX.Element => {
    const router = useRouter()

    const nav1Route =
        typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-electronics")
    const nav2Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-tools")
    const nav3Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-home-decore")
    const nav4Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-fashion")

    const templateBasePath = nav1Route ? "/tricart-electronics" : nav2Route ? "/tricart-tools" : nav3Route ? "/tricart-home-decore" : nav4Route ? "/tricart-fashion" : "/"

    return (
        <div className=" flex items-center gap-x-3 sm:gap-x-5">
            <button onClick={() => step > 1 && router.push(templateBasePath + "/cart")} className={`${step === 1 ? "text-zinc-700" : step > 1 ? "text-black hover:text-zinc-600 cursor-pointer" : "cursor-not-allowed text-zinc-300"} fw_600 text-xs sm:text-sm md:text-base lg:text-lg`}>Shopping Cart</button>
            <FontAwesomeIcon icon={faChevronRight} className="text-xs sm:text-sm md:text-base lg:text-lg" />
            <button onClick={() => step > 2 && router.push(templateBasePath + "/checkout")} className={`${step === 2 ? "text-zinc-700" : step > 2 ? "text-black hover:text-zinc-600 cursor-pointer" : "cursor-not-allowed text-zinc-300"} fw_600 text-xs sm:text-sm md:text-base lg:text-lg`}>Checkout</button>
            <FontAwesomeIcon icon={faChevronRight} className="text-xs sm:text-sm md:text-base lg:text-lg" />
            <button onClick={() => step > 3 && router.push(templateBasePath + "/order-completed")} className={`${step === 3 ? "text-zinc-700" : step > 3 ? "text-black hover:text-zinc-600 cursor-pointer" : "cursor-not-allowed text-zinc-300"} fw_600 text-xs sm:text-sm md:text-base lg:text-lg`}>Order Complete</button>
        </div>
    )
}