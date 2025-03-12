import { ElectronicsProductHeader } from "@/components/headers/electronicsProductHeader";
import { HelpConp } from "@/components/subComponents/electronicsHome/helpComp";
import { News } from "@/components/subComponents/electronicsHome/news";
import { ProductDetailsOverview } from "@/components/subComponents/electronicsDetailPage/productDetails";
import { RelatedProducts } from "@/components/subComponents/electronicsDetailPage/relatedProducts";
import { ReviewsSection } from "@/components/subComponents/electronicsDetailPage/reviewsSection";
import { ShippingMethods } from "@/components/subComponents/electronicsHome/shippingMethods";
import { useEffect, useState } from "react";
import { productType1 } from "@/Types/productPropsTypes";
import { useParams } from "next/navigation";
import { categoriesData } from "@/data/electronicsData";
import { CategoryPropType } from "@/Types/categoryPropsTypes";
import { MainLayout } from "@/components/shared/MainLayout";

const ProductDetails = () => {
    const [product, setProduct] = useState<productType1 | null>(null); // Use `null` as the initial value
    const [category, setCategory] = useState<CategoryPropType | null>(null); // Use `null` as the initial value
    const params = useParams();

    useEffect(() => {
        if (params?.slug) { // Check specifically if `params.slug` exists
            categoriesData.map((item) => {
                if (item && item.products && item.products.length > 0) {
                    item.products.map((product) => {
                        if (product.link === ("/" + params.slug)) {
                            setProduct(product as productType1);
                            setCategory(item);
                        }
                    })
                }
            })
        }
    }, [params?.slug, categoriesData]);
    return (
        <MainLayout>
            <div className="bg-zinc-100">
                <div className="pb-5">
                    <ElectronicsProductHeader product={product as productType1} category={category as CategoryPropType} />
                    <ShippingMethods />
                    <ProductDetailsOverview />
                    <ReviewsSection showContainer={true} activeStarColor="text-ELECTRONICS_PRIMARY-HOVER" inputBg="bg-white" submitBtnBg="bg-ELECTRONICS_PRIMARY" />
                </div>
                <div className="py-8 sm:py-12 flex flex-col gap-y-10 md:gap-y-16 border-b">
                    <RelatedProducts product={product as productType1} category={category as CategoryPropType} />
                    <News />
                </div>
                <div className="py-8 sm:py-16">
                    <HelpConp />
                </div>
            </div>
        </MainLayout>
    );
};
export default ProductDetails;
