import { blogType1 } from "@/Types/blogPostTypes";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface BlogCard2ViewProps {
    post: blogType1;
}

export const BlogCard2: React.FC<BlogCard2ViewProps> = ({
    post,
}): JSX.Element => {
    return (
        <div className="w-full">
            <div className="relative h-80 w-full overflow-hidden">
                <Image src={post.img} alt="post img" className="w-full h-full object-cover hover:scale-110 cursor-pointer duration-1000" />
            </div>
            <div className="flex items-center gap-x-4 justify-between mt-3">
                <p className="text-xxs uppercase fw_400">
                    {post.tags.map((tag) => (tag)).join(",")}
                </p>
                <p className="text-xxs uppercase fw_400">September 6, 2023</p>
            </div>
            <div>
                <h2 className="text-lg fw_600 text-zinc-900 cursor-pointer hover:text-TOOLS_PRIMARY">{post.title}</h2>
                <p className="text-zinc-500 mt-2 leading-6 text-sm">{post.description}</p>
                <Link href={"/tricart-tools/blog/" + post.link} className="border-none outline-none shadow-none mt-3 flex items-center gap-x-2 hover:gap-x-3 duration-300 fw_600 text-black text-sm w-max">
                    Read More
                    <div className="h-6 w-6 rounded-full bg-TOOLS_PRIMARY p-0 duration-300 text-white text-xs flex items-center justify-center">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </Link>
            </div>
        </div>
    )
}