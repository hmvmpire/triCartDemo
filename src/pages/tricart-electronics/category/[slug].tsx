import { HelpConp } from "@/components/subComponents/electronicsHome/helpComp";
import { useEffect, useState } from "react";
import { HurryUpDealsBanner } from "@/components/subComponents/electronicsHome/hurryUpDealsBanner";
import { ElectronicsCategoryHeader } from "@/components/subComponents/electronicsCategoryDetails/electronicsCategoryHeader";
import { useParams } from "next/navigation";
import { CategoryPropType } from "@/Types/categoryPropsTypes";
import { ElectronicsCategoryProductsList } from "@/components/subComponents/electronicsCategoryDetails/electronicsCategoryProductsList";
import { FilterBox1 } from "@/components/filterBoxes/filterBox1";
import { categoriesData } from "@/data/electronicsData";
import { MainLayout } from "@/components/shared/MainLayout";

const CategoryDetails = () => {
    const [category, setCategory] = useState<CategoryPropType | null>(null); // Use `null` as the initial value
    const params = useParams();
    const [cardType, setCardType] = useState("grid")

    useEffect(() => {
        if (params?.slug) { // Check specifically if `params.slug` exists
            const foundCategory = categoriesData.find((item) => item.link === `/${params.slug}`);
            if (foundCategory) {
                setCategory(foundCategory);
            }
        }
    }, [params?.slug, categoriesData]);
    return (
        <MainLayout>
            <div className="bg-zinc-100">
                <ElectronicsCategoryHeader category={category as CategoryPropType} />
                <FilterBox1 cardType={cardType} setCardType={setCardType} />
                <ElectronicsCategoryProductsList cardType={cardType} category={category as CategoryPropType} />
                <HurryUpDealsBanner showHeading={false} />
                <div className="py-8 sm:py-16">
                    <HelpConp />
                </div>
            </div>
        </MainLayout>
    )
};
export default CategoryDetails;
