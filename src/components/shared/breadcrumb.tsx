import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

interface BreadcrumbType {
    name: string | JSX.Element,
    link: string
}
interface BreadcrumbProps {
    breadcrumbData: BreadcrumbType[];
    hoverColor?: string
    linkColor?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    breadcrumbData, hoverColor, linkColor
}): JSX.Element => {

    return (
        <div className="flex items-center gap-x-2">
            {breadcrumbData.map((item, index) => (
                <div key={index + 1} className="flex items-center gap-x-2 text-xs fw_600">
                    {index + 1 !== breadcrumbData.length ? <Link href={item.link} className={`text-xs ${linkColor ? linkColor : "text-zinc-800"} ${hoverColor ? hoverColor : "hover:text-blue-700"} border-none outline-none shadow-none`}>{item.name}</Link> : <p className="text-xs text-zinc-400">{item.name}</p>}
                    {index + 1 !== breadcrumbData.length && <FontAwesomeIcon icon={faChevronRight} className={linkColor? linkColor : "text-zinc-800"} />}
                </div>
            ))}
        </div>
    )
}