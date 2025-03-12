import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlug,
    faCode,
    faChartLine,
    faGears,
    faExchange,
    faCogs,
    faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

const Mainfeatures: React.FC = () => {
    const features = [
        {
            icon: faGears,
            title: 'Seamless Integration',
            description: 'Our platform integrates effortlessly with your existing tools and workflows. No complex configurations or technical headaches—just smooth, hassle-free integration.',
        },
        {
            icon: faCode,
            title: 'Advanced Customization',
            description:
                'Unlock the full potential of your site with our powerful customization options. With full access to the codebase, developers can create bespoke solutions that align perfectly with your business goals.',
        },
        {
            icon: faExchange,
            title: 'Optimized for High Conversions',
            description: 'Every feature is designed with conversion optimization in mind. Maximize your ROI and achieve your business objectives faster with data-driven insights and strategies.',
        },
        {
            icon: faMobileAlt,
            title: 'Fully Responsive Design',
            description:
                'Our platform is built to look and perform flawlessly on all devices. Whether your users are on desktops, tablets, or smartphones, they’ll enjoy a seamless and consistent experience.',
        },
    ];

    return (
        <section id="features" className="bg-indigo-50 bg-opacity-70">
            <div className="container3 mx-auto px-4 py-40">
                <h2 className="text-3xl md:text-4xl lg:text-5xl fw_700 text-center text-black mb-4">
                    What you Get?
                </h2>
                <p className="text-lg text-gray-600 text-center">
                    Discover the features that make you stand out from the crowd.
                </p>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-5 md:p-10 md:bg-white border-b md:border-b-0 md:rounded-md duration-300 flex flex-col md:flex-row text-center md:text-left md:items-start gap-x-8"
                        >
                            <div className="flex justify-center mb-6">
                                <FontAwesomeIcon
                                    icon={feature.icon}
                                    className="w-12 h-12 text-purple-700"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg xl:text-xl font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-xs xl:text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mainfeatures;