import { StaticImageData } from "next/image";
import { productType1, productType2 } from "./productPropsTypes";

export interface CategoryPropType {
    label: string;
    link: string;
    img: StaticImageData;
    products: productType1[] | productType2[];
}


export interface Category3PropType {
    title: string;
    img: StaticImageData;
}