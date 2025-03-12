import { useEffect, useState } from "react";
import { NewsLetter } from "@/components/subComponents/powerToolsHome/newsLetter";
import { ToolsProductHeader } from "../../../components/headers/toolsProductHeader";
import { useParams } from "next/navigation";
import { allToolCategories } from "@/data/toolsData";
import { productType2 } from "@/Types/productPropsTypes";
import { TrandingOffers } from "@/components/subComponents/powerToolsHome/trandingOffers";
import { linkType } from "@/Types/navbarProsTypes";
import { ToolsProductDetails } from "@/components/subComponents/toolsDetailPage/toolsProductDetails";
import { MainLayout } from "@/components/shared/MainLayout";

const ProductDetails = () => {
    const [product, setProduct] = useState<productType2 | null>(null);
    const [category, setCategory] = useState<linkType | null>(null);

    const params = useParams();

    useEffect(() => {
        if (params?.slug) { // Check specifically if `params.slug` exists
            allToolCategories.map((item) => {
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
    }, [params?.slug, allToolCategories]); // Add `productsData` to the dependency array
    return (
        <MainLayout>
            <div>
                <ToolsProductHeader product={product as productType2} category={category as linkType} />
                <ToolsProductDetails />
                <TrandingOffers title="Related Products" />
                <NewsLetter />
            </div>
        </MainLayout>
    );
};
export default ProductDetails;
