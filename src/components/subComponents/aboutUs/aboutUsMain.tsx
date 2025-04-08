import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import aboutImg1 from '../../../static/cardDummyimg1.jpeg';
import aboutImg2 from '../../../static/cardDummyimg1.jpeg';
import teamImg from '../../../static/cardDummyimg1.jpeg';
import Image from "next/image";

export const AboutUsMain = () => {
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
        { name: "About", link: "/" },
    ];

    return (
        <div>
            <div className="h-60 sm:h-72 md:h-80 bg-zinc-200">
                <div className="container1 relative flex flex-col gap-y-10 items-center justify-center h-full">
                    <Breadcrumb hoverColor="text-black" linkColor="text-zinc-700" breadcrumbData={breadcrumbData} />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl fw_700 text-black text-center tracking-widest">About Us</h1>
                </div>
            </div>
            <div className="">
                <div className="container1 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-0 md:gap-x-10 lg:gap-x-20">
                    <Image src={aboutImg2} alt="aboutImg2" className="object-cover h-full w-full rounded-lg" />
                    <div className="flex flex-col gap-y-4 justify-center">
                        <p className="font-semibold text-sm md:text-base lg:text-lg leading-7 lg:leading-10 text-gray-600">
                            At our core, we are passionate about creating stunning, user-friendly themes that elevate digital experiences. Whether you're a developer, designer, or business owner, our themes are crafted to inspire and empower your projects.
                        </p>
                        <p className="font-semibold text-sm md:text-base lg:text-lg leading-7 lg:leading-10 text-gray-600">
                            Our mission is to simplify the process of building beautiful websites and applications. With a focus on innovation, quality, and usability, we strive to deliver themes that are not only visually appealing but also highly functional.
                        </p>
                    </div>
                </div>

                {/* Quality Section */}
                <div className="bg-indigo-50 bg-opacity-70">
                    <div className="container1 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-0 md:gap-x-10 lg:gap-x-20">
                        <div className="flex flex-col gap-y-8 justify-center">
                            <h1 className="font-semibold text-black text-2xl">Crafted with Precision</h1>
                            <p className="font-semibold text-sm md:text-base lg:text-lg leading-7 lg:leading-10 text-gray-600">
                                Every theme we create is a result of meticulous attention to detail. We combine cutting-edge design trends with robust functionality to ensure our themes stand out in today's competitive digital landscape.
                            </p>
                        </div>
                        <Image src={aboutImg1} alt="aboutImg1" className="object-cover h-full w-full rounded-lg" />
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-zinc-100">
                    <div className="container1 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-0 md:gap-x-10 lg:gap-x-20">
                        <Image src={teamImg} alt="teamImg" className="w-full rounded-lg" />
                        <div className="flex flex-col gap-y-8 justify-center">
                            <h1 className="font-semibold text-black text-2xl">Meet Our Team</h1>
                            <p className="font-semibold text-sm md:text-base lg:text-lg leading-7 lg:leading-10 text-gray-600">
                                Our team is a blend of creative minds and technical experts who are dedicated to pushing the boundaries of theme design. Led by Jane Doe and John Smith, we are united by a shared vision of delivering exceptional digital experiences.
                            </p>
                            <p className="font-semibold text-sm md:text-base lg:text-lg leading-7 lg:leading-10 text-gray-600">
                                Jane, our lead designer, brings over a decade of experience in UI/UX design, ensuring every theme is both beautiful and intuitive. John, our lead developer, ensures that our themes are performant, scalable, and easy to customize.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};