import { Breadcrumb } from "@/components/shared/breadcrumb"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const TermsAndConditionsMain = () => {
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
        { name: "Terms & Conditions", link: "/" },
    ]
    return (
        <div>
            <div className="h-60 sm:h-72 md:h-80 bg-zinc-200">
                <div className="container1 relative flex flex-col gap-y-10 items-center justify-center h-full">
                    <Breadcrumb hoverColor="text-black" linkColor="text-zinc-700" breadcrumbData={breadcrumbData} />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl fw_700 text-black text-center tracking-widest">Terms and Conditions</h1>
                </div>
            </div>
            <div className="bg-zinc-100">
                <div className="min-h-screen container1 py-20">
                    <div>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Welcome to [Your Company Name]. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms. Please read them carefully before using our platform.
                        </p>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                By accessing and using our website, you agree to comply with these terms and any applicable laws and regulations. If you do not agree with these terms, you must not use this website.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">2. Account Registration</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                To make a purchase or access certain features of our website, you may be required to create an account. You agree to provide accurate and up-to-date information during the registration process and to keep your account details secure. You are responsible for maintaining the confidentiality of your account and password.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">3. User Obligations</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                When using our website, you agree not to:
                            </p>
                            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                                <li>Violate any applicable laws or regulations.</li>
                                <li>Infringe on the intellectual property rights of others.</li>
                                <li>Engage in fraudulent activities or provide false information.</li>
                                <li>Use our website for unlawful purposes or to harm others.</li>
                                <li>Interfere with or disrupt the operation of our services.</li>
                            </ul>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">4. Product Information and Pricing</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We strive to provide accurate information about our products, including descriptions, pricing, and availability. However, we do not warrant that product descriptions or pricing information are error-free. In the event of a pricing error, we reserve the right to cancel or refuse any orders placed for products listed at the incorrect price.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">5. Payment Terms</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                When you make a purchase on our website, you agree to provide valid payment information. We accept various payment methods, and all payments are subject to verification. You agree to pay all applicable fees and taxes associated with your purchase.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">6. Shipping and Delivery</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We offer various shipping options for your convenience. Shipping times may vary depending on the delivery location and method chosen. We are not responsible for delays caused by factors beyond our control, such as carrier delays or customs processing.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">7. Returns and Refunds</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We accept returns for most products within [number of days] days of delivery, provided the item is in its original condition and packaging. Refunds will be processed to the original payment method within [number of days] days of receiving the returned item. Shipping fees are non-refundable.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">8. Intellectual Property</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                All content on our website, including text, images, graphics, logos, and software, is the property of [Your Company Name] or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on our website without our express written permission.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">9. Limitation of Liability</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                To the maximum extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or services. Our total liability for any claim arising out of these terms shall not exceed the amount you paid for the product or service in question.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">10. Indemnification</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                You agree to indemnify and hold harmless [Your Company Name], its officers, directors, employees, and agents from any claims, liabilities, damages, and expenses (including reasonable legal fees) arising from your use of our website or your violation of these terms.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">11. Termination</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We reserve the right to terminate or suspend your access to our website at any time, without notice, if you violate these terms or engage in conduct that we deem harmful to our company or other users.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">12. Changes to the Terms</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We may update these Terms and Conditions from time to time to reflect changes in our business practices or legal requirements. We encourage you to review this page periodically for the latest updates. Your continued use of our website constitutes acceptance of any changes to the terms.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">13. Governing Law</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions. Any disputes arising out of or relating to these terms shall be resolved in the courts of [Your Country/State].
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">14. Contact Information</h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                If you have any questions or concerns about these Terms and Conditions, please contact us at support@example.com or at the following address:
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


export default TermsAndConditionsMain