import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fashionCategoriesData } from "@/data/fashionData";
import { linkType, subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";
import { FashionCategoryMain } from "@/components/subComponents/fashionCategoryDetails/fashionCategoryMain";
import { FashionCategoryHeader } from "@/components/subComponents/fashionCategoryDetails/fashionCategoryHeader";
import { MainLayout } from "@/components/shared/MainLayout";

const CategoryDetails = () => {
    const [category, setCategory] = useState<linkType | null>(null); // Use `null` as the initial value
    const [subCategory, setSubCategory] = useState<subLinkType1 | subLinkType2 | null>(null); // Use `null` as the initial value
    const params = useParams();

    useEffect(() => {
        if (params?.slug) { // Check specifically if `params.slug` exists
            fashionCategoriesData.find((item) => {
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
    }, [params?.slug, fashionCategoriesData]);

    return (
        <MainLayout>
            <div>
                <FashionCategoryHeader category={category as linkType} />
                <FashionCategoryMain category={category as linkType} subCategory={subCategory as subLinkType1 | subLinkType2} />
            </div>
        </MainLayout>
    )
};
export default CategoryDetails;
