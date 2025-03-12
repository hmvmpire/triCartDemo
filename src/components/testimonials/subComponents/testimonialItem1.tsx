import { CustomRating } from "@/components/shared/rating";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image, { StaticImageData } from "next/image";

interface TestimonialType {
    name: string;
    review: string;
    date: string;
    userImg: StaticImageData
}

interface TestimonialProps {
    item: TestimonialType;
}

export const TestimonialItem1: React.FC<TestimonialProps> = ({
    item,
}): JSX.Element => {
    return (
        <div className="flex items-start gap-x-5">
            <div className="h-16 w-16 min-w-16 mt-2 rounded-full bg-zinc-200 overflow-hidden flex items-center justify-center">
                <Image src={item.userImg} alt="item.userImg" className="h-full w-full object-cover" />
            </div>
            <div>
                <div className="flex items-center gap-x-1 mb-1 flex-wrap">
                    <h2 className="fw_600 text-black text-base sm:text-lg">{item.name}</h2>
                    -
                    <p className="p-0 m-0 text-xs sm:text-sm fw_400">{item.date}</p>
                </div>
                <CustomRating rating={4} color="text-ELECTRONICS_PRIMARY-HOVER" />
                <p className="text-sm text-zinc-600 mt-4">{item.review}</p>
            </div>

        </div>
    )
}