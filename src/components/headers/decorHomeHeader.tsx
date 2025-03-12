import Image from 'next/image'
import h3Img1 from '../../static/home3ban1.png'
import h3Img2 from '../../static/home3ban4.jpg'
import h3Img3 from '../../static/home3ban5.jpg'
import h3Img4 from '../../static/home3ban2.png'

interface BannerItem {
    image: any;
    title: string;
    subtitle: string;
    className?: string;
    imageClassName?: string;
}

const BannerOverlay = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <h3 className="text-white text-sm mb-2">{subtitle}</h3>
        <span className="text-white text-xs underline">Explore</span>
    </div>
);

const BannerImage = ({ image, title, subtitle, className, imageClassName }: BannerItem) => (
    <div className={`relative group overflow-hidden ${className}`}>
        <Image 
            src={image} 
            alt={title} 
            className={`object-cover h-full w-full rounded-sm transition-transform duration-300 group-hover:scale-110 ${imageClassName}`} 
        />
        <BannerOverlay title={title} subtitle={subtitle} />
    </div>
);

const bannerItems: BannerItem[] = [
    { image: h3Img3, title: 'Kitchen', subtitle: 'Accessories', className: 'col-span-4 md:col-span-2' },
    { image: h3Img2, title: 'Living Room', subtitle: 'Furniture', className: 'col-span-8 md:col-span-4' },
    { image: h3Img1, title: 'Furniture', subtitle: 'Sofa', imageClassName: 'object-top' },
    { image: h3Img4, title: 'Bedroom', subtitle: 'Furniture', imageClassName: 'bg-center' },
];

export const DecorHomeHeader = () => {
    return (
        <div className="px-4 sm:px-5 lg:px-10 pt-1">
            <div className="grid grid-cols-12 gap-3 sm:gap-5 md:gap-3 lg:gap-5 pb-14 border-b">
                {bannerItems.slice(0, 2).map((item, index) => (
                    <BannerImage key={index} {...item} />
                ))}
                <div className="col-span-12 md:col-span-6 flex flex-col gap-y-3 sm:gap-y-5 md:gap-y-3 lg:gap-y-5">
                    {bannerItems.slice(2).map((item, index) => (
                        <BannerImage key={index + 2} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}