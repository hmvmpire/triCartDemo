import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import h4BannerBg from '../../../static/home4Banner.jpeg'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { handleSmoothScroll } from '@/services/generalService'

export const Home4Banner = () => {
    return (
        <div className="bg-center bg-cover w-full py-24 flex items-center justify-center" style={{ backgroundImage: `url(${h4BannerBg.src})` }}>
            <div className='flex flex-col items-center'>
                <p className='text-black text-4xl fw_400 text-center italic'>New Season Sale</p>
                <h2 className='text-8xl fw_700 text-center mt-4 text-black'>40% OFF</h2>
                <div className='w-16 h-1 bg-fashionPrimary mt-4'></div>
                <a href="#products4"
                    onClick={handleSmoothScroll}
                    className={`border-none outline-none shadow-none mt-10 text-white py-4 w-48 fw_600 justify-center bg-fashionPrimary hover:bg-fashionPrimary-HOVER duration-300 text-sm uppercase flex items-center gap-x-5 hover:gap-x-8`}
                >
                    Shop Now
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
            </div>
        </div>
    )
}