import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";

interface PagesDataTypes {
    name: string;
    slug: string;
    image: StaticImageData;
}

export type { PagesDataTypes };
