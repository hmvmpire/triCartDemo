import { StaticImageData } from "next/image";

export interface blogType1 {
    title: string;
    img: StaticImageData;
    description: string;
    link: string;
    date: string;
    tags: Array<string>;
}
