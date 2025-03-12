import { FC } from "react"
import { RatingSelect } from "../../shared/ratingSelect"

interface ReviewFormProps {
    submitBtnRoundness?: string
    inputBg?: string
    submitBtnBg?: string
    activeStarColor?: string
}


export const ReviewForm: FC<ReviewFormProps> = ({
    submitBtnRoundness, inputBg, submitBtnBg, activeStarColor
}): JSX.Element => {
    return (
        <div>
            <div>
                <h2 className="fw_700 text-sm uppercase">Add a review</h2>
                <p className="text-zinc-500 fw_400 text-sm mt-2">Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                </p>
            </div>
            <div className="mt-8">
                <p className="fw_400 text-zinc-500 text-sm mb-1">Your Rating</p>
                <RatingSelect activeColor={activeStarColor} />
            </div>
            <div className="mt-8">
                <p className="fw_400 text-zinc-500 text-sm mb-1">Your Review <span className="text-red-500">*</span></p>
                <textarea rows={5} className={`${inputBg ? inputBg : "bg-zinc-100"} w-full rounded-lg px-3 py-3 text-sm`} />
            </div>
            <div className="mt-8">
                <p className="fw_400 text-zinc-500 text-sm mb-1">Name <span className="text-red-500">*</span></p>
                <input type="text" className={`${inputBg ? inputBg : "bg-zinc-100"} w-full rounded-lg px-3 py-3 text-sm`} />
            </div>
            <div className="mt-8">
                <p className="fw_400 text-zinc-500 text-sm mb-1">Email <span className="text-red-500">*</span></p>
                <input type="email" className={`${inputBg ? inputBg : "bg-zinc-100"} w-full rounded-lg px-3 py-3 text-sm`} />
            </div>
            <div className="flex items-center gap-x-2 mt-5">
                <input type="checkbox" className="border rounded-md h-4 w-4" />
                <p className="text-sm text-zinc-500 fw_400">Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <button className={`${submitBtnBg? submitBtnBg : "bg-black"} text-white fw_600 text-sm h-12 w-36 mt-10 uppercase ${submitBtnRoundness ? submitBtnRoundness : "rounded-full"}`}>Submit</button>
        </div>
    )
}