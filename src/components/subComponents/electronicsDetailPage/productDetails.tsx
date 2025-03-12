export const ProductDetailsOverview = () => {
    return (
        <div className="container1 grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-5 pt-5 pb-16 border-b-2">
            <div className="">
                <h1 className="text-xl sm:text-2xl text-black fw_700">Overview</h1>
                <p className="fw_400 mt-5 text-zinc-500 leading-7">The Galaxy A35 5G Silicone Case is the perfect blend of style and functionality. It not only enhances the look of your smartphone but also provides robust protection against daily wear and tear. Whether you’re at home, at work, or on the go, this case ensures your Galaxy A35 5G remains safe and stylish.
                </p><p className="fw_400 mt-8 text-zinc-500 leading-7">Perfect Fit: Custom-made for the Galaxy A35 5G, ensuring a snug and secure fit. Precise cutouts allow easy access to all buttons, ports, and cameras without removing the case. Premium Silicone Material: Crafted from high-quality silicone, this case offers a soft, smooth texture that feels great in your hand. It’s also flexible yet durable, providing long-lasting protection.</p>
            </div>
            <div className="">
                <h1 className="text-xl sm:text-2xl text-black fw_700">Details</h1>
                <div className="mt-5">
                    <div className="bg-white rounded-sm h-12 tracking-widest fw_600 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center uppercase">
                        Specifications
                    </div>
                    <div className="border-b border-zinc-200 fw_400 text-zinc-500 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center justify-between gap-x-10 sm:gap-x-4">
                        Colors
                        <p className="fw_600 text-zinc-800 text-right">Multiple color options available</p>
                    </div>
                    <div className="border-b border-zinc-200 fw_400 text-zinc-500 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center justify-between gap-x-10 sm:gap-x-4">
                        Compatibility
                        <p className="fw_600 text-zinc-800 text-right">Galaxy A35 5G</p>
                    </div>
                    <div className="border-b border-zinc-200 fw_400 text-zinc-500 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center justify-between gap-x-10 sm:gap-x-4">
                        Dimensions
                        <p className="fw_600 text-zinc-800 text-right">Precisely tailored to fit the Galaxy A35 5G</p>
                    </div>
                    <div className="border-b border-zinc-200 fw_400 text-zinc-500 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center justify-between gap-x-10 sm:gap-x-4">
                        Material
                        <p className="fw_600 text-zinc-800 text-right">High-quality silicone</p>
                    </div>
                    <div className="border-b border-zinc-200 fw_400 text-zinc-500 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center justify-between gap-x-10 sm:gap-x-4">
                        Weight
                        <p className="fw_600 text-zinc-800 text-right">Lightweight design for everyday use</p>
                    </div>
                </div>
            </div>
        </div>
    )
}