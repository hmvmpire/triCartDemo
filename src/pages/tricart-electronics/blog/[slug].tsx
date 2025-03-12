import React from "react";
import { MainLayout } from "@/components/shared/MainLayout";
import BlogDetailsMain from "@/components/subComponents/blog/blogDetailsMain";

const BlogDetailsPage: React.FC = () => {
    return (
        <MainLayout>
            <BlogDetailsMain />
        </MainLayout>
    );
};

export default BlogDetailsPage;