import Marquee from "react-fast-marquee";

export const News2 = () => {
    return (
        <div className="text-zinc-200 flex items-center pt-6 overflow-hidden">
            <Marquee className="fw_600 text-4xl sm:text-6xl tracking-widest overflow-hidden">
                <div className="flex items-center gap-x-5 pr-5">
                    -<p>Shop New Arrivals</p>
                </div>
                <div className="flex items-center gap-x-5 pr-5">
                    -<p>Shop New Arrivals</p>
                </div>
                <div className="flex items-center gap-x-5 pr-5">
                    -<p>Shop New Arrivals</p>
                </div>
                <div className="flex items-center gap-x-5 pr-5">
                    -<p>Shop New Arrivals</p>
                </div>
                <div className="flex items-center gap-x-5 pr-5">
                    -<p>Shop New Arrivals</p>
                </div>
            </Marquee>
        </div>
    );
};