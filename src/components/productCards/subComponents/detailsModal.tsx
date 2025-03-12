import { ModalPopup } from "@/components/shared/ModalPopup";
import { QuantityHandler } from "@/components/shared/quantityHandler";
import { CustomRating } from "@/components/shared/rating";
import { useAddToCartWithQty } from "@/redux/cart/cartHooks";
import { productType1, productType2 } from "@/Types/productPropsTypes";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";

interface DetailsModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  product: productType1 | productType2;
}

export const DetailsModal: FC<DetailsModalProps> = ({
  show,
  setShow,
  product,
}): JSX.Element => {
  const matches = useMediaQuery("(max-width:1024px)");
  const matches2 = useMediaQuery("(max-width:810px)");
  const matches3 = useMediaQuery("(max-width:380px)");

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<number>(
    0
  );
  const cartAddItem = useAddToCartWithQty();

  return (
    <ModalPopup
      show={show}
      setShow={setShow}
      width={matches ? "800px" : "1000px"}
    >
      <div className="bg-white pl-5 pr-3 py-8 sm:p-8 w-full h-full relative detailModal overflow-hidden">
        <button
          onClick={() => setShow(false)}
          className="text-2xl absolute top-1 right-2"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div
          className={`grid overflow-y-auto ${matches2
            ? "grid-cols-1 overflow-y-auto gap-y-10 pr-2"
            : "grid-cols-2 gap-x-4"
            } h-full`}
        >
          <div className={`flex flex-col gap-y-3 ${matches2 ? "" : "sticky top-6 h-max"}`}>
            <div className="relative">
              {product.tag && (
                <div className="rounded-full h-5 uppercase fw_400 flex items-center justify-center px-3 bg-ELECTRONICS_PRIMARY-HOVER text-white z-30 text-xxs absolute top-2 left-2">
                  {product.tag}
                </div>
              )}
              <Image
                src={product.images[selectedImage]}
                alt="selectedImage"
                className={`w-full ${matches2 ? "h-72 sm:h-96" : "h-80 lg:h-96"} object-contain rounded-lg`}
              />
            </div>
            <div className="flex items-center gap-x-2 overflow-x-auto">
              {product.images &&
                product.images.map((data: any, index: number) => (
                  <div
                    key={index + 1}
                    onClick={() => setSelectedImage(index)}
                    className={`${selectedImage === index
                      ? "border-2 border-black"
                      : "border"
                      } rounded-md h-20 w-20 cursor-pointer overflow-hidden`}
                  >
                    <Image
                      src={data}
                      alt="thumbnail"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div
            className={`${matches2 ? "" : "sticky top-6 h-max overflow-y-auto h-full simpleScroll pr-2"
              }`}
          >
            <h1 className="fw_700 text-black text-2xl sm:text-3xl lg:w-2/3">
              {product.label}
            </h1>
            <div className="flex items-center gap-x-2 sm:gap-x-3 mt-3">
              <CustomRating rating={3.5} color="text-ELECTRONICS_PRIMARY-HOVER" />
              <p className="text-xxs sm:text-xs text-zinc-600">3 Customer Reviews</p> |{" "}
              <p className="text-xxs sm:text-xs text-zinc-600">Add a review</p>
            </div>
            <p className="text-2xl fw_600 text-black mt-3">{product.price}</p>
            <p className="text-base text-zinc-500 mt-3 fw_400">
              {product.description}
            </p>
            <p className="text-xs flex items-center gap-x-1 mt-4 text-zinc-500 fw_400">
              <span className="text-black fw_600">SKU:</span>
              {product.sku}
            </p>
            <p className="text-xs flex items-center gap-x-1 mt-4 text-zinc-500 fw_400">
              <span className="text-black fw_600">Categories:</span>
              {product.categories}
            </p>
            <p className="text-xs flex items-center gap-x-1 mt-4 text-zinc-500 fw_400">
              <span className="text-black fw_600">Colors:</span>
              {product.colors.map((color) => color).join(", ")}
            </p>
            <div
              className={`border-t border-b py-5 flex items-center ${matches3 ? "gap-x-2" : "gap-x-4"
                } mt-8`}
            >
              <QuantityHandler
                quantity={quantity}
                setQuantity={setQuantity}
                size={matches3 ? "8" : "10"}
              />
              <button onClick={() => cartAddItem({ ...product, qty: quantity })} className="fw_600 text-sm text-white bg-zinc-800 duration-300 hover:bg-blue-800 w-44 h-10 flex items-center justify-center gap-x-2">
                <FontAwesomeIcon icon={faBagShopping} />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalPopup>
  );
};
