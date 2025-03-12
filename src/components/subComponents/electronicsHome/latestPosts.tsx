import { electronicsBlogsData } from "@/data/blogsData"
import { CompHeading2 } from "../../shared/CompHeading2"
import { BlogCard } from "../../productCards/blogCard"

export const LatestPosts = () => {
    return (
        <div className="container1" id="blogs1">
            <CompHeading2 title="Latest Posts" rightContent={null} justify="justify-start" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 md:mt-8 gap-y-6 sm:gap-y-4 lg:gap-y-0 sm:gap-x-4">
                {electronicsBlogsData.map((item, index) => (
                    <BlogCard key={index + 1} post={item} />
                ))}
            </div>

        </div>
    )
}