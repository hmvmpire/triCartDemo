import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Contactform } from "@/components/subComponents/contactUs/contactform";
import FaqsAccordion from "@/components/subComponents/contactUs/faqsAccordion";

const ContactUsMain = () => {
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

    const breadcrumbData = [
        { name: <FontAwesomeIcon icon={faHome} />, link: templateBasePath },
        { name: "Contact", link: "/" },
    ]
    return (
        <div>
            <div className="h-60 sm:h-72 md:h-80 bg-zinc-200">
                <div className="container1 relative flex flex-col gap-y-10 items-center justify-center h-full">
                    <Breadcrumb hoverColor="text-black" linkColor="text-zinc-700" breadcrumbData={breadcrumbData} />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl fw_700 text-black text-center tracking-widest">Contact Us</h1>
                </div>
            </div>
            <div className="bg-white">
                <div className="container1 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-5 lg:gap-x-10">
                        <div className="flex flex-col gap-y-6 lg:gap-y-10 justify-center">
                            <p className="fw_600 text-lg lg:text-xl leading-7 lg:leading-10 text-zinc-500">We'd love to hear from you! Our dedicated team at Tricart Store is here to assist with any inquiries, provide personalized advice, or address any concerns you may have.</p>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-zinc-800 tracking-widest text-base fw_600">Customer Support</h3>
                                <p className="fw_400 text-base leading-6 text-zinc-800">Our friendly customer support team is available to assist you Monday through Friday, from 9:00 AM to 6:00 PM.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-zinc-800 tracking-widest text-base fw_600">Online Assistance</h3>
                                <p className="fw_400 text-base leading-6 text-zinc-800">For quick queries or assistance outside our regular hours, you can use our live chat feature on the website. Our online support team is ready to provide real-time help.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className="text-zinc-800 tracking-widest text-base fw_600">Social Media</h3>
                                <p className="fw_400 text-base leading-6 text-zinc-800">Connect with us on social media for the latest updates, design inspiration, and to stay in the loop with our community. Find us at <span className="underline">@YourSocialMediaHandles</span></p>
                            </div>
                        </div>
                        <Contactform />
                    </div>
                </div>
            </div>
            <div>
                <hr />
            </div>
            <div className="bg-zinc-100">
                <div id="faqs" className="container1 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-5 lg:gap-x-10">
                        <FaqsAccordion></FaqsAccordion>
                        <div className="flex flex-col gap-y-5 justify-center w-full lg:w-4/5 xl:w-3/5">
                            <h1 className="fw_600 tex-black text-xl tracking-widest">
                                Frequent Asked Questions</h1>
                            <p className="fw_400 text-base text-zinc-500 leading-8">your go-to resource for answers to common queries about our furniture store. We've compiled a list of frequently asked questions to make your shopping experience as seamless as possible. If you can't find the information you're looking for, feel free to reach out to our customer support team for personalized assistance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsMain