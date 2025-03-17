import h4Blog1 from '../../../static/cardDummyimg1.jpeg'
import h4Blog2 from '../../../static/cardDummyimg1.jpeg'
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong"

export const Blogs = () => {
    return (
        <div id="blog4" style={{ backgroundColor: "#f4f4f2" }}>
            <div className="container3 py-14">
                <div className="flex flex-col items-center">
                    <h1 className="fw_700 text-zinc-900 text-center text-2xl uppercase">From The Blog</h1>
                    <p className="text-sm text-zinc-500 fw_400 text-center">Only the latest news from us, stay tuned.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-5 mt-8">
                    <div className="flex">
                        <Image src={h4Blog1} alt="h4Blog1" className='w-32 sm:w-max h-40 sm:h-max my-auto' />
                        <div className="bg-white text-black px-4 py-6 sm:p-8 h-max my-auto -ml-8">
                            <h1 className="text-base uppercase fw_600">Fashion News</h1>
                            <div className="text-xs text-white h-8 px-4 my-3 uppercase fw_600 bg-fashionPrimary flex items-center justify-center w-max">18-APR-2024</div>
                            <p className="two_lines_elipsis text-sm text-zinc-500">Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra nibh at dolor pellentesque</p>
                            <button className="text-fashionPrimary text-sm fw_600 flex items-center justify-center gap-x-2 hover:gap-x-4 duration-500 mt-4 uppercase">
                                Read More
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </button>
                        </div>
                    </div>
                    <div className="flex">
                        <Image src={h4Blog2} alt="h4Blog2" className='w-32 sm:w-max h-40 sm:h-max my-auto' />
                        <div className="bg-white text-black px-4 py-6 sm:p-8 h-max my-auto -ml-8">
                            <h1 className="text-base uppercase fw_600">Trends Of Spring</h1>
                            <div className="text-xs text-white h-8 px-4 my-3 uppercase fw_600 bg-fashionPrimary flex items-center justify-center w-max">20-Jun-2023</div>
                            <p className="two_lines_elipsis text-sm text-zinc-500">Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra nibh at dolor pellentesque</p>
                            <button className="text-fashionPrimary text-sm fw_600 flex items-center justify-center gap-x-2 hover:gap-x-4 duration-500 mt-4 uppercase">
                                Read More
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <button className='h-12 w-36 bg-fashionPrimary text-white fw_600 uppercase text-sm mx-auto hover:bg-fashionPrimary-HOVER duration-300'>Our Blog</button>
                </div>
            </div>
        </div>
    )
}