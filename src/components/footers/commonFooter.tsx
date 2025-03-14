import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from "../../static/commonFooterLogo.png";
import { useRouter } from 'next/router';
import Link from 'next/link';


interface CommonFooterProps {
    container?: boolean;
}


const CommonFooter: FC<CommonFooterProps> = ({
    container
}): JSX.Element => {
    const router = useRouter();
    return (
        <footer className="bg-stone-100 text-black py-12 border-t">
            <div className={container ? "container3" : "container1"}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Image
                            src={logo}
                            alt="logo"
                            className="w-32 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                            onClick={() => router.push("/")}
                        />
                        <p className="text-gray-400">
                            Empowering your journey with innovative solutions.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                            >
                                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                            </Link>
                            <Link
                                href="#"
                                className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                            </Link>
                            <Link
                                href="#"
                                className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                            </Link>
                            <Link
                                href="#"
                                className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                            >
                                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about-us"
                                    className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact-us"
                                    className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Legal Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-&-conditions"
                                    className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="border-none outline-none shadow-none text-gray-400 hover:text-black fw_400 transition-colors duration-300"
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Newsletter</h3>
                        <p className="text-gray-400">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form className="flex space-x-2 w-full">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 rounded-lg bg-stone-200 text-black focus:outline-none focus:ring-2 focus:ring-stone-200"
                            />
                            <button
                                type="submit"
                                className="px-4 pt-3 pb-2 bg-stone-400 text-white rounded-lg hover:bg-stone-500 transition-colors duration-300"
                            >
                                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default CommonFooter;