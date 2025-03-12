import { ElectronicsHomeHeader } from "@/components/headers/electronicsHomeHeader";
import { MainLayout } from "@/components/shared/MainLayout";
import { BundleProducts } from "@/components/subComponents/electronicsHome/bundleProducts";
import { FeaturedProducts } from "@/components/subComponents/electronicsHome/featuredProducts";
import { FromInstagram } from "@/components/subComponents/electronicsHome/fromInstagram";
import { HelpConp } from "@/components/subComponents/electronicsHome/helpComp";
import { HurryUpDeals } from "@/components/subComponents/electronicsHome/HurryUpDeals";
import { LatestPosts } from "@/components/subComponents/electronicsHome/latestPosts";
import { News } from "@/components/subComponents/electronicsHome/news";
import { PopularCategories } from "@/components/subComponents/electronicsHome/popularCategories";
import { ShippingMethods } from "@/components/subComponents/electronicsHome/shippingMethods";
import { Testimonials1 } from "@/components/testimonials/testimonials1";

const Electronics = () => {
    return (
        <MainLayout>
            <div className="bg-zinc-100">
                <div className="py-5 border-b">
                    <ElectronicsHomeHeader />
                    <ShippingMethods />
                </div>
                <div className="py-8 sm:py-12 flex flex-col gap-y-10 md:gap-y-16 border-b" id="popularCategories1">
                    <FeaturedProducts />
                    <PopularCategories />
                    <BundleProducts />
                    <HurryUpDeals />
                    <News />
                </div>
                <div className="py-8 sm:pt-12 sm:pb-20 flex flex-col gap-y-10 md:gap-y-16 border-b">
                    <Testimonials1 />
                    <FromInstagram />
                    <LatestPosts />
                </div>
                <div className="py-8 sm:py-16">
                    <HelpConp />
                </div>
            </div>
        </MainLayout>
    );
};
export default Electronics;
