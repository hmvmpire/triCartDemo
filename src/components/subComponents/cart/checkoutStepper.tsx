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
    return (
        <div className=" flex items-center gap-x-3 sm:gap-x-5">
            <button onClick={() => step > 1 && router.push("/cart")} className={`${step === 1 ? "text-zinc-700" : step > 1 ? "text-black hover:text-zinc-600 cursor-pointer" : "cursor-not-allowed text-zinc-300"} fw_600 text-xs sm:text-sm md:text-base lg:text-lg`}>Shopping Cart</button>
            <FontAwesomeIcon icon={faChevronRight} className="text-xs sm:text-sm md:text-base lg:text-lg" />
            <button onClick={() => step > 2 && router.push("/checkout")} className={`${step === 2 ? "text-zinc-700" : step > 2 ? "text-black hover:text-zinc-600 cursor-pointer" : "cursor-not-allowed text-zinc-300"} fw_600 text-xs sm:text-sm md:text-base lg:text-lg`}>Checkout</button>
            <FontAwesomeIcon icon={faChevronRight} className="text-xs sm:text-sm md:text-base lg:text-lg" />
            <button onClick={() => step > 3 && router.push("/order-completed")} className={`${step === 3 ? "text-zinc-700" : step > 3 ? "text-black hover:text-zinc-600 cursor-pointer" : "cursor-not-allowed text-zinc-300"} fw_600 text-xs sm:text-sm md:text-base lg:text-lg`}>Order Complete</button>
        </div>
    )
}