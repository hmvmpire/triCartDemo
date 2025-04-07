import { Breadcrumb } from "@/components/shared/breadcrumb"
import { UserType } from "@/Types/userDataTypes"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-toastify"

const AuthenticationMain = () => {
    const [finalData, setFinalData] = useState<UserType>({ name: "", email: "", password: "" })
    const [finalDataLogin, setFinalDataLogin] = useState<UserType>({ name: "", email: "", password: "" })
    const breadcrumbData = [
        { name: <FontAwesomeIcon icon={faHome} />, link: "/" },
        { name: "Authentication", link: "/" },
    ]
    const router = useRouter()

    const handleUpdate = (key: string, val: string) => {
        let updated = { ...finalData, [key]: val }
        setFinalData(updated)
    }


    const handleUpdate2 = (key: string, val: string) => {
        let updated = { ...finalDataLogin, [key]: val }
        setFinalDataLogin(updated)
    }
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

    const onRegister = (e: any) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(finalData))
        setFinalData({ name: "", email: "", password: "" })
        toast.success("Registered successfully!")
        router.push(templateBasePath + "/account/my-account")
    }

    const onLogin = (e: any) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(finalData))
        setFinalDataLogin({ name: "", email: "", password: "" })
        toast.success("Login successfully!")
        router.push(templateBasePath + "/account/my-account")
    }
    return (
        <div className="h-screen max-h-screen flex flex-col">
            <div className="h-40 min-h-40 sm:h-52 sm:min-h-52 w-full bg-gradient-to-r from-indigo-700 via-purple-700 to-purple-700">
                <div className="flex flex-col gap-y-3 justify-center items-center container1 h-full">
                    <Breadcrumb breadcrumbData={breadcrumbData} linkColor="text-white" hoverColor="text-white" />
                    <h1 className="text-2xl sm:text-3xl fw_700 text-white">Login / Sign Up</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full bg-indigo-50 bg-opacity-70">
                <div className="h-full flex items-center justify-center">
                    <div className="w-5/6 sm:w-3/4 mx-auto py-10 bg-white rounded-xl p-5">
                        <h2 className="text-xl sm:text-2xl fw_700 text-black text-center">Login</h2>
                        <form onSubmit={(e) => onLogin(e)} className="mt-10 flex flex-col gap-y-6">
                            <input type="text" required value={finalDataLogin.name} onChange={(e) => handleUpdate2("name", e.target.value)} placeholder="Enter full name" className="px-4 py-4 outline-none shadow-none border-none bg-indigo-50 text-sm" />
                            <input type="email" required value={finalDataLogin.email} onChange={(e) => handleUpdate2("email", e.target.value)} placeholder="Enter email address" className="px-4 py-4 outline-none shadow-none border-none bg-indigo-50 text-sm" />
                            <input type="password" required value={finalDataLogin.password} onChange={(e) => handleUpdate2("password", e.target.value)} placeholder="Enter password" className="px-4 py-4 outline-none shadow-none border-none bg-indigo-50 text-sm" />
                            <button type="submit" className="bg-gradient-to-r from-indigo-700 via-purple-700 to-purple-700 rounded-full text-white w-52 mx-auto hover:w-60 duration-300 fw_400 py-3">
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
                <div className="h-full flex items-center justify-center">
                    <div className="w-5/6 sm:w-3/4 mx-auto py-10 bg-white p-5 rounded-xl">
                        <h2 className="text-xl sm:text-2xl fw_700 text-black text-center">Sign Up</h2>
                        <form onSubmit={(e) => onRegister(e)} className="mt-10 flex flex-col gap-y-6">
                            <input type="text" required value={finalData.name} onChange={(e) => handleUpdate("name", e.target.value)} placeholder="Enter full name" className="px-4 py-4 outline-none shadow-none border-none bg-indigo-50 text-sm" />
                            <input type="email" required value={finalData.email} onChange={(e) => handleUpdate("email", e.target.value)} placeholder="Enter email address" className="px-4 py-4 outline-none shadow-none border-none bg-indigo-50 text-sm" />
                            <input type="password" required value={finalData.password} onChange={(e) => handleUpdate("password", e.target.value)} placeholder="Enter password" className="px-4 py-4 outline-none shadow-none border-none bg-indigo-50 text-sm" />
                            <button type="submit" className="bg-gradient-to-r from-indigo-700 via-purple-700 to-purple-700 rounded-full text-white w-52 mx-auto hover:w-60 duration-300 fw_400 py-3">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AuthenticationMain