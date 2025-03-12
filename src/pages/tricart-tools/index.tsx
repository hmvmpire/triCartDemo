import { ToolsHomeHeader } from "@/components/headers/toolsHomeHeader";
import { Banner } from "@/components/subComponents/powerToolsHome/banner";
import { Brands } from "@/components/subComponents/powerToolsHome/brands";
import { CategoriesList } from "@/components/subComponents/powerToolsHome/categoriesList";
import { LatestPosts } from "@/components/subComponents/powerToolsHome/latestPosts";
import { NewArrivals } from "@/components/subComponents/powerToolsHome/newArrivals";
import { News2 } from "@/components/subComponents/powerToolsHome/news2";
import { NewsLetter } from "@/components/subComponents/powerToolsHome/newsLetter";
import { BundleProducts } from "@/components/subComponents/powerToolsHome/bundleProducts";
import { ProductsList } from "@/components/subComponents/powerToolsHome/productsList";
import { ShippingMethods2 } from "@/components/subComponents/powerToolsHome/shippingMethods2";
import { SubCategoriesList } from "@/components/subComponents/powerToolsHome/subCategoriesList";
import { TrandingOffers } from "@/components/subComponents/powerToolsHome/trandingOffers";
import { MainLayout } from "@/components/shared/MainLayout";

const PowerTools = () => {
    return (
        <MainLayout>
            <div>
                <div className="flex flex-col gap-y-5 pb-4">
                    <ToolsHomeHeader />
                    <SubCategoriesList />
                    <CategoriesList />
                    <ProductsList />
                    <Banner />
                    <TrandingOffers title="Trending Offers" />
                    <NewArrivals />
                    <TrandingOffers />
                    <News2 />
                    <BundleProducts />
                    <LatestPosts />
                    <Brands />
                    <ShippingMethods2 />
                </div>
                <div>
                    <NewsLetter />
                </div>
            </div>
        </MainLayout>
    )
}
export default PowerTools;
