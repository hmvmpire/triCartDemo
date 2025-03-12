import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { linkType, subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import { allToolCategories } from "@/data/toolsData";
import { LatestPosts } from "@/components/subComponents/powerToolsHome/latestPosts";
import { Banner } from "@/components/subComponents/powerToolsHome/banner";
import { ToolsCategoryMain } from "@/components/subComponents/toolsCategoryDetails/toolsCategoryMain";
import { MainLayout } from "@/components/shared/MainLayout";

const CategoryDetails = () => {
    const [category, setCategory] = useState<linkType | null>(null); // Use `null` as the initial value
    const [subCategory, setSubCategory] = useState<subLinkType1 | subLinkType2 | null>(null); // Use `null` as the initial value
    const params = useParams();

    useEffect(() => {
        if (params?.slug) { // Check specifically if `params.slug` exists
            allToolCategories.find((item) => {
                if (item.link.includes(`/${params.slug}`)) {
                    setCategory(item);
                    setSubCategory(null);
                } else {
                    item.subLinks?.find((subItem) => {
                        if (subItem.link.includes(`/${params.slug}`)) {
                            setCategory(item)
                            setSubCategory(subItem)
                        } else {
                            subItem.links?.find((subSubItem) => {
                                if (subSubItem.link.includes(`/${params.slug}`)) {
                                    setCategory(item)
                                    setSubCategory(subSubItem)
                                }
                            })
                        }
                    })
                }
            })
        }
    }, [params?.slug, allToolCategories]);

    return (
        <MainLayout>
            <div>
                <ToolsCategoryMain category={category as linkType} subCategory={subCategory as subLinkType1 | subLinkType2} />
                <Banner />
                <LatestPosts />
            </div>
        </MainLayout>
    )
};
export default CategoryDetails;
