import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { productType1, productType2 } from "./productPropsTypes";
import { StaticImageData } from "next/image";

interface linkType {
  label: string;
  link: string;
  icon?: IconDefinition;
  description?: string;
  img?: StaticImageData;
  subLinks?: subLinkType1[];
  products?: productType1[] | productType2[];
}
interface subLinkType1 {
  categoryName: string;
  link?: string;
  links: subLinkType2[];
  icon?: IconDefinition;
}
interface subLinkType2 {
  label: string;
  link: string;
  icon?: IconDefinition;
}

export type { linkType, subLinkType1, subLinkType2 };
