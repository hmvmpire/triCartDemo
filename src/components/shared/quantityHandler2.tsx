import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";

interface QuantityHandler2Props {
    quantity: number;
    size?: string;
    setQuantity: (value: number) => void;
}

export const QuantityHandler2: FC<QuantityHandler2Props> = ({
    quantity,
    size,
    setQuantity,
}) => {
    return (
        <div className={`px-1 quantity_box flex items-center w-max bg-white rounded-full overflow-hidden`}>
            <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className={`h-${size ? size : "10"} w-${size ? size : "10"
                    } flex items-center justify-center font-thin`}
            >
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
                type="number"
                value={quantity}
                onChange={(e) =>
                    e.target.value.length > 0 && parseInt(e.target.value) > 0
                        ? setQuantity(parseInt(e.target.value))
                        : setQuantity(1)
                }
                min={1}
                max={1001}
                className={`w-12 h-${size ? size : "10"
                    } flex items-center justify-center text-center num_input outline-none fw_600`}
            />

            <button
                onClick={() => quantity > 0 && setQuantity(quantity + 1)}
                className={`h-${size ? size : "10"} w-${size ? size : "10"
                    } flex items-center justify-center font-thin`}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};
