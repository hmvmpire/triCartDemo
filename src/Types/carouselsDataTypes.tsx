import { StaticImageData } from "next/image";

export interface Header1DataTypes {
    title: string;
    img: StaticImageData;
    desc: string[];
    link?: string;
}
