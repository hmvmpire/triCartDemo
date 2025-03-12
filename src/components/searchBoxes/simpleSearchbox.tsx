import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface SimpleSearchboxProps {
    placeholder: string;
    height?: string
}

export const SimpleSearchbox: FC<SimpleSearchboxProps> = ({
    placeholder, height,
}): JSX.Element => {
    return (
        <div className={`flex items-center gap-x-2 w-full rounded-full ${height ? height : "h-12"} bg-zinc-100 drop-shadow-sm overflow-hidden pl-4 pr-4`}>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full h-full outline-none shadow-none border-none bg-zinc-100 text-sm"
            />
            <FontAwesomeIcon icon={faSearch} />
        </div>
    );
};
