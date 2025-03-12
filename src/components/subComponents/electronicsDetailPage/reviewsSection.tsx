import { FC } from "react"
import { ReviewForm } from "./reviewForm"
import { ReviewsList } from "./reviewsList"


interface ReviewsSectionProps {
    submitBtnRoundness?: string
    showOverview?: boolean
    showContainer?: boolean
    showTitle?: boolean
    submitBtnBg?: string
    inputBg?: string
    activeStarColor?: string
}

export const ReviewsSection: FC<ReviewsSectionProps> = ({
    submitBtnRoundness, showOverview, showContainer, showTitle, inputBg, submitBtnBg, activeStarColor
}): JSX.Element => {
    return (
        <div className={`${showContainer ? "container1" : ""} pt-6`}>
            {showTitle && <h1 className="text-black text-2xl fw_700">3 reviews for Apple Watch Strap Black</h1>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-0 sm:gap-x-5 mt-8 relative">
                <div className="sm:sticky h-max top-4">
                    <ReviewsList showOverview={showOverview} />
                </div>
                <div className="sm:sticky h-max top-4">
                    <ReviewForm activeStarColor={activeStarColor} inputBg={inputBg} submitBtnBg={submitBtnBg} submitBtnRoundness={submitBtnRoundness} />
                </div>
            </div>
        </div>
    )
}