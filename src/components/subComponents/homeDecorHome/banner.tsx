import Image from "next/image";
import h3banner1 from '../../../static/cardDummyimg1.jpeg';

export const Banner = () => {
    return (
        <div className="px-3 sm:px-5 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-4 py-14 border-b">
                <Image src={h3banner1} alt="h3banner1" className="lg:h-60 xl:h-72 w-full" />
                <video controls className="lg:h-60 xl:h-72 w-full object-cover">
                    <source type="video/mp4" src="" />
                </video>
            </div>
        </div>
    );
};