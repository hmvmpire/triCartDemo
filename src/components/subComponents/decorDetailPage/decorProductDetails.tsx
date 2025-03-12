import { ProductCard3 } from "@/components/productCards/productCard3"
import { CompHeading } from "@/components/shared/compHeading"
import { productType2 } from "@/Types/productPropsTypes"
import { FC } from "react"

interface DecorProductDetailsProps {
    data: productType2[]
}

export const DecorProductDetails: FC<DecorProductDetailsProps> = ({
    data
}): JSX.Element => {
    const dataList = data
    return (dataList &&
        <div className="px-3 m:px-5 lg:px-10 py-10">
            <div className="scroller1 overflow-x-auto w-full">
                <CompHeading title={"COMPARE SIMILAR PRODUCTS"} rightContent={null} justify="justify-start" headingSize="text-xl uppercase" />
                <div className="mt-10 pb-10">
                    <div className="flex">
                        {dataList.map((item, index: number) => (
                            <div className={`w-72 min-w-72 pb-10 ${index === dataList.length - 1 ? "" : "border-r"}`} key={index + 1}>
                                <ProductCard3 product={item} />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-x-3 -mt-2 px-3">
                        <p className="whitespace-nowrap text-xs fw_400 text-zinc-500">Overall Dimensions:</p>
                        <div className="border-b w-svw"></div>
                    </div>
                    <div className="flex -mt-2">
                        {dataList.map((item, index: number) => (
                            <div className={`w-72 min-w-72 text-black fw_600 text-sm px-3 pb-4 pt-5 ${index === dataList.length - 1 ? "" : "border-r"}`} key={index + 1}>
                                62"W x 65"D x 32"H
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-x-3 -mt-2 px-3">
                        <p className="whitespace-nowrap text-xs fw_400 text-zinc-500">Product Weight:</p>
                        <div className="w-full border-b"></div>
                    </div>
                    <div className="flex -mt-2">
                        {dataList.map((item, index: number) => (
                            <div className={`w-72 min-w-72 text-black fw_600 text-sm px-3 pb-4 pt-5 ${index === dataList.length - 1 ? "" : "border-r"}`} key={index + 1}>
                                200 Lbs
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-x-3 -mt-2 px-3">
                        <p className="whitespace-nowrap text-xs fw_400 text-zinc-500">Seat Depth:</p>
                        <div className="w-full border-b"></div>
                    </div>
                    <div className="flex -mt-2">
                        {dataList.map((item, index: number) => (
                            <div className={`w-72 min-w-72 text-black fw_600 text-sm px-3 pb-4 pt-5 ${index === dataList.length - 1 ? "" : "border-r"}`} key={index + 1}>
                                53"
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-x-3 -mt-2 px-3">
                        <p className="whitespace-nowrap text-xs fw_400 text-zinc-500">Seat Height:</p>
                        <div className="w-full border-b"></div>
                    </div>
                    <div className="flex -mt-2">
                        {dataList.map((item, index: number) => (
                            <div className={`w-72 min-w-72 text-black fw_600 text-sm px-3 pb-4 pt-5 ${index === dataList.length - 1 ? "" : "border-r"}`} key={index + 1}>
                                17"
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-x-3 -mt-2 px-3">
                        <p className="whitespace-nowrap text-xs fw_400 text-zinc-500">Frame:</p>
                        <div className="w-full border-b"></div>
                    </div>
                    <div className="flex -mt-2">
                        {dataList.map((item, index: number) => (
                            <div className={`w-72 min-w-72 text-black fw_600 text-sm px-3 pb-10 pt-5 ${index === dataList.length - 1 ? "" : "border-r"}`} key={index + 1}>
                                Cerused Oak
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}