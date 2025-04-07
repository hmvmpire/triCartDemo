import { Layout } from "@/components/subComponents/account/layout"
import { WishlistItem } from "@/components/subComponents/account/wishlistItem"
import { fashionProductsData } from "@/data/fashionData"
import { homeDecorFeaturedProducts } from "@/data/homeDecorData"
import { toolsProductsData } from "@/data/toolsData"
import { getElectornicsDataByTag } from "@/services/generalService"
import { productType2 } from "@/Types/productPropsTypes"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"


const WishlistMain = () => {
    const [wishlistItems, setWishlistItems] = useState<productType2[]>([])
    const nav1Route =
        typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-electronics")
    const nav2Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-tools")
    const nav3Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-home-decore")
    const nav4Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-fashion")

    useEffect(() => {
        if (nav1Route) {
            setWishlistItems(getElectornicsDataByTag("Best Seller").map(item => ({ ...item, price: item.price.toString() })) as productType2[])
        } else if (nav2Route) {
            setWishlistItems(toolsProductsData)
        } else if (nav3Route) {
            setWishlistItems(homeDecorFeaturedProducts)
        } else if (nav4Route) {
            setWishlistItems(fashionProductsData)
        }
    }, [])
const templateBasePath = nav1Route ? "/tricart-electronics" : nav2Route ? "/tricart-tools" : nav3Route ? "/tricart-home-decore" : nav4Route ? "/tricart-fashion" : "/"
    
    const handleDelete = (label: string) => {
        setWishlistItems(wishlistItems.filter((item) => item.label !== label))
    }
    return (
        <div>
            <Layout title={"Account Dashboard"} baseUrl={templateBasePath}>
                <div className="">
                    <div className="flex items-center gap-x-4">
                        <FontAwesomeIcon icon={faHeart} className="text-4xl text-zinc-700" />
                        <h1 className="fw_700 text-zinc-700 text-2xl">My Wishlist</h1>
                    </div>
                    <div className="w-full overflow-x-auto mt-10">
                        <div style={{ minWidth: "700px" }}>
                            <div className="grid grid-cols-12 border-b">
                                <p className="text-black text-xs py-3 uppercase fw_700 col-span-5 flex justify-center">Product</p>
                                <p className="text-black text-xs py-3 uppercase fw_700 col-span-2 flex justify-center">Price</p>
                                <p className="text-black text-xs py-3 uppercase fw_700 col-span-2 flex justify-center">Stock status</p>
                                <p className="text-black text-xs py-3 uppercase fw_700 col-span-3 flex justify-center">Actions</p>
                            </div>
                            {wishlistItems && wishlistItems.length > 0 ? wishlistItems.map((product, index) => (
                                <WishlistItem key={index + 1} product={product} handleDelete={handleDelete} />
                            )) :
                                <div className=" flex flex-col gap-y-4 items-center justify-center h-60">
                                    <p className="text-base text-black fw_400 text-center">Your wishlist is empty!</p>
                                    <Link href={"/"} className="outline-none border-none shadow-none flex items-center justify-center text-white text-sm uppercase h-12 w-52 fw_600 bg-zinc-700 hover:bg-black rounded-sm duration-300">Start Shoping</Link>
                                </div>
                            }
                        </div >
                    </div >
                </div>
            </Layout>
        </div>
    )
}

export default WishlistMain