import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CarouselList } from '../../productsLists/carouselList'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons/faShoppingBag'
import { useMediaQuery } from '@mui/material'
import { CompHeading2 } from '../../shared/CompHeading2'
import { useCartAddItem } from '@/redux/cart/cartHooks'
import { productType1 } from '@/Types/productPropsTypes'
import { getElectornicsDataByTag } from '@/services/generalService'
export const BundleProducts = () => {
    const matches = useMediaQuery("(max-width:1480px)");
    const matches2 = useMediaQuery("(max-width:1130px)");
    const matches3 = useMediaQuery("(max-width:800px)");
    const cartAddItem = useCartAddItem();


    const addAll = () => {
        let res = getElectornicsDataByTag("Bundled")
        if (res && res.length > 0) {
            res.forEach((item: productType1) => {
                cartAddItem(item)
            })
        }
    }
    return (
        <div id="bundleProducts1" className='container1'>
            <CompHeading2 title="Bundle Products" rightContent={null} />
            <div className={`grid grid-cols-12 mt-5 md:mt-8 ${matches2 ? "gap-y-4" : "gap-x-3"}`}>
                <div className={`${matches2 ? matches3 ? "col-span-12" : "col-span-4" : "col-span-3"}`}>
                    <div className="bg-ELECTRONICS_PRIMARY w-full h-full p-5 md:p-8 rounded-lg flex flex-col items-center justify-center gap-y-5 md:gap-y-10">
                        <p className={`fw_700 text-white ${matches ? "text-xl md:text-3xl" : "text-4xl"} text-center`}>Buy in bulk for your Home and get volume discounts!</p>
                        <button className='bg-black hover:bg-zinc-700 duration-300 rounded-full text-white text-sm md:text-lg fw_600 w-32 md:w-40 h-10 md:h-12'>Shop now</button>
                    </div>
                </div>
                <div className={`${matches2 ? matches3 ? "col-span-12" : "col-span-8" : "col-span-9"}`}>
                    <CarouselList data={getElectornicsDataByTag("Bundled")} galleryresponsive={{
                        superLargeDesktop: {
                            // the naming can be any, depends on you.
                            breakpoint: { max: 4000, min: 1129 },
                            items: 3,
                        },
                        desktop: {
                            breakpoint: { max: 1129, min: 800 },
                            items: 2,
                        },
                        tablet: {
                            breakpoint: { max: 800, min: 640 },
                            items: 2,
                        },
                        mobile: {
                            breakpoint: { max: 640, min: 0 },
                            items: 1,
                        },
                    }} />
                    <button onClick={() => addAll()} className='bg-black hover:bg-zinc-700 duration-300 rounded-full h-14 text-white uppercase mt-6 w-4/5 mx-auto text-lg fw_600 flex items-center gap-x-4 justify-center'>
                        <FontAwesomeIcon icon={faShoppingBag} className='text-xl' />
                        Add all to cart</button>
                </div>
            </div>
        </div>
    )
} 