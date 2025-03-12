import React from 'react';
import Image from 'next/image';
import { homeDecorFeatures } from '@/data/homeDecorData';
import { CompHeading } from '@/components/shared/compHeading';
import Link from 'next/link';

const Features: React.FC = () => {
    return (
        <div className="px-3 sm:px-5 lg:px-10 py-8">
            <CompHeading title="Read Us" rightContent={null} justify="justify-start" headingSize="text-xl" />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
                {homeDecorFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col gap-y-4 bg-white drop-shadow-xl px-3 py-4">
                        <Image src={feature.img} alt={feature.title} className="w-full h-60 object-cover mb-4" width={500} height={200} />
                        <div>
                            <h2 className="text-xl text-DECOR_PRIMARY three_lines_elipsis font-semibold">{feature.title}</h2>
                            <div className='mb-4'></div>
                            <p className="text-gray-600 text-sm two_lines_elipsis">{feature.description}</p>
                            <div className='mb-6'></div>
                            <Link href={"/tricart-home-decore/blog/" + feature.link} className="border-none outline-none shadow-none text-white bg-DECOR_PRIMARY text-sm px-6 py-2 hover:bg-DECOR_PRIMARY-HOVER transition duration-300">Learn More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
