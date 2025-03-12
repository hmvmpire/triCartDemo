import { powerToolsBlogs } from "@/data/blogsData"
import { BlogCard2 } from "@/components/productCards/blogCard2"
import { CompHeading2 } from "@/components/shared/CompHeading2"

export const LatestPosts = () => {
    return (
        <div className="container1">
            <div className="py-16 border-b">
                <CompHeading2 title="Latest Posts" rightContent={null} justify="justify-start" headingSize="text-2xl" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-8 gap-y-6 sm:gap-y-4 lg:gap-y-0 sm:gap-x-4">
                    {powerToolsBlogs.map((item, ind) => (
                        <BlogCard2 key={ind + 1} post={item} />
                    ))}
                </div>
            </div>

        </div>
    )
}