
import Marquee from "react-fast-marquee";

export const Home3News = () => {
    return (
        <div className="text-zinc-800 flex items-center pt-6 overflow-hidden">
            <Marquee className="fw_400 text-lg sm:text-xl tracking-widest overflow-hidden">
                <div className="flex items-center gap-x-5 pr-5">
                    -<p>Shop Featured Products</p>
                </div>
                <div className="flex items-center gap-x-5 pr-5">
                    -<p>Shop Featured Products</p>
                </div>
                <div className="flex items-center gap-x-5 pr-5">
                    -<p>Shop Featured Products</p>
                </div>
                <div className="flex items-center gap-x-5 pr-5">
                    -<p>Shop Featured Products</p>
                </div>
                <div className="flex items-center gap-x-5 pr-5">
                    -<p>Shop Featured Products</p>
                </div>
            </Marquee>
        </div>
    );
};