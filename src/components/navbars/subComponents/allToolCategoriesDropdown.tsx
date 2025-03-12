import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ToolCategoriesSubDropdown } from "./toolCategoriesDropdownSubComponents/toolCategoriesSubDropdown"
import Link from "next/link"
import { allToolCategories } from "@/data/toolsData"

export const AllToolCategoriesDropdown = () => {
    return (
        <div className={`drop-shadow-lg bg-white w-60 absolute z-30 top-full left-0 departmentDropdown`}>
            <div className="flex flex-col">
                {allToolCategories.map((link, index: number) =>
                (
                    <div
                        key={index + 1}
                        className="w-full depBtn"
                    >
                        <Link href={link.link} className={`shadow-none border-none outline-none cursor-pointer py-4 px-4 flex items-center gap-x-3 justify-between text-sm fw_400 text-zinc-700 hover:bg-zinc-100`}>
                            <div className="flex items-center gap-x-3">
                                <FontAwesomeIcon icon={link.icon} className="text-lg" />
                                {link.label}
                            </div>
                            {link.subLinks && <FontAwesomeIcon icon={faChevronRight} className="text-xxs" />}
                        </Link>
                        <ToolCategoriesSubDropdown searchKey={link.label} indicatorPosition={index === 0 ? "top-4" : index === 1 ? "top-20" : index === 2 ? "top-36" : index === 3 ? "top-48" : "top-60"} relatedImg={link.img} />
                    </div>
                )
                )}
            </div>
        </div>
    )
}