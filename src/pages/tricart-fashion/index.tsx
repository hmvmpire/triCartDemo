import { FashionHomeheader } from "@/components/headers/fashionHomeheader";
import { MainLayout } from "@/components/shared/MainLayout";
import { Blogs } from "@/components/subComponents/fashionHome/blogs";
import { FeaturedCategories } from "@/components/subComponents/fashionHome/featuredCategories";
import { FeaturedProducts } from "@/components/subComponents/fashionHome/featuredProducts";
import { Home4Banner } from "@/components/subComponents/fashionHome/home4Banner";
import { Home4Brands } from "@/components/subComponents/fashionHome/home4Brands";
import { OtherProducts } from "@/components/subComponents/fashionHome/otherProducts";
import { ShippingMethods4 } from "@/components/subComponents/fashionHome/shippingMethod4";
import { TopRatedProducts } from "@/components/subComponents/fashionHome/topRatedProducts";

const Fashion = () => {
    return (
        <MainLayout>
            <div>
                <FashionHomeheader />
                <ShippingMethods4 />
                <FeaturedProducts />
                <FeaturedCategories />
                <Home4Banner />
                <TopRatedProducts />
                <OtherProducts />
                <Blogs />
                <Home4Brands />
            </div>
        </MainLayout>
    )
}
export default Fashion;
