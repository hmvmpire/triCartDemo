import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useState } from "react"

interface RatingSelectProps {
    activeColor?: string
}


export const RatingSelect: FC<RatingSelectProps> = ({
    activeColor
}): JSX.Element => {
    const [rating, setRating] = useState(0)
    const [showSolid, setShowSolid] = useState(0)
    return (
        <div className={`flex items-center`}>
            {[1, 2, 3, 4, 5].map((item) => (
                <FontAwesomeIcon onMouseEnter={() => setShowSolid(item)} onMouseLeave={() => setShowSolid(0)} icon={item <= rating ? solidStar : item <= showSolid ? solidStar : faStar} className={`cursor-pointer ${item <= rating ? activeColor? activeColor : "text-zinc-700" : item <= showSolid ? activeColor? activeColor : "text-zinc-700" : "text-zinc-700"}`} onClick={() => setRating(item)} />
            ))}
        </div>
    )
}