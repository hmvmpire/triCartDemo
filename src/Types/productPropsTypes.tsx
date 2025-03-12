import { StaticImageData } from "next/image";

export interface productType1 {
  label: string;
  link: string;
  categories: string;
  img?: StaticImageData;
  images: Array<StaticImageData>;
  price: number;
  description: string;
  sku: string;
  colors: Array<string>;
  tag?: string;
  qty?: number;
}


export interface productType2 {
  label: string;
  link: string;
  categories: string;
  img: StaticImageData;
  images: Array<StaticImageData>;
  price: string;
  rating: number;
  description: string;
  sku: string;
  colors: Array<string>;
  tag?: string;
  qty?: number;
}
