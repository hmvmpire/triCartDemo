import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface RatingProps {
  rating: number; // Rating out of 5
  color: string; // Text color
  size?: string;
}

export const CustomRating: FC<RatingProps> = ({
  rating,
  color,
  size,
}): JSX.Element => {
  // Calculate full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className={`${size ? size : "text-xs"} ${color}`}>
      {/* Render full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon key={`full-${index}`} icon={faStar} />
        ))}

      {/* Render half star if applicable */}
      {halfStars === 1 && <FontAwesomeIcon icon={faStarHalfAlt} />}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon key={`empty-${index}`} icon={faEmptyStar} />
        ))}
    </div>
  );
};
