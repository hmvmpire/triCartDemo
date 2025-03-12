import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faTruck,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const OrderCreationMain: React.FC = () => {

    const nav1Route = window.location.pathname.includes("/tricart-electronics")
    const nav2Route = window.location.pathname.includes("/tricart-tools")
    const nav3Route = window.location.pathname.includes("/tricart-home-decore")
    const nav4Route = window.location.pathname.includes("/tricart-fashion")

    const successPath = nav1Route ? "/tricart-electronics" : nav2Route ? "/tricart-tools" : nav3Route ? "/tricart-home-decore" : nav4Route ? "/tricart-fashion" : ""

    return (
        <div className="bg-zinc-100">
            <div className="container3 py-5 lg:py-20 flex items-center justify-center">
                <div className="bg-white rounded-lg p-8 w-full text-center">
                    {/* Success Icon */}
                    <div className="text-green-500 mb-6">
                        <FontAwesomeIcon icon={faCheckCircle} size="4x" />
                    </div>
                    {/* Success Message */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Order Created Successfully!
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Thank you for your purchase! Your order has been successfully placed
                        and is being processed. Below are the details of your order.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 md:gap-x-4 lg:gap-x-10 mb-8">
                        {/* Order Details */}
                        <div className="bg-zinc-100 p-6 rounded-lg text-left">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Order Details
                            </h2>
                            <div className="space-y-3">
                                <p className="text-gray-700">
                                    <span className="font-medium">Order ID:</span> #123456
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Date:</span> October 10, 2023
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Total Amount:</span> $199.99
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Payment Method:</span> Credit Card
                                </p>
                            </div>
                        </div>

                        {/* Shipping Information */}
                        <div className="bg-zinc-100 p-6 rounded-lg text-left">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Shipping Information
                            </h2>
                            <div className="space-y-3">
                                <p className="text-gray-700">
                                    <span className="font-medium">Name:</span> John Doe
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Address:</span> 123 Main St, Apt 4B,
                                    New York, NY 10001
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Phone:</span> (123) 456-7890
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Email:</span> john.doe@example.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className="mb-16">
                        <h2 className="text-xl font-semibold text-left text-gray-800 mb-4">
                            What&apos;s Next?
                        </h2>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-start space-x-4">
                                <FontAwesomeIcon icon={faTruck} className="text-black w-6 h-6" />
                                <p className="text-gray-700 text-left">
                                    Your order will be shipped within 2-3 business days.
                                </p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <FontAwesomeIcon icon={faEnvelope} className="text-black w-6 h-6" />
                                <p className="text-gray-700 text-left">
                                    You will receive an email with tracking information once your
                                    order is shipped.
                                </p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <FontAwesomeIcon icon={faPhone} className="text-black w-6 h-6" />
                                <p className="text-gray-700 text-left">
                                    For any questions, contact our support team at (123) 456-7890.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Continue Shopping Button */}
                    <Link href={successPath} className="border-none outline-none shadow-none bg-zinc-800 hover:bg-black text-white px-6 text-sm fw_400 py-3 duration-300">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};
