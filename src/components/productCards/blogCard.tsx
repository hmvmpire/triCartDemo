import { blogType1 } from "@/Types/blogPostTypes";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface BlogCardViewProps {
    post: blogType1;
}

export const BlogCard: React.FC<BlogCardViewProps> = ({
    post,
}): JSX.Element => {
    return (
        <div className="w-full">
            <div className="relative rounded-lg h-52 w-full overflow-hidden">
                <div className="bg-white rounded-md flex flex-col items-center justify-center p-2 w-10 h-12 absolute top-3 left-3 z-20">
                    <p className="text-ELECTRONICS_PRIMARY-HOVER fw_600 text-xl">{moment(post.date).format("DD")}</p>
                    <p className="text-ELECTRONICS_PRIMARY-HOVER fw_400 text-xxs -mt-2">{moment(post.date).format("MMM")}</p>
                </div>
                <Image src={post.img} alt="post img" className="w-full h-full object-cover hover:scale-110 cursor-pointer duration-1000" />
            </div>
            <div className="bg-ELECTRONICS_PRIMARY text-xs uppercase rounded-full text-white px-4 h-6 flex items-center mt-4 w-max fw_400 xxsPaddingTop">
                {post.tags.map((tag) => (tag)).join(",")}
            </div>
            <div className="mt-3">
                <h2 className="text-xl fw_600 text-zinc-700 cursor-pointer hover:text-blue-700">{post.title}</h2>
                <p className="text-zinc-500 mt-2 leading-7 text-sm">{post.description}</p>
                <Link href={"/tricart-electronics/blog/" + post.link} className="border-none outline-none shadow-none text-ELECTRONICS_PRIMARY-HOVER text-sm hover:underline mt-4 fw_600">Continue Reading</Link>
                <div className="mt-4 flex items-center gap-x-2">
                    <div className="h-8 w-8 rounded-full bg-white flex items-end justify-center">
                        <FontAwesomeIcon icon={faUser} className="text-zinc-200 text-2xl" />
                    </div>
                    <p className="text-sm fw_600 text-black">Joe Doe</p>
                </div>
            </div>
        </div>
    )
}