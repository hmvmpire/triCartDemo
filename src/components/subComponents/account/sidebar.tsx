import { sidebarData } from "@/data/accountPagesData"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { toast } from "react-toastify"

export const Sidebar = () => {
    const router = useRouter()


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
    const Logout = () => {
        localStorage.removeItem("user")
        toast.success("Logout successfully!")
        router.push(templateBasePath)
    }
    return (useMemo(() => {
        return <div className="w-full md:w-60 md:min-w-60 lg:w-80 lg:min-w-80 bg-white p-5 rounded-md md:h-[600px] md:sticky top-5">
            <h2 className="uppercase text-base fw_700 text-black">My Account</h2>
            <ul className="mt-5 flex flex-col w-full">
                {sidebarData.map((item, index) => (
                    <li key={index + 1} className={`${index < sidebarData.length - 1 ? "border-b" : ""} h-12`}>
                        {item.name === "Logout" ?
                            <button onClick={Logout} className={`border-none outline-none shadow-none h-full w-full flex items-center text-sm ${window.location.pathname.includes(item.link) && item.name !== "Logout" ? "text-black fw_600" : "text-zinc-600 fw_400"}`}>{item.name}</button>
                            :
                            <Link href={templateBasePath + item.link} className={`border-none outline-none shadow-none h-full w-full flex items-center text-sm ${window.location.pathname.includes(item.link) && item.name !== "Logout" ? "text-black fw_600" : "text-zinc-600 fw_400"}`}>{item.name}</Link>}
                    </li>
                ))}
            </ul>
        </div>
    }, [templateBasePath])

    )
}