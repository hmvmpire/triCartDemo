

import { FC } from "react"
import { ReviewsList } from "../electronicsDetailPage/reviewsList"
import { ReviewForm } from "../electronicsDetailPage/reviewForm"


interface ReviewsSectionProps {
    submitBtnRoundness?: string
    showOverview?: boolean
    showContainer?: boolean
}

export const FashionProductDetailsReview: FC<ReviewsSectionProps> = ({
    submitBtnRoundness, showOverview, showContainer
}): JSX.Element => {
    return (
        <div className={`${showContainer ? "container1" : ""}`}>
            <h1 className="text-black text-lg fw_600">Reviews</h1>
            <div className="grid grid-cols-1 gap-y-10 relative mt-6">
                <div className="border-b pb-10">
                    <ReviewsList showOverview={showOverview} />
                </div>
                <div className="bg-zinc-100 p-5 sm:p-10 rounded-md">
                    <ReviewForm activeStarColor="text-fashionPrimary"  submitBtnRoundness={submitBtnRoundness} inputBg="bg-white" submitBtnBg="bg-fashionPrimary" />
                </div>
            </div>
        </div>
    )
}