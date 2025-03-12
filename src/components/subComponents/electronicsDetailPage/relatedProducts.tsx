import { CarouselList } from "../../productsLists/carouselList";
import { CompHeading2 } from "../../shared/CompHeading2";
import { getElectornicsDataSimilarProducts } from "@/services/generalService";
import { productType1 } from "@/Types/productPropsTypes";
import { CategoryPropType } from "@/Types/categoryPropsTypes";
import { FC } from "react";
import { HurryUpDealsBanner } from "../electronicsHome/hurryUpDealsBanner";

interface RelatedProductsProps {
    product: productType1;
    category: CategoryPropType;
}


export const RelatedProducts: FC<RelatedProductsProps> = ({
    product, category
}): JSX.Element => {

    return (category && product &&
        <div>
            <div className="container2">
                <div className="px-3 sm:px-8">
                    <CompHeading2 title="Related Products" rightContent={null} />
                </div>
                <div className="px-2 sm:px-4 mt-8">
                    <CarouselList data={getElectornicsDataSimilarProducts(category.label, product.label)} galleryresponsive={{
                        superLargeDesktop: {
                            // the naming can be any, depends on you.
                            breakpoint: { max: 4000, min: 1280 },
                            items: 4,
                        },
                        desktop: {
                            breakpoint: { max: 1280, min: 800 },
                            items: 3,
                        },
                        tablet: {
                            breakpoint: { max: 800, min: 640 },
                            items: 2,
                        },
                        mobile: {
                            breakpoint: { max: 640, min: 0 },
                            items: 1,
                        },
                    }} />
                </div>
            </div>
            <HurryUpDealsBanner showHeading={false} />
        </div>
    );
};
