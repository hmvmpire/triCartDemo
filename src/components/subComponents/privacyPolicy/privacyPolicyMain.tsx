import { Breadcrumb } from "@/components/shared/breadcrumb"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PrivacyPloicyMain = () => {
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
        { name: "Privacy Policy", link: "/" },
    ]
    return (
        <div>
            <div className="h-60 sm:h-72 md:h-80 bg-zinc-200">
                <div className="container1 relative flex flex-col gap-y-10 items-center justify-center h-full">
                    <Breadcrumb hoverColor="text-black" linkColor="text-zinc-700" breadcrumbData={breadcrumbData} />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl fw_700 text-black text-center tracking-widest">Privacy Policy</h1>
                </div>
            </div>
            <div className="bg-zinc-100">
                <div className="min-h-screen container1 py-20">
                    <div className="">
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            At [Your Company Name], we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our e-commerce website.
                        </p>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">1. Information We Collect</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We collect information from you in various ways when you visit our website, make a purchase, or interact with our services. The types of information we collect include:
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                                <li><strong>Personal Information:</strong> Your name, email address, phone number, shipping address, billing information, and payment details.</li>
                                <li><strong>Account Information:</strong> When you create an account, we collect login credentials such as your username and password.</li>
                                <li><strong>Transaction Information:</strong> Details of your purchases, including items bought, prices, and purchase dates.</li>
                                <li><strong>Behavioral Data:</strong> Information on how you interact with our website, including browsing history, products viewed, and time spent on the site.</li>
                                <li><strong>Device Information:</strong> Details about the device you use to access our site, such as IP address, operating system, and browser type.</li>
                            </ul>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">2. How We Use Your Information</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We use the information we collect for various purposes, including:
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                                <li>Processing your orders and delivering products to you.</li>
                                <li>Improving our website, products, and services based on your feedback and behavior.</li>
                                <li>Providing personalized shopping experiences and product recommendations.</li>
                                <li>Sending you marketing communications, special offers, and promotions with your consent.</li>
                                <li>Enhancing security and preventing fraud.</li>
                                <li>Complying with legal obligations and resolving disputes.</li>
                            </ul>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">3. Cookies and Tracking Technologies</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Our website uses cookies and similar technologies to enhance your experience. Cookies allow us to:
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                                <li>Remember your preferences and login information.</li>
                                <li>Track your interactions with our website for analytics and marketing purposes.</li>
                                <li>Deliver personalized ads based on your browsing behavior.</li>
                            </ul>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                You can control the use of cookies through your browser settings, but disabling cookies may limit some functionality on our site.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">4. Sharing Your Information</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We value your privacy and do not sell your personal information. However, we may share your information in the following circumstances:
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                                <li><strong>Service Providers:</strong> We work with third-party vendors to help process payments, deliver products, and perform other functions. These partners are contractually obligated to keep your information confidential.</li>
                                <li><strong>Legal Requirements:</strong> We may disclose your information if required to comply with a legal obligation or to protect our rights.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
                            </ul>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">5. Your Choices and Rights</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                You have certain rights regarding your personal information, including the right to:
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                                <li>Access the information we hold about you.</li>
                                <li>Request corrections to inaccurate information.</li>
                                <li>Opt-out of marketing communications.</li>
                                <li>Delete your account or request that your personal information be erased.</li>
                            </ul>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                To exercise these rights, please contact us at privacy@example.com.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">6. Data Security</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We take security seriously and employ various measures to protect your information from unauthorized access, disclosure, or loss. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">7. Children's Privacy</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Our services are not directed toward children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take steps to delete that information.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">8. Changes to This Privacy Policy</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal obligations. We encourage you to review this page periodically for the latest updates.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">9. Contact Us</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact us at privacy@example.com or at the following address:
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                [Your Company Name] <br />
                                1234 E-Commerce St. <br />
                                Suite 100, Your City, Your Country <br />
                                support@example.com
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPloicyMain