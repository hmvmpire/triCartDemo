import { Breadcrumb } from "@/components/shared/breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { CategoryPropType } from "@/Types/categoryPropsTypes";
import appliances from '../../../static/appliances2.jpg'

interface CategoryProps {
    category: CategoryPropType;
}


export const ElectronicsCategoryHeader: FC<CategoryProps> = ({
    category,
}): JSX.Element => {
    const breadcrumbData = [
        { name: <FontAwesomeIcon icon={faHome} />, link: "/" },
        { name: category && category.label, link: "/" },
    ]
    return (category &&
        <div className="w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${appliances.src})` }}>
            <div className="container1 h-72 flex gap-x-5 justify-between items-center relative">
                <div className="flex flex-col gap-y-3 justify-center">
                    <Breadcrumb breadcrumbData={breadcrumbData} linkColor="text-ELECTRONICS_PRIMARY" hoverColor="hover:text-ELECTRONICS_PRIMARY-HOVER" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl fw_700 text-ELECTRONICS_PRIMARY-HOVER">{category.label}</h1>
                </div>
                {/* <Image src={category.img} alt="category.detailImg" className="w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 object-contain" /> */}
            </div>
        </div>
    )
}