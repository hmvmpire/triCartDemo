import { productType1 } from "@/Types/productPropsTypes";
import React, { FC } from "react";
import { ImagesCarousel } from "./subComponents/imagesCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { DetailsModal } from "./subComponents/detailsModal";
import { CustomRating } from "../shared/rating";
import Link from "next/link";
import { useCart, useCartAddItem } from "@/redux/cart/cartHooks";

interface ProductCard1Props {
  product: productType1;
}

export const ProductCard1: FC<ProductCard1Props> = ({
  product,
}): JSX.Element => {
  const [show, setShow] = React.useState(false);
  const cartAddItem = useCartAddItem();

  return (
    <div className="bg-white rounded-lg p-3 relative group">
      {product.tag && (
        <div className="rounded-full h-5 uppercase fw_400 flex items-center justify-center px-3 bg-ELECTRONICS_PRIMARY-HOVER text-white z-30 text-xxs absolute top-4 left-4">
          {product.tag}
        </div>
      )}
      <div className="absolute top-4 right-4 z-0 duration-300 scale-0 group-hover:scale-100 group-hover:z-30 flex flex-col gap-y-3">
        <button
          onClick={() => cartAddItem(product)}
          title="Add to cart"
          className="drop-shadow-sm bg-ELECTRONICS_PRIMARY text-white hover:bg-ELECTRONICS_PRIMARY-HOVER duration-500 h-10 w-10 rounded-full flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faBagShopping} />
        </button>
        <button
          title="Add to wishlist"
          className="drop-shadow-sm bg-ELECTRONICS_PRIMARY text-white hover:bg-ELECTRONICS_PRIMARY-HOVER duration-500 h-10 w-10 rounded-full flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button
          onClick={() => setShow(true)}
          title="Quick View"
          className="drop-shadow-sm bg-ELECTRONICS_PRIMARY text-white hover:bg-ELECTRONICS_PRIMARY-HOVER duration-500 h-10 w-10 rounded-full flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <DetailsModal show={show} setShow={setShow} product={product} />
      <ImagesCarousel images={product.images} link={product.link} />
      <div className="mt-2 flex flex-col items-center gap-y-2 pb-6">
        <p className="text-xs text-center">{product.categories}</p>
        <Link href={`/tricart-electronics/product${product.link}`} className="border-none outline-none shadow-none fw_600 text-black hover:text-ELECTRONICS_PRIMARY-HOVER text-base text-center one_lines_elipsis px-3">
          {product.label}
        </Link>
        <CustomRating rating={4.5} color="text-zinc-600" />
        <p className="text-black fw_600 text-lg text-center">
          ${product.price}
        </p>
      </div>
    </div>
  );
};
