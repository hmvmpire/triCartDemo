import { Layout } from "@/components/subComponents/account/layout"
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons"
import { faArrowRightFromBracket, faBoxOpen, faLocationDot, faTableCells } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const MyAccountMain = () => {
    const nav1Route =
        typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-electronics")
    const nav2Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-tools")
    const nav3Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-home-decore")
    const nav4Route = typeof window !== "undefined" &&
        window.location.pathname.includes("/tricart-fashion")

    const templateBasePath = nav1Route ? "/tricart-electronics" : nav2Route ? "/tricart-tools" : nav3Route ? "/tricart-home-decore" : nav4Route ? "/tricart-fashion" : "/"
    const router = useRouter()
    const Logout = () => {
        localStorage.removeItem("user")
        toast.success("Logout successfully!")
        router.push(templateBasePath)
    }
    return (
        <div>
            <Layout title={"Account Dashboard"} baseUrl={templateBasePath}>
                <div className="">
                    <p className="text-sm fw_400 text-zinc-500">
                        Hello <span className="fw_600 text-black">danial waris</span>
                    </p>
                    <p className="text-sm fw_400 text-zinc-500 mt-8">From your account dashboard you can view your <Link href="/account/orders" className="text-black border-none outline-none shadow-none">recent orders</Link>, manage your <Link href="/account/addresses" className="text-black border-none outline-none shadow-none">shipping and billing addresses</Link>, and <Link href="/account/account-details" className="text-black border-none outline-none shadow-none">edit your password and account details.</Link></p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link href={templateBasePath + "/account/my-account"} className="group border-none bg-zinc-100 rounded-md flex flex-col items-center gap-y-5 py-10 text-zinc-500">
                            <FontAwesomeIcon icon={faTableCells} className="text-6xl group-hover:scale-110 text-zinc-700 duration-300" />
                            <p className="fw_400 text-black text-base uppercase">Dashboard</p>
                        </Link>
                        <Link href={templateBasePath + "/account/orders"} className="group border-none bg-zinc-100 rounded-md flex flex-col items-center gap-y-5 py-10 text-zinc-500">
                            <FontAwesomeIcon icon={faBoxOpen} className="text-6xl group-hover:scale-110 text-zinc-700 duration-300" />
                            <p className="fw_400 text-black text-base uppercase">Orders</p>
                        </Link>
                        <Link href={templateBasePath + "/account/addresses"} className="group border-none bg-zinc-100 rounded-md flex flex-col items-center gap-y-5 py-10 text-zinc-500">
                            <FontAwesomeIcon icon={faLocationDot} className="text-6xl group-hover:scale-110 text-zinc-700 duration-300" />
                            <p className="fw_400 text-black text-base uppercase">Addresses</p>
                        </Link>
                        <Link href={templateBasePath + "/account/account-details"} className="group border-none bg-zinc-100 rounded-md flex flex-col items-center gap-y-5 py-10 text-zinc-500">
                            <FontAwesomeIcon icon={faUser} className="text-6xl group-hover:scale-110 text-zinc-700 duration-300" />
                            <p className="fw_400 text-black text-base uppercase">Account Details</p>
                        </Link>
                        <Link href={templateBasePath + "/account/wishlist"} className="group border-none bg-zinc-100 rounded-md flex flex-col items-center gap-y-5 py-10 text-zinc-500">
                            <FontAwesomeIcon icon={faHeart} className="text-6xl group-hover:scale-110 text-zinc-700 duration-300" />
                            <p className="fw_400 text-black text-base uppercase">Wishlist</p>
                        </Link>
                        <button onClick={Logout} className="group border-none bg-zinc-100 rounded-md flex flex-col items-center gap-y-5 py-10 text-zinc-500">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-6xl group-hover:scale-110 text-zinc-700 duration-300 rotate-180" />
                            <p className="fw_400 text-black text-base uppercase">Logout</p>
                        </button>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default MyAccountMain