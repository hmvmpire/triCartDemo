import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { homeDecorCategories } from "@/data/homeDecorData";
import { linkType, subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import { DecorCategoryHeader } from "@/components/subComponents/decorCategoryDetails/decorCategoryHeader";
import { DecorCategoryMain } from "@/components/subComponents/decorCategoryDetails/decorCategoryMain";
import { MainLayout } from "@/components/shared/MainLayout";

const CategoryDetails = () => {
    const [category, setCategory] = useState<linkType | null>(null); // Use `null` as the initial value
    const [subCategory, setSubCategory] = useState<subLinkType1 | subLinkType2 | null>(null); // Use `null` as the initial value
    const params = useParams();

    useEffect(() => {
        if (params?.slug) { // Check specifically if `params.slug` exists
            homeDecorCategories.find((item) => {
                if (item.link.includes(`/${params.slug}`)) {
                    setCategory(item);
                    setSubCategory(null);
                } else {
                    item.subLinks?.find((subItem) => {
                        if (subItem.links && subItem.links.length > 0) {
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
    }, [params?.slug, homeDecorCategories]);
    return (
        <MainLayout>
            <div>
                <DecorCategoryHeader category={category as linkType} subCategory={subCategory as subLinkType1 | subLinkType2} />
                <DecorCategoryMain category={category as linkType} />
            </div>
        </MainLayout>
    )
};
export default CategoryDetails;
