import { useState } from "react"
import { ToolsProductDetailsTabs } from "./toolsProductDetailsTabs"
import { ReviewsSection } from "../electronicsDetailPage/reviewsSection"

export const ToolsProductDetails = () => {
    const [tab, setTab] = useState("Description")
    return (
        <div className="container1 py-5">
            <ToolsProductDetailsTabs tab={tab} setTab={setTab} tabs={["Description", "Additional Information", "Reviews"]} />
            <div className="py-5">
                {tab === "Description" && <div className="flex flex-col gap-y-3">
                    <p className="text-zinc-500 leading-6 text-sm fw_400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur sed do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    <p className="text-zinc-500 leading-6 text-sm fw_400">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>}
                {tab === "Additional Information" && <div>
                    <div className="fw_600 bg-zinc-100 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center justify-between md:justify-start gap-x-4">
                        <p className="w-1/5">Colors</p>
                        <p className="text-zinc-500 fw_400 text-right">Multiple color options available</p>
                    </div>
                    <div className="fw_600 bg-zinc-100 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center justify-between md:justify-start gap-x-4">
                        <p className="w-1/5">Compatibility</p>
                        <p className="text-zinc-500 fw_400 text-right">Galaxy A35 5G</p>
                    </div>
                    <div className="fw_600 bg-zinc-100 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center justify-between md:justify-start gap-x-4">
                        <p className="w-1/5">Dimensions</p>
                        <p className="text-zinc-500 fw_400 text-right">Precisely tailored to fit the Galaxy A35 5G</p>
                    </div>
                    <div className="fw_600 bg-zinc-100 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center justify-between md:justify-start gap-x-4">
                        <p className="w-1/5">Material</p>
                        <p className="text-zinc-500 fw_400 text-right">High-quality silicone</p>
                    </div>
                    <div className="fw_600 bg-zinc-100 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center justify-between md:justify-start gap-x-4">
                        <p className="w-1/5">Weight</p>
                        <p className="text-zinc-500 fw_400 text-right">Lightweight design for everyday use</p>
                    </div>
                </div>}
                {tab === "Reviews" && <ReviewsSection activeStarColor="text-TOOLS_PRIMARY" inputBg="bg-zinc-100" submitBtnBg="text-TOOLS_PRIMARY" submitBtnRoundness="rounded-none" showOverview={true} />}
            </div>
        </div>
    )
}