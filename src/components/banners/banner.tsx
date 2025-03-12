import React from 'react';

// Define the text position enum
export enum TextPosition {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

// Define the props interface
interface BannerProps {
    heading: string;
    subHeading: string;
    textPosition: TextPosition;
    imageUrl: string;
    buttonText?: string; // Optional button text
    showButton?: boolean; // Optional boolean to show/hide button
}

const Banner: React.FC<BannerProps> = ({
    heading,
    subHeading,
    textPosition,
    imageUrl,
    buttonText = 'Learn More', // Default button text
    showButton = false, // Default to not showing button
}) => {
    // Define text alignment styles based on position
    const getTextAlignment = () => {
        switch (textPosition) {
            case TextPosition.LEFT:
                return 'items-start text-left';
            case TextPosition.RIGHT:
                return 'items-end text-right';
            case TextPosition.CENTER:
                return 'items-center text-center';
            default:
                return 'items-center text-center';
        }
    };

    return (
        <div className="relative w-full h-[400px]">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>

            {/* Content */}
            <div className={`relative h-full flex flex-col justify-center px-8 ${getTextAlignment()}`}>
                <h1 className="text-4xl font-bold text-white mb-4">{heading}</h1>
                <p className="text-xl text-white mb-6">{subHeading}</p>
                {showButton && (
                    <button className="inline-block px-6 py-2 text-white border-2 border-white hover:bg-white hover:text-black transition-colors">
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Banner;