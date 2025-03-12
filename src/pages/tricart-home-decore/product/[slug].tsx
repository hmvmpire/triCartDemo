import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { productType2 } from "@/Types/productPropsTypes";
import { Banner } from "@/components/subComponents/homeDecorHome/banner";
import { NewArrivals } from "@/components/subComponents/homeDecorHome/newArrivals";
import { ReviewsSection } from "@/components/subComponents/electronicsDetailPage/reviewsSection";
import { CompHeading } from "@/components/shared/compHeading";
import { DecorProductHeader } from "@/components/headers/decorProductHeader";
import { linkType } from "@/Types/navbarProsTypes";
import { homeDecorCategories } from "@/data/homeDecorData";
import { getHomeDecoreDataSimilarProducts } from "@/services/generalService";
import { DecorProductDetails } from "@/components/subComponents/decorDetailPage/decorProductDetails";
import { MainLayout } from "@/components/shared/MainLayout";

const ProductDetails = () => {
    const [product, setProduct] = useState<productType2 | null>(null);
    const [category, setCategory] = useState<linkType | null>(null);

    const params = useParams();

    useEffect(() => {
        if (params?.slug) {
            homeDecorCategories.map((item) => {
                if (item && item.products && item.products.length > 0) {
                    item.products.map((product) => {
                        if (product.link === ("/" + params.slug)) {
                            setProduct(product as productType2);
                            setCategory(item);
                        }
                    })
                }
            })
        }
    }, [params?.slug, homeDecorCategories]);
    return (
        <MainLayout>
            <div>
                <DecorProductHeader product={product as productType2} category={category as linkType} />
                {category && product && <DecorProductDetails data={getHomeDecoreDataSimilarProducts(category?.label, product?.label)} />}
                <div className="px-3 m:px-5 lg:px-10">
                    <div className="mb-5">
                        <CompHeading title={"Reviews"} rightContent={null} justify="justify-start" headingSize="text-xl uppercase" />
                    </div>
                    <ReviewsSection inputBg="bg-zinc-100" submitBtnBg="bg-DECOR_PRIMARY hover:bg-DECOR_PRIMARY-HOVER" showContainer={false} showTitle={false} submitBtnRoundness="rounded-none" />
                </div>
                {category && product && <NewArrivals data={getHomeDecoreDataSimilarProducts(category?.label, product?.label)} title="Related Products" />}
                <Banner />
            </div>
        </MainLayout>
    );
};
export default ProductDetails;
