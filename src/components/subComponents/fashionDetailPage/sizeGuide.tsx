import Image from 'next/image'
import humanSize from '../../../static/sizeGuide.jpg'

export const SizeGuide = () => {
    return (
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-4 py-6">
            <div className="col-span-12 md:col-span-4 flex justify-center">
                <Image src={humanSize} alt={"humanSize"} className='h-full md:max-h-96 object-contain object-center' />
            </div>
            <div className="col-span-12 md:col-span-8">
                <div className="fw_600 bg-zinc-100 border-b border-zinc-200 text-black rounded-sm h-20 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center">
                    <p className="w-1/4 text-sm uoppercase">Size</p>
                    <p className="w-1/4 text-sm uoppercase">Chest(IN.)</p>
                    <p className="w-1/4 text-sm uoppercase">Waist(IN.)</p>
                    <p className="w-1/4 text-sm uoppercase">Hips(IN.)</p>
                </div>
                <div className="fw_600 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center">
                    <p className="w-1/4 text-sm uoppercase">XS</p>
                    <p className="w-1/4 text-sm uoppercase">34-36</p>
                    <p className="w-1/4 text-sm uoppercase">27-29</p>
                    <p className="w-1/4 text-sm uoppercase">34.5-36.5</p>
                </div>
                <div className="fw_600 bg-stone-200 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center">
                    <p className="w-1/4 text-sm uoppercase">S</p>
                    <p className="w-1/4 text-sm uoppercase">36-38</p>
                    <p className="w-1/4 text-sm uoppercase">29-31</p>
                    <p className="w-1/4 text-sm uoppercase">36.5-38.5</p>
                </div>
                <div className="fw_600 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center">
                    <p className="w-1/4 text-sm uoppercase">M</p>
                    <p className="w-1/4 text-sm uoppercase">38-40</p>
                    <p className="w-1/4 text-sm uoppercase">31-33</p>
                    <p className="w-1/4 text-sm uoppercase">38.5-40.5</p>
                </div>
                <div className="fw_600 bg-stone-200 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center">
                    <p className="w-1/4 text-sm uoppercase">L</p>
                    <p className="w-1/4 text-sm uoppercase">40-42</p>
                    <p className="w-1/4 text-sm uoppercase">33-36</p>
                    <p className="w-1/4 text-sm uoppercase">40.5-43.5</p>
                </div>
                <div className="fw_600 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center">
                    <p className="w-1/4 text-sm uoppercase">XL</p>
                    <p className="w-1/4 text-sm uoppercase">42-45</p>
                    <p className="w-1/4 text-sm uoppercase">36-40</p>
                    <p className="w-1/4 text-sm uoppercase">43.5-47.5</p>
                </div>
                <div className="fw_600 bg-stone-200 border-b border-zinc-200 text-zinc-600 rounded-sm h-12 text-xs sm:text-sm text-black px-2 sm:px-5 flex items-center">
                    <p className="w-1/4 text-sm uoppercase">XXL</p>
                    <p className="w-1/4 text-sm uoppercase">45-48</p>
                    <p className="w-1/4 text-sm uoppercase">40-44</p>
                    <p className="w-1/4 text-sm uoppercase">47.5-51.5</p>
                </div>
            </div>
        </div>
    )
}