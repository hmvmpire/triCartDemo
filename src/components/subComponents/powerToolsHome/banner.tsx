import bannerbg1 from '../../../static/cardDummyimg1.jpeg'
export const Banner = () => {
    return (
        <div className='container1'>
            <div className='border-b pb-8 lg:pt-4'>
                <div className='bg-center bg-cover h-24 sm:h-28 md:h-32 lg:h-40 rounded-md flex items-center justify-end px-4 sm:px-10 lg:px-20' style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${bannerbg1.src})` }}>
                    <div id="trendingOffers" className='flex flex-col items-end lg:items-center'>
                        <p className={`tracking-widest text-xs sm:text-sm md:text-base md:text-xl fw_400`}>New Arrival</p>
                        <p className='text-lg sm:text-xl lg:text-3xl text-right xl:text-4xl text-black fw_700 leading-5 sm:leading-6'>Best Deals For <br className='block lg:hidden' /> Amazing Tools</p>
                    </div>
                </div>
            </div>
        </div>
    )
}