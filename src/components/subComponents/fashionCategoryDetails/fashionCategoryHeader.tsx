import h4BannerBg from "../../../static/cardDummyimg1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faHome } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { linkType } from "@/Types/navbarProsTypes";

interface CategoryProps {
    category: linkType;
}


export const FashionCategoryHeader: FC<CategoryProps> = ({
    category,
}): JSX.Element => {
    return (category &&
        <div className="bg-center bg-cover w-full py-24 flex items-center justify-center" style={{ backgroundImage: `url(${h4BannerBg.src})` }}>
            <div className='flex flex-col md:flex-row items-center gap-x-10'>
                <div className="flex flex-col">
                    <p className='text-black text-3xl lg:text-4xl fw_400 text-center italic'>New Season Sale</p>
                    <h2 className='text-6xl lg:text-8xl fw_700 text-center mt-4 text-black'>40% OFF</h2>
                </div>
                <div className='mt-6 md:mt-0 w-16 md:w-1 h-1 md:h-14 bg-fashionPrimary'></div>
                <button
                    className={`bg-fashionPrimary hover:bg-fashionPrimary-HOVER mt-6 md:mt-0 text-white py-4 w-48 fw_600 justify-center hover:bg-zinc-zinc-200 duration-300 text-sm uppercase flex items-center gap-x-5 hover:gap-x-8`}
                >
                    Shop Now
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
            </div>
        </div>
    )
}