import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { productType2 } from "@/Types/productPropsTypes";
import { FashionProductHeader } from "@/components/headers/fashionProductHeader";
import { RelatedProducts4 } from "@/components/subComponents/fashionDetailPage/relatedProducts4";
import { FashionProductDetails } from "@/components/subComponents/fashionDetailPage/fashionProductDetails";
import { linkType } from "@/Types/navbarProsTypes";
import { fashionCategoriesData } from "@/data/fashionData";
import { getFashionDataSimilarProducts } from "@/services/generalService";
import { MainLayout } from "@/components/shared/MainLayout";

const ProductDetails = () => {
    const [product, setProduct] = useState<productType2 | null>(null);
    const [category, setCategory] = useState<linkType | null>(null);

    const params = useParams();

    useEffect(() => {
        if (params?.slug) {
            fashionCategoriesData.map((item) => {
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
    }, [params?.slug, fashionCategoriesData]);
    return (
        <MainLayout>
            <div>
                <FashionProductHeader product={product as productType2} category={category as linkType} />
                <FashionProductDetails />
                {category && product && <RelatedProducts4 data={getFashionDataSimilarProducts(category?.label, product?.label)} />}
            </div>
        </MainLayout>
    );
};
export default ProductDetails;
