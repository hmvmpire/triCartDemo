import { CompHeading2 } from "../shared/CompHeading2"
import { TestimonialsList1 } from "./subComponents/testimonialsList1"

export const Testimonials1 = () => {
    return (
        <div className="container1">
            <CompHeading2 title="Customers Testimonials" rightContent={null} justify="justify-start" />
            <div className="mt-5 md:mt-8">
                <TestimonialsList1 responsive={{
                    superLargeDesktop: {
                        // the naming can be any, depends on you.
                        breakpoint: { max: 4000, min: 1280 },
                        items: 2,
                        slidesToSlide: 2
                    },
                    desktop: {
                        breakpoint: { max: 1280, min: 800 },
                        items: 2,
                        slidesToSlide: 2

                    },
                    tablet: {
                        breakpoint: { max: 800, min: 640 },
                        items: 1,
                        slidesToSlide: 1
                    },
                    mobile: {
                        breakpoint: { max: 640, min: 0 },
                        items: 1,
                        slidesToSlide: 1
                    },
                }} />
            </div>
        </div>
    )
}