import { stringToSlug } from '@/services/generalService'
import menFashion from '../static/cardDummyimg1.jpeg'
import womenFashion from '../static/cardDummyimg1.jpeg'
import kidsFashion from '../static/cardDummyimg1.jpeg'
import trendsFashion from '../static/cardDummyimg1.jpeg'
import jacket from '../static/cardDummyimg1.jpeg'
import maxi from '../static/cardDummyimg1.jpeg'
import sneakers from '../static/cardDummyimg1.jpeg'
import scarf from '../static/cardDummyimg1.jpeg'
import suit from '../static/cardDummyimg1.jpeg'
import handbag from '../static/cardDummyimg1.jpeg'

import menShirt from '../static/cardDummyimg1.jpeg'
import menShort from '../static/cardDummyimg1.jpeg'
import menSweater from '../static/cardDummyimg1.jpeg'
import menTShirt from '../static/cardDummyimg1.jpeg'
import menUnderwear from '../static/cardDummyimg1.jpeg'
import mensJeans from '../static/cardDummyimg1.jpeg'

import womenJeans from '../static/cardDummyimg1.jpeg'
import womenTshirts from '../static/cardDummyimg1.jpeg'
import lingrie from '../static/cardDummyimg1.jpeg'
import womenshoes from '../static/cardDummyimg1.jpeg'
import highHeels from '../static/cardDummyimg1.jpeg'
import floralDress from '../static/cardDummyimg1.jpeg'
import woolCoat from '../static/cardDummyimg1.jpeg'

import kidsHoodie from '../static/cardDummyimg1.jpeg'
import kidsJeans from '../static/cardDummyimg1.jpeg'
import kidsSandals from '../static/cardDummyimg1.jpeg'
import kidsShoes from '../static/cardDummyimg1.jpeg'
import kidsShorts from '../static/cardDummyimg1.jpeg'
import kidsSneaker from '../static/cardDummyimg1.jpeg'
import winterCoat from '../static/cardDummyimg1.jpeg'
import graphicT from '../static/cardDummyimg1.jpeg'
import streetwearHoodie from '../static/cardDummyimg1.jpeg'


export const fashionCategoriesData = [
    {
        label: "Home",
        link: "/tricart-fashion",
    },
    {
        label: "Men",
        link: "/tricart-fashion/category/men-fashion",
        img: menFashion,
        description: "Men's fashion blends timeless elegance with contemporary style, offering a range of looks from casual to formal. It emphasizes quality tailoring, versatile wardrobes, and attention to detail. Key pieces include well-fitted suits, stylish jackets, crisp shirts, and casual essentials like denim and sneakers. Accessories such as watches, belts, and shoes complete the look. Overall, men's fashion is about expressing personal style while maintaining sophistication and comfort.",
        products: [
            {
                link: `/${stringToSlug("Men's Leather Jacket")}`,
                sku: "123456789",
                colors: ["Black", "Brown", "Navy", "Olive"],
                tag: "Hot",
                images: [jacket, jacket, jacket, jacket],
                img: jacket,
                label: "Men's Leather Jacket",
                categories: "Men's Clothing, Outerwear",
                rating: 4.8,
                price: "$199.00 – $249.00",
                description: "Premium quality leather jacket with a classic design for timeless style."
            },
            {
                link: `/${stringToSlug("Men's Slim Fit Shirt")}`,
                sku: "123456790",
                colors: ["White", "Blue", "Gray"],
                tag: "New",
                images: [menShirt, menShirt, menShirt, menShirt],
                img: menShirt,
                label: "Men's Slim Fit Shirt",
                categories: "Men's Clothing, Shirts",
                rating: 4.7,
                price: "$49.00 – $59.00",
                description: "A slim-fit shirt for a modern and professional look."
            },
            {
                link: `/${stringToSlug("Men's Casual T-Shirt")}`,
                sku: "123456791",
                colors: ["Black", "White", "Gray"],
                tag: "Sale",
                images: [menTShirt, menTShirt, menTShirt, menTShirt],
                img: menTShirt,
                label: "Men's Casual T-Shirt",
                categories: "Men's Clothing, T-Shirts",
                rating: 4.6,
                price: "$19.00 – $29.00",
                description: "A comfortable and stylish casual T-shirt for everyday wear."
            },
            {
                link: `/${stringToSlug("Men's Slim Fit Jeans")}`,
                sku: "123456792",
                colors: ["Blue", "Black"],
                tag: "Hot",
                images: [mensJeans, mensJeans, mensJeans, mensJeans],
                img: mensJeans,
                label: "Men's Slim Fit Jeans",
                categories: "Men's Clothing, Jeans",
                rating: 4.5,
                price: "$59.00 – $69.00",
                description: "Slim-fit jeans for a sleek and modern look."
            },
            {
                link: `/${stringToSlug("Men's Formal Suit")}`,
                sku: "123456793",
                colors: ["Black", "Navy", "Gray"],
                tag: "New",
                images: [suit, suit, suit, suit],
                img: suit,
                label: "Men's Formal Suit",
                categories: "Men's Clothing, Suits",
                rating: 4.8,
                price: "$299.00 – $349.00",
                description: "A classic formal suit for special occasions."
            },
            {
                link: `/${stringToSlug("Men's Wool Sweater")}`,
                sku: "123456794",
                colors: ["Gray", "Navy", "Burgundy"],
                tag: "Sale",
                images: [menSweater, menSweater, menSweater, menSweater],
                img: menSweater,
                label: "Men's Wool Sweater",
                categories: "Men's Clothing, Sweaters",
                rating: 4.7,
                price: "$79.00 – $89.00",
                description: "A warm and stylish wool sweater for winter."
            },
            {
                link: `/${stringToSlug("Men's Activewear Shorts")}`,
                sku: "123456795",
                colors: ["Black", "Gray", "Blue"],
                tag: "Hot",
                images: [menShort, menShort, menShort, menShort],
                img: menShort,
                label: "Men's Activewear Shorts",
                categories: "Men's Clothing, Activewear",
                rating: 4.6,
                price: "$29.00 – $39.00",
                description: "Comfortable and breathable activewear shorts for workouts."
            },
            {
                link: `/${stringToSlug("Men's Cotton Underwear")}`,
                sku: "123456796",
                colors: ["White", "Black", "Gray"],
                tag: "New",
                images: [menUnderwear, menUnderwear, menUnderwear, menUnderwear],
                img: menUnderwear,
                label: "Men's Cotton Underwear",
                categories: "Men's Clothing, Underwear",
                rating: 4.5,
                price: "$9.00 – $12.00",
                description: "Soft and comfortable cotton underwear for everyday wear."
            }
        ],
        subLinks: [
            {
                categoryName: "Clothing",
                links: [
                    { label: "Shirts", link: "/tricart-fashion/category/men-shirts" },
                    { label: "T-Shirts", link: "/tricart-fashion/category/men-t-shirts" },
                    { label: "Jeans", link: "/tricart-fashion/category/men-jeans" },
                    { label: "Suits", link: "/tricart-fashion/category/men-suits" },
                    { label: "Jackets", link: "/tricart-fashion/category/men-jackets" },
                    { label: "Sweaters", link: "/tricart-fashion/category/men-sweaters" },
                    { label: "Shorts", link: "/tricart-fashion/category/men-shorts" },
                    { label: "Activewear", link: "/tricart-fashion/category/men-activewear" },
                    { label: "Underwear", link: "/tricart-fashion/category/men-underwear" },
                ],
            },
            {
                categoryName: "Shoes",
                links: [
                    { label: "Sneakers", link: "/tricart-fashion/category/men-sneakers" },
                    { label: "Boots", link: "/tricart-fashion/category/men-boots" },
                    { label: "Loafers", link: "/tricart-fashion/category/men-loafers" },
                    { label: "Sandals", link: "/tricart-fashion/category/men-sandals" },
                    { label: "Dress Shoes", link: "/tricart-fashion/category/men-dress-shoes" },
                    { label: "Running Shoes", link: "/tricart-fashion/category/men-running-shoes" },
                    { label: "Casual Shoes", link: "/tricart-fashion/category/men-casual-shoes" },
                    { label: "Slip-Ons", link: "/tricart-fashion/category/men-slip-ons" },
                    { label: "Hiking Shoes", link: "/tricart-fashion/category/men-hiking-shoes" },
                ],
            },
        ],
    },
    {
        label: "Women",
        link: "/tricart-fashion/category/women-fashion",
        img: womenFashion,
        description: "Women's fashion combines creativity and practicality, offering a wide array of styles from chic to casual. It focuses on elegant silhouettes, bold prints, and versatile pieces like dresses, blouses, and tailored pants. Layering with jackets, scarves, and accessories adds flair to any outfit. Footwear, handbags, and jewelry are key to elevating a look. Ultimately, women's fashion is about embracing individuality while staying timeless and stylish.",
        products: [
            {
                link: `/${stringToSlug("Women's Floral Maxi Dress")}`,
                sku: "123456789",
                colors: ["Red", "White", "Pink", "Blue"],
                tag: "New",
                images: [maxi, maxi, maxi, maxi],
                img: maxi,
                label: "Women's Floral Maxi Dress",
                categories: "Women's Clothing, Dresses",
                rating: 4.7,
                price: "$89.00 – $99.00",
                description: "Elegant floral-print maxi dress perfect for summer occasions."
            },
            {
                link: `/${stringToSlug("Women's Floral Dress")}`,
                sku: "123456798",
                colors: ["Red", "Blue", "Yellow"],
                tag: "New",
                images: [floralDress, floralDress, floralDress, floralDress],
                img: floralDress,
                label: "Women's Floral Dress",
                categories: "Women's Clothing, Dresses",
                rating: 4.7,
                price: "$59.00 – $69.00",
                description: "A beautiful floral dress for casual or formal occasions."
            },
            {
                link: `/${stringToSlug("Women's Casual T-Shirt")}`,
                sku: "123456799",
                colors: ["Black", "White", "Gray"],
                tag: "Sale",
                images: [womenTshirts, womenTshirts, womenTshirts, womenTshirts],
                img: womenTshirts,
                label: "Women's Casual T-Shirt",
                categories: "Women's Clothing, Tops",
                rating: 4.6,
                price: "$19.00 – $29.00",
                description: "A comfortable and stylish T-shirt for everyday wear."
            },
            {
                link: `/${stringToSlug("Designer Silk Scarf")}`,
                sku: "123456789",
                colors: ["Multicolor", "Gold", "Burgundy", "Emerald"],
                tag: "Sale",
                images: [scarf, scarf, scarf, scarf],
                img: scarf,
                label: "Designer Silk Scarf",
                categories: "Women's Accessories",
                rating: 4.5,
                price: "$49.00 – $69.00",
                description: "Luxury silk scarf with intricate patterns for a sophisticated look."
            },
            {
                link: `/${stringToSlug("Women's Skinny Jeans")}`,
                sku: "123456800",
                colors: ["Blue", "Black"],
                tag: "Hot",
                images: [womenJeans, womenJeans, womenJeans, womenJeans],
                img: womenJeans,
                label: "Women's Skinny Jeans",
                categories: "Women's Clothing, Jeans",
                rating: 4.5,
                price: "$59.00 – $69.00",
                description: "Skinny-fit jeans for a sleek and modern look."
            },
            {
                link: `/${stringToSlug("Women's Wool Coat")}`,
                sku: "123456801",
                colors: ["Black", "Gray", "Beige"],
                tag: "New",
                images: [woolCoat, woolCoat, woolCoat, woolCoat],
                img: woolCoat,
                label: "Women's Wool Coat",
                categories: "Women's Clothing, Coats",
                rating: 4.8,
                price: "$199.00 – $249.00",
                description: "A warm and stylish wool coat for winter."
            },
            {
                link: `/${stringToSlug("Women's Lace Lingerie Set")}`,
                sku: "123456802",
                colors: ["Black", "White", "Pink"],
                tag: "Sale",
                images: [lingrie, lingrie, lingrie, lingrie],
                img: lingrie,
                label: "Women's Lace Lingerie Set",
                categories: "Women's Clothing, Lingerie",
                rating: 4.7,
                price: "$49.00 – $59.00",
                description: "A luxurious lace lingerie set for a special occasion."
            },
            {
                link: `/${stringToSlug("Women's Running Shoes")}`,
                sku: "123456803",
                colors: ["Black", "White", "Pink"],
                tag: "Hot",
                images: [womenshoes, womenshoes, womenshoes, womenshoes],
                img: womenshoes,
                label: "Women's Running Shoes",
                categories: "Women's Shoes, Running Shoes",
                rating: 4.6,
                price: "$79.00 – $89.00",
                description: "Comfortable and durable running shoes for women."
            },
            {
                link: `/${stringToSlug("Women's High Heels")}`,
                sku: "123456804",
                colors: ["Black", "Red", "Nude"],
                tag: "New",
                images: [highHeels, highHeels, highHeels, highHeels],
                img: highHeels,
                label: "Women's High Heels",
                categories: "Women's Shoes, Heels",
                rating: 4.5,
                price: "$99.00 – $129.00",
                description: "Elegant high heels for formal or casual occasions."
            },
            {
                link: `/${stringToSlug("Women's Designer Handbag")}`,
                sku: "123456789",
                colors: ["Beige", "Black", "Red", "Gold"],
                tag: "New",
                images: [handbag, handbag, handbag, handbag],
                img: handbag,
                label: "Women's Designer Handbag",
                categories: "Women's Accessories, Luxury",
                rating: 4.7,
                price: "$199.00 – $299.00",
                description: "Chic designer handbag with premium leather and gold accents."
            },
        ],
        subLinks: [
            {
                categoryName: "Clothing",
                links: [
                    { label: "Dresses", link: "/tricart-fashion/category/women-dresses" },
                    { label: "Tops", link: "/tricart-fashion/category/women-tops" },
                    { label: "Jeans", link: "/tricart-fashion/category/women-jeans" },
                    { label: "Skirts", link: "/tricart-fashion/category/women-skirts" },
                    { label: "Jackets", link: "/tricart-fashion/category/women-jackets" },
                    { label: "Sweaters", link: "/tricart-fashion/category/women-sweaters" },
                    { label: "Activewear", link: "/tricart-fashion/category/women-activewear" },
                    { label: "Lingerie", link: "/tricart-fashion/category/women-lingerie" },
                    { label: "Coats", link: "/tricart-fashion/category/women-coats" },
                ],
            },
            {
                categoryName: "Shoes",
                links: [
                    { label: "Heels", link: "/tricart-fashion/category/women-heels" },
                    { label: "Flats", link: "/tricart-fashion/category/women-flats" },
                    { label: "Sneakers", link: "/tricart-fashion/category/women-sneakers" },
                    { label: "Boots", link: "/tricart-fashion/category/women-boots" },
                    { label: "Sandals", link: "/tricart-fashion/category/women-sandals" },
                    { label: "Wedges", link: "/tricart-fashion/category/women-wedges" },
                    { label: "Loafers", link: "/tricart-fashion/category/women-loafers" },
                    { label: "Running Shoes", link: "/tricart-fashion/category/women-running-shoes" },
                    { label: "Casual Shoes", link: "/tricart-fashion/category/women-casual-shoes" },
                ],
            },
        ],
    },
    {
        label: "Kid",
        link: "/tricart-fashion/category/kids-fashion",
        img: kidsFashion,
        description: "Kids' fashion is all about comfort, fun, and self-expression through playful colors and patterns. It blends practicality with trendy elements, featuring items like graphic tees, colorful dresses, and comfy sneakers. Clothing is designed for ease of movement, with soft fabrics and adjustable fits. Accessories like hats, backpacks, and shoes add personality to outfits. Overall, kids' fashion is about combining style with functionality, allowing children to feel confident and active.",
        products: [
            {
                link: `/${stringToSlug("Kid's Hooded Jacket")}`,
                sku: "123456805",
                colors: ["Blue", "Red", "Gray"],
                tag: "Hot",
                images: [kidsHoodie, kidsHoodie, kidsHoodie, kidsHoodie],
                img: kidsHoodie,
                label: "Kid's Hooded Jacket",
                categories: "Kid's Clothing, Outerwear",
                rating: 4.8,
                price: "$49.00 – $59.00",
                description: "A warm and stylish hooded jacket for kids."
            },
            {
                link: `/${stringToSlug("Kid's Graphic T-Shirt")}`,
                sku: "123456806",
                colors: ["Black", "White", "Blue"],
                tag: "New",
                images: [graphicT, graphicT, graphicT, graphicT],
                img: graphicT,
                label: "Kid's Graphic T-Shirt",
                categories: "Kid's Clothing, Tops",
                rating: 4.7,
                price: "$14.00 – $19.00",
                description: "A fun and colorful graphic T-shirt for kids."
            },
            {
                link: `/${stringToSlug("Kid's Denim Jeans")}`,
                sku: "123456807",
                colors: ["Blue", "Black"],
                tag: "Sale",
                images: [kidsJeans, kidsJeans, kidsJeans, kidsJeans],
                img: kidsJeans,
                label: "Kid's Denim Jeans",
                categories: "Kid's Clothing, Jeans",
                rating: 4.6,
                price: "$29.00 – $39.00",
                description: "Durable and comfortable denim jeans for kids."
            },
            {
                link: `/${stringToSlug("Kid's Winter Coat")}`,
                sku: "123456808",
                colors: ["Red", "Blue", "Black"],
                tag: "Hot",
                images: [winterCoat, winterCoat, winterCoat, winterCoat],
                img: winterCoat,
                label: "Kid's Winter Coat",
                categories: "Kid's Clothing, Coats",
                rating: 4.5,
                price: "$59.00 – $69.00",
                description: "A warm and cozy winter coat for kids."
            },
            {
                link: `/${stringToSlug("Kid's Sneakers")}`,
                sku: "123456809",
                colors: ["Black", "White", "Blue"],
                tag: "New",
                images: [kidsSneaker, kidsSneaker, kidsSneaker, kidsSneaker],
                img: kidsSneaker,
                label: "Kid's Sneakers",
                categories: "Kid's Shoes, Sneakers",
                rating: 4.7,
                price: "$39.00 – $49.00",
                description: "Comfortable and stylish sneakers for kids."
            },
            {
                link: `/${stringToSlug("Kid's Sandals")}`,
                sku: "123456810",
                colors: ["Black", "Blue", "Pink"],
                tag: "Sale",
                images: [kidsSandals, kidsSandals, kidsSandals, kidsSandals],
                img: kidsSandals,
                label: "Kid's Sandals",
                categories: "Kid's Shoes, Sandals",
                rating: 4.6,
                price: "$19.00 – $29.00",
                description: "Lightweight and breathable sandals for kids."
            },
            {
                link: `/${stringToSlug("Kid's Activewear Shorts")}`,
                sku: "123456811",
                colors: ["Black", "Gray", "Blue"],
                tag: "Hot",
                images: [kidsShorts, kidsShorts, kidsShorts, kidsShorts],
                img: kidsShorts,
                label: "Kid's Activewear Shorts",
                categories: "Kid's Clothing, Activewear",
                rating: 4.5,
                price: "$14.00 – $19.00",
                description: "Comfortable and durable activewear shorts for kids."
            },
            {
                link: `/${stringToSlug("Kid's Casual Shoes")}`,
                sku: "123456812",
                colors: ["Black", "White", "Gray"],
                tag: "New",
                images: [kidsShoes, kidsShoes, kidsShoes, kidsShoes],
                img: kidsShoes,
                label: "Kid's Casual Shoes",
                categories: "Kid's Shoes, Casual Shoes",
                rating: 4.4,
                price: "$29.00 – $39.00",
                description: "Stylish and comfortable casual shoes for kids."
            }
        ],
        subLinks: [
            {
                categoryName: "Clothing",
                links: [
                    { label: "T-Shirts", link: "/tricart-fashion/category/kids-t-shirts" },
                    { label: "Jeans", link: "/tricart-fashion/category/kids-jeans" },
                    { label: "Dresses", link: "/tricart-fashion/category/kids-dresses" },
                    { label: "Jackets", link: "/tricart-fashion/category/kids-jackets" },
                    { label: "Sweaters", link: "/tricart-fashion/category/kids-sweaters" },
                    { label: "Shorts", link: "/tricart-fashion/category/kids-shorts" },
                    { label: "Activewear", link: "/tricart-fashion/category/kids-activewear" },
                    { label: "School Uniforms", link: "/tricart-fashion/category/kids-school-uniforms" },
                    { label: "Sleepwear", link: "/tricart-fashion/category/kids-sleepwear" },
                ],
            },
            {
                categoryName: "Shoes",
                links: [
                    { label: "Sneakers", link: "/tricart-fashion/category/kids-sneakers" },
                    { label: "Sandals", link: "/tricart-fashion/category/kids-sandals" },
                    { label: "Boots", link: "/tricart-fashion/category/kids-boots" },
                    { label: "School Shoes", link: "/tricart-fashion/category/kids-school-shoes" },
                    { label: "Casual Shoes", link: "/tricart-fashion/category/kids-casual-shoes" },
                ],
            },
        ],
    },
    {
        label: "Trends",
        link: "/tricart-fashion/category/trend",
        img: trendsFashion,
        description: "Trends in fashion constantly evolve, reflecting seasonal changes and cultural influences. Each season brings new colors, patterns, and styles, such as lighter fabrics and vibrant hues in spring, or cozy layers and rich tones in fall. Popular trends often embrace bold statements, from oversized silhouettes to minimalist designs. Social media and influencers play a major role in shaping what's in vogue. Ultimately, trends offer a way to refresh your wardrobe and stay connected to the ever-changing fashion landscape.",
        products: [
            {
                link: `/${stringToSlug("Spring Floral Dress")}`,
                sku: "123456813",
                colors: ["Pink", "Yellow", "Blue"],
                tag: "New",
                images: [floralDress, floralDress, floralDress, floralDress],
                img: floralDress,
                label: "Spring Floral Dress",
                categories: "Spring Collection, Dresses",
                rating: 4.5,
                price: "$49.00 – $59.00",
                description: "A vibrant floral dress perfect for spring outings."
            },
            {
                link: `/${stringToSlug("Summer Striped Shirt")}`,
                sku: "123456814",
                colors: ["White", "Navy", "Red"],
                tag: "Hot",
                images: [menTShirt, menTShirt, menTShirt, menTShirt],
                img: menTShirt,
                label: "Summer Striped Shirt",
                categories: "Summer Collection, Shirts",
                rating: 4.3,
                price: "$39.00 – $49.00",
                description: "Light and breezy striped shirt for summer."
            },
            {
                link: `/${stringToSlug("Fall Leather Jacket")}`,
                sku: "123456815",
                colors: ["Black", "Brown", "Olive"],
                tag: "Trending",
                images: [jacket, jacket, jacket, jacket],
                img: jacket,
                label: "Fall Leather Jacket",
                categories: "Fall Collection, Jackets",
                rating: 4.7,
                price: "$99.00 – $129.00",
                description: "A stylish leather jacket for the fall season."
            },
            {
                link: `/${stringToSlug("Winter Wool Coat")}`,
                sku: "123456816",
                colors: ["Gray", "Black", "Beige"],
                tag: "Warm",
                images: [woolCoat, woolCoat, woolCoat, woolCoat],
                img: woolCoat,
                label: "Winter Wool Coat",
                categories: "Winter Collection, Coats",
                rating: 4.6,
                price: "$129.00 – $159.00",
                description: "A cozy wool coat to keep you warm in winter."
            },
            {
                link: `/${stringToSlug("Streetwear Hoodie")}`,
                sku: "123456817",
                colors: ["Black", "White", "Green"],
                tag: "Urban",
                images: [streetwearHoodie, streetwearHoodie, streetwearHoodie, streetwearHoodie],
                img: streetwearHoodie,
                label: "Streetwear Hoodie",
                categories: "Streetwear, Hoodies",
                rating: 4.4,
                price: "$59.00 – $79.00",
                description: "A trendy hoodie for urban streetwear enthusiasts."
            },
            {
                link: `/${stringToSlug("Minimalist T-Shirt")}`,
                sku: "123456818",
                colors: ["White", "Black", "Gray"],
                tag: "Simple",
                images: [womenTshirts, womenTshirts, womenTshirts, womenTshirts],
                img: womenTshirts,
                label: "Minimalist T-Shirt",
                categories: "Minimalist, T-Shirts",
                rating: 4.2,
                price: "$19.00 – $29.00",
                description: "A simple and elegant minimalist t-shirt."
            },
            {
                link: `/${stringToSlug("Bohemian Maxi Dress")}`,
                sku: "123456819",
                colors: ["Red", "Blue", "Green"],
                tag: "Boho",
                images: [maxi, maxi, maxi, maxi],
                img: maxi,
                label: "Bohemian Maxi Dress",
                categories: "Bohemian, Dresses",
                rating: 4.5,
                price: "$69.00 – $89.00",
                description: "A flowy bohemian maxi dress for a free-spirited look."
            },
            {
                link: `/${stringToSlug("Athleisure Joggers")}`,
                sku: "123456820",
                colors: ["Black", "Gray", "Navy"],
                tag: "Active",
                images: [kidsShoes, kidsShoes, kidsShoes, kidsShoes],
                img: kidsShoes,
                label: "Athleisure Joggers",
                categories: "Athleisure, Pants",
                rating: 4.3,
                price: "$49.00 – $69.00",
                description: "Comfortable and stylish joggers for an active lifestyle."
            }
        ],
        subLinks: [
            {
                categoryName: "Seasonal Trends",
                links: [
                    { label: "Spring Collection", link: "/tricart-fashion/category/spring" },
                    { label: "Summer Collection", link: "/tricart-fashion/category/summer" },
                    { label: "Fall Collection", link: "/tricart-fashion/category/fall" },
                    { label: "Winter Collection", link: "/tricart-fashion/category/winter" },
                ],
            },
            {
                categoryName: "Popular Styles",
                links: [
                    { label: "Streetwear", link: "/tricart-fashion/category/streetwear" },
                    { label: "Minimalist", link: "/tricart-fashion/category/minimalist" },
                    { label: "Bohemian", link: "/tricart-fashion/category/bohemian" },
                    { label: "Athleisure", link: "/tricart-fashion/category/athleisure" },
                ],
            },
        ],
    },
    {
        label: "Blog",
        link: "/",
    },
];



export const fashionCategories = [
    {
        label: "Men's Fashion",
        link: "/tricart-fashion/category/men-fashion",
        img: menFashion,
    },
    {
        label: "Women's Fashion",
        link: "/tricart-fashion/category/women-fashion",
        img: womenFashion,
    },
    {
        label: "Kid's Fashion",
        link: "/tricart-fashion/category/kids-fashion",
        img: kidsFashion,
    },
    {
        label: "Trends",
        link: "/tricart-fashion/category/trend",
        img: trendsFashion,
    },
];




export const fashionProductsData = [
    {
        link: `/${stringToSlug("Men's Leather Jacket")}`,
        sku: "123456789",
        colors: ["Black", "Brown", "Navy", "Olive"],
        tag: "Hot",
        images: [jacket, jacket, jacket, jacket],
        img: jacket,
        label: "Men's Leather Jacket",
        categories: "Men's Clothing, Outerwear",
        rating: 4.8,
        price: "$199.00 – $249.00",
        description: "Premium quality leather jacket with a classic design for timeless style."
    },
    {
        link: `/${stringToSlug("Women's Floral Maxi Dress")}`,
        sku: "123456789",
        colors: ["Red", "White", "Pink", "Blue"],
        tag: "New",
        images: [maxi, maxi, maxi, maxi],
        img: maxi,
        label: "Women's Floral Maxi Dress",
        categories: "Women's Clothing, Dresses",
        rating: 4.7,
        price: "$89.00 – $99.00",
        description: "Elegant floral-print maxi dress perfect for summer occasions."
    },
    {
        link: `/${stringToSlug("Kid's Sneakers")}`,
        sku: "123456809",
        colors: ["Black", "White", "Blue"],
        tag: "New",
        images: [sneakers, sneakers, sneakers, sneakers],
        img: sneakers,
        label: "Kid's Sneakers",
        categories: "Kid's Shoes, Sneakers",
        rating: 4.7,
        price: "$39.00 – $49.00",
        description: "Comfortable and stylish sneakers for kids."
    },
    {
        link: `/${stringToSlug("Designer Silk Scarf")}`,
        sku: "123456789",
        colors: ["Multicolor", "Gold", "Burgundy", "Emerald"],
        tag: "Sale",
        images: [scarf, scarf, scarf, scarf],
        img: scarf,
        label: "Designer Silk Scarf",
        categories: "Women's Accessories",
        rating: 4.5,
        price: "$49.00 – $69.00",
        description: "Luxury silk scarf with intricate patterns for a sophisticated look."
    },
    {
        link: `/${stringToSlug("Men's Formal Suit")}`,
        sku: "123456793",
        colors: ["Black", "Navy", "Gray"],
        tag: "New",
        images: [suit, suit, suit, suit],
        img: suit,
        label: "Men's Formal Suit",
        categories: "Men's Clothing, Suits",
        rating: 4.8,
        price: "$299.00 – $349.00",
        description: "A classic formal suit for special occasions."
    },
    {
        link: `/${stringToSlug("Women's Designer Handbag")}`,
        sku: "123456789",
        colors: ["Beige", "Black", "Red", "Gold"],
        tag: "New",
        images: [handbag, handbag, handbag, handbag],
        img: handbag,
        label: "Women's Designer Handbag",
        categories: "Women's Accessories, Luxury",
        rating: 4.7,
        price: "$199.00 – $299.00",
        description: "Chic designer handbag with premium leather and gold accents."
    },
];




