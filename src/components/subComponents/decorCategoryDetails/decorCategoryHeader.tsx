import { Breadcrumb } from "@/components/shared/breadcrumb";
import headerBg1 from "../../../static/cardDummyimg1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { linkType, subLinkType1, subLinkType2 } from "@/Types/navbarProsTypes";

interface CategoryProps {
    category: linkType;
    subCategory: subLinkType1 | subLinkType2;
}


export const DecorCategoryHeader: FC<CategoryProps> = ({
    category, subCategory
}): JSX.Element => {
    const breadcrumbData = [
        { name: <FontAwesomeIcon icon={faHome} />, link: "/" },
        { name: (subCategory && 'label' in subCategory) ? subCategory.label : (subCategory && 'categoryName' in subCategory) ? subCategory.categoryName : category && category.label, link: "/" },

    ]
    return (category &&
        <div className="px-3 sm:px-5 lg:px-10">
            <div className="h-60 sm:h-72 md:h-80 w-full bg-center bg-cover sm:mb-5 px-3 sm:px-5 md:px-10 lg:px-20" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${headerBg1.src})` }}>
                <div className="flex flex-col gap-y-3 h-52 justify-center md:justify-end">
                    <Breadcrumb hoverColor="hover:text-DECOR_PRIMARY-HOVER" linkColor="text-DECOR_PRIMARY" breadcrumbData={breadcrumbData} />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl fw_700 text-DECOR_PRIMARY tracking-widest">{category.label}</h1>
                </div>
            </div>
        </div>
    )
}