import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CustomRating } from "../../shared/rating"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { ReviewOverview } from "../toolsDetailPage/reviewOverview"
import { FC } from "react"


interface ReviewsListProps {
    showOverview?: boolean
}

export const ReviewsList: FC<ReviewsListProps> = ({
    showOverview
}): JSX.Element => {
    return (
        <div>
            <h1 className="text-5xl fw_700 text-black">4.7</h1>
            <CustomRating rating={5} color="text-ELECTRONICS_PRIMARY" size="text-base" />
            <p className="text-zinc-500 text-sm fw_400">Based on 3 reviews</p>
            {showOverview && <ReviewOverview />}
            <div className="flex flex-col gap-y-8 mt-6">
                {[1, 2, 3].map((item) => (
                    <div className="flex items-start gap-x-5" key={item}>
                        <div className="h-12 sm:h-16 w-12 sm:w-16 rounded-full bg-white text-zinc-300 overflow-hidden min-w-12 sm:min-w-16 flex items-end justify-center">
                            <FontAwesomeIcon icon={faUser} className="text-4xl sm:text-5xl" />
                        </div>
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-x-2 mb-2">
                                <h2 className="text-base fw_700 ">Joe Doe</h2>
                                <div className="flex items-center gap-x-2">
                                    <p className="text-sm fw_400">(store manager)</p>
                                    <p className="text-xs text-zinc-400 fw_400">– August 6, 2024</p>
                                </div>
                            </div>
                            <CustomRating rating={5} color="text-ELECTRONICS_PRIMARY" size="text-xxs" />
                            <p className="text-sm leading-7 fw_400 text-zinc-500 mt-3">Whether you’re drawn to the understated elegance of a dainty moonstone pendant or the statement-making allure of a bold cocktail ring, there’s a piece of moonstone jewelry to suit every style and occasion.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}