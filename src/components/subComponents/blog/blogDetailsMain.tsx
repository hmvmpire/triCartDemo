import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTags } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { blogType1 } from "@/Types/blogPostTypes";
import { useParams } from "next/navigation";
import { electronicsBlogsData, powerToolsBlogs } from "@/data/blogsData";
import { homeDecorFeatures } from "@/data/homeDecorData";

const BlogDetailsMain: React.FC = () => {
    const [blogData, setBlogData] = useState<blogType1 | null>(null); // Use `null` as the initial value
    const params = useParams();

    useEffect(() => {
        let allBlogs = [...electronicsBlogsData, ...powerToolsBlogs, ...homeDecorFeatures]
        if (params?.slug) { // Check specifically if `params.slug` exists
            const foundCategory = allBlogs.find((item) => item.link === `/${params.slug}`);
            if (foundCategory) {
                setBlogData(foundCategory);
            }
        }
    }, [params?.slug, electronicsBlogsData, powerToolsBlogs, homeDecorFeatures]);

    return (
        <div className="bg-indigo-50 bg-opacity-70">
            {blogData &&
                <div className="container3 py-20">
                    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Blog Image */}
                        <img
                            src={blogData.img.src} // Use blogData.img.src if it's an imported image
                            alt={blogData.title}
                            className="w-full h-64 sm:h-96 object-cover"
                        />

                        {/* Blog Content */}
                        <div className="p-6 sm:p-8">
                            {/* Blog Title */}
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                {blogData.title}
                            </h1>

                            {/* Blog Metadata (Author, Date, and Tags) */}
                            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-6 space-y-2 sm:space-y-0 sm:space-x-6">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                                    <span>{blogData.date}</span>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faTags} className="mr-2" />
                                    <span>{blogData.tags.join(", ")}</span>
                                </div>
                            </div>

                            {/* Blog Description */}
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                {blogData.description}
                            </p>

                            {/* Introduction Section */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Introduction
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.
                                </p>
                            </div>

                            {/* Detailed Sections */}
                            <div className="space-y-8">
                                {/* Section 1 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        Section 1: Lorem Ipsum Dolor
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Consectetur adipiscing elit.</li>
                                        <li>Sed do eiusmod tempor incididunt.</li>
                                    </ul>
                                </div>

                                {/* Section 2 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        Section 2: Consectetur Adipiscing
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                        anim id est laborum.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Duis aute irure dolor.</li>
                                        <li>Reprehenderit in voluptate.</li>
                                        <li>Excepteur sint occaecat.</li>
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        Section 3: Excepteur Sint Occaecat
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Ut enim ad minim veniam.</li>
                                        <li>Quis nostrud exercitation.</li>
                                        <li>Duis aute irure dolor.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Conclusion Section */}
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Conclusion
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default BlogDetailsMain;