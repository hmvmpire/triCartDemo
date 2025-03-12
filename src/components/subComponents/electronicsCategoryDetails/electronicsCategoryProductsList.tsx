import { ProductCard1 } from "@/components/productCards/productCard1"
import { ProductCard1Horizontal } from "@/components/productCards/productCard1Horizontal"
import { CategoryPropType } from "@/Types/categoryPropsTypes"
import { productType1 } from "@/Types/productPropsTypes"
import { useMediaQuery } from "@mui/material"
import { FC } from "react"

interface ElectronicsCategoryProductsListProps {
    cardType: string
    category: CategoryPropType;
}


export const ElectronicsCategoryProductsList: FC<ElectronicsCategoryProductsListProps> = ({
    cardType, category
}): JSX.Element => {
    const matches = useMediaQuery("(max-width:640px)");

    return (category && category.products && category.products.length > 0 ?
        <div className="container1">
            {cardType === "list" &&
                <>
                    {
                        !matches ? <div className="grid grid-cols-1 gap-y-4">
                            {category.products.map((product, index) => (
                                <ProductCard1Horizontal highLightedBg="bg-ELECTRONICS_PRIMARY hover:bg-ELECTRONICS_PRIMARY-HOVER" hoverText="hover:text-ELECTRONICS_PRIMARY-HOVER" productBaseUrl="/tricart-electronics/product" product={product as unknown as productType1} key={index + 1} />
                            ))}
                        </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 sm:gap-4">
                            {category.products.map((product, index) => (
                                <ProductCard1 product={product as unknown as productType1} key={index + 1} />
                            ))}
                        </div>
                    }
                </>
            }
            {cardType === "grid" && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 sm:gap-4">
                {category.products.map((product, index) => (
                    <ProductCard1 product={product as unknown as productType1} key={index + 1} />
                ))}
            </div>}
        </div> : <div></div>
    )
}