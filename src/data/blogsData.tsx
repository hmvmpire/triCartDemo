import blog1 from '../static/blog1.jpg'
import blog2 from '../static/blog2.jpg'
import blog3 from '../static/blog3.jpg'
import blog4 from '../static/blog4.jpg'


import blog5 from '../static/accessories.jpeg'
import blog6 from '../static/batteries.jpeg'
import blog7 from '../static/toolBox.jpeg'
import { stringToSlug } from '@/services/generalService'

export const electronicsBlogsData = [
    {
        title: "Must-Have Accessories",
        description: "Discover essential smartphone accessories that elevate your device, from stylish cases to powerful chargers and more!",
        img: blog1,
        link: `/${stringToSlug("Must-Have Accessories")}`,
        date: "31 July 2024",
        tags: ["guides"]
    },
    {
        title: "Power Banks for Every Device",
        description: "Your essential smartphone accessory for reliable, on-the-go charging. Keep your devices powered anytime, anywhere.",
        img: blog2,
        link: `/${stringToSlug("Power Banks for Every Device")}`,
        date: "6 July 2024",
        tags: ["guides", "trends"]
    },
    {
        title: "Choose the Perfect Phone Case",
        description: "Discover stylish, protective phone cases that safeguard your smartphone while showcasing your personal style. Shop now for durability!",
        img: blog3,
        link: `/${stringToSlug("Choose the Perfect Phone Case")}`,
        date: "4 July 2024",
        tags: ["Deals", "guides"]
    },
    {
        title: "Boost Your Battery Life",
        description: "Enhance your smartphone's battery life with top-notch accessories. Stay powered all day, every day.",
        img: blog4,
        link: `/${stringToSlug("Boost Your Battery Life")}`,
        date: "8 July 2024",
        tags: ["guides"]
    },

]




export const powerToolsBlogs = [
    {
        title: "Must-Have Power Tool Accessories",
        description: "Explore essential power tool accessories that enhance your toolkit, from precision drill bits to durable saw blades and more!",
        img: blog5,
        link: `/${stringToSlug("Must-Have Power Tool Accessories")}`,
        date: "31 July 2024",
        tags: ["guides"]
    },
    {
        title: "Best Portable Power Banks for Cordless Tools",
        description: "Your must-have power accessory for keeping cordless tools charged and ready on the go. Stay powered wherever your work takes you.",
        img: blog6,
        link: `/${stringToSlug("Best Portable Power Banks for Cordless Tools")}`,
        date: "6 July 2024",
        tags: ["guides", "trends"]
    },
    {
        title: "How to Choose the Right Tool Box",
        description: "Find the perfect tool box to organize and protect your power tools. Choose from durable, heavy-duty options built for professionals.",
        img: blog7,
        link: `/${stringToSlug("How to Choose the Right Tool Box")}`,
        date: "4 July 2024",
        tags: ["Deals", "guides"]
    },
]
