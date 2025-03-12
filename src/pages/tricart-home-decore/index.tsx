import { DecorHomeHeader } from "@/components/headers/decorHomeHeader";
import { MainLayout } from "@/components/shared/MainLayout";
import { Banner } from "@/components/subComponents/homeDecorHome/banner";
import { Categories } from "@/components/subComponents/homeDecorHome/categories";
import { Collection } from "@/components/subComponents/homeDecorHome/collection";
import { FeaturedProducts } from "@/components/subComponents/homeDecorHome/featuredProducts";
import Features from "@/components/subComponents/homeDecorHome/features";
import { Home3Brands } from "@/components/subComponents/homeDecorHome/home3Brands";
import { NewArrivals } from "@/components/subComponents/homeDecorHome/newArrivals";
import { SocialsSection } from "@/components/subComponents/homeDecorHome/socialsSection";
import { homeDecorFeaturedProducts } from "@/data/homeDecorData";

const HomeDecor = () => {
    return (
        <MainLayout>
            <div>
                <DecorHomeHeader />
                <Categories />
                <div id="all-new">
                    <NewArrivals data={homeDecorFeaturedProducts} title="All New Arrivals" />
                </div>
                <FeaturedProducts />
                <Home3Brands />
                <Collection />
                <div id="best-seller">
                    <NewArrivals data={homeDecorFeaturedProducts} title="Best Sellers" />
                </div>
                <Banner />
                <SocialsSection />
                <Features />
            </div>
        </MainLayout>
    )
}
export default HomeDecor;
