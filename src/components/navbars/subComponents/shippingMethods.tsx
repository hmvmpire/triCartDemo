import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons/faSackDollar";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons/faShippingFast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ShippingFeature {
    icon: IconDefinition;
    text: string;
}

const SHIPPING_FEATURES: ShippingFeature[] = [
    {
        icon: faShippingFast,
        text: "Free Shipping & Returns",
    },
    {
        icon: faSackDollar,
        text: "Money Back Guarantee",
    },
    {
        icon: faCalendarAlt,
        text: "Online Support 24/7",
    },
];

const FeatureItem = ({ icon, text }: ShippingFeature) => (
    <div className="flex items-center gap-x-1 justify-center group cursor-pointer">
        <div className="text-DECOR_PRIMARY text-xl group-hover:scale-110 duration-300">
            <FontAwesomeIcon style={{fontSize:'14px'}} icon={icon} />
        </div>
        <div>
            <p className="text-DECOR_PRIMARY text-xs fw_600 p-0 m-0 mt-1 ml-1">{text}</p>
        </div>
    </div>
);

export const ShippingMethods3 = () => {
    return (
        <div className="flex items-center gap-x-6 w-full">
            {SHIPPING_FEATURES.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
            ))}
        </div>
    );
};
