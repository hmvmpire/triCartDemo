import h3Cat1 from '../static/cardDummyimg1.jpeg'
import h3Cat2 from '../static/cardDummyimg1.jpeg'
import h3Cat3 from '../static/cardDummyimg1.jpeg'
import h3Cat4 from '../static/cardDummyimg1.jpeg'
import h3Cat5 from '../static/cardDummyimg1.jpeg'
import h3Cat6 from '../static/cardDummyimg1.jpeg'
import h3Cat7 from '../static/cardDummyimg1.jpeg'

import h3Product1 from '../static/cardDummyimg1.jpeg'
import h3Product2 from '../static/cardDummyimg1.jpeg'
import h3Product3 from '../static/cardDummyimg1.jpeg'
import h3Product4 from '../static/cardDummyimg1.jpeg'

import valvetChair from '../static/cardDummyimg1.jpeg'
import modrenSofa from '../static/cardDummyimg1.jpeg'
import recliner from '../static/cardDummyimg1.jpeg'
import coffeeTable from '../static/cardDummyimg1.jpeg'
import sideTable from '../static/cardDummyimg1.jpeg'
import TVStand from '../static/cardDummyimg1.jpeg'
import ottoman from '../static/cardDummyimg1.jpeg'
import leatherSofa from '../static/cardDummyimg1.jpeg'

import modrenDining from '../static/cardDummyimg1.jpeg'
import barStools from '../static/cardDummyimg1.jpeg'
import woddenDiningChair from '../static/cardDummyimg1.jpeg'
import roundDining from '../static/cardDummyimg1.jpeg'
import ExtendableDiningTable from '../static/cardDummyimg1.jpeg'
import sideBoard from '../static/cardDummyimg1.jpeg'
import cabinet from '../static/cardDummyimg1.jpeg'
import counterStools from '../static/cardDummyimg1.jpeg'

import drawerNightstand from '../static/cardDummyimg1.jpeg'
import nightstand2 from '../static/cardDummyimg1.jpeg'
import queenBed from '../static/cardDummyimg1.jpeg'
import kingBed from '../static/cardDummyimg1.jpeg'
import woodenDresser from '../static/cardDummyimg1.jpeg'
import mirroredDresser from '../static/cardDummyimg1.jpeg'
import storageBed from '../static/cardDummyimg1.jpeg'
import headboard from '../static/cardDummyimg1.jpeg'

import woodenBookcase from '../static/cardDummyimg1.jpeg'
import modernDesk from '../static/cardDummyimg1.jpeg'
import ergonomicOfficeChair from '../static/cardDummyimg1.jpeg'
import officeChair from '../static/cardDummyimg1.jpeg'
import wallMountedShelf from '../static/cardDummyimg1.jpeg'
import fileCabinet from '../static/cardDummyimg1.jpeg'
import adjustableDesk from '../static/cardDummyimg1.jpeg'
import LShapedDesk from '../static/cardDummyimg1.jpeg'

import outdoorCoffeeTable from '../static/cardDummyimg1.jpeg'
import outdoorDiningTable from '../static/cardDummyimg1.jpeg'
import outdoorLoungeChair from '../static/cardDummyimg1.jpeg'
import outdoorPatioSofa from '../static/cardDummyimg1.jpeg'
import outdoorSofa from '../static/cardDummyimg1.jpeg'
import patioUmbrella from '../static/cardDummyimg1.jpeg'
import wickerChair from '../static/cardDummyimg1.jpeg'

import areaRug from '../static/cardDummyimg1.jpeg'
import wallArt from '../static/cardDummyimg1.jpeg'
import wallMirror from '../static/cardDummyimg1.jpeg'
import throwPillow from '../static/cardDummyimg1.jpeg'
import floatingShelves from '../static/cardDummyimg1.jpeg'
import vase from '../static/cardDummyimg1.jpeg'

import lightBulb from '../static/cardDummyimg1.jpeg'
import wallLight from '../static/cardDummyimg1.jpeg'
import floorLamp from '../static/cardDummyimg1.jpeg'
import deskLamp from '../static/cardDummyimg1.jpeg'
import pendantLight from '../static/cardDummyimg1.jpeg'
import crystalChandelier from '../static/cardDummyimg1.jpeg'
import tableLamp from '../static/cardDummyimg1.jpeg'
import LEDLight from '../static/cardDummyimg1.jpeg'



import truck from '../static/cardDummyimg1.jpeg'
import search from '../static/cardDummyimg1.jpeg'
import delivery from '../static/cardDummyimg1.jpeg'
import freeDelivery from '../static/cardDummyimg1.jpeg'
import { stringToSlug } from '@/services/generalService'

export const homeDecorCategories = [
    {
        label: "Living Room",
        link: "/tricart-home-decore/category/living-room",
        image: h3Cat2,
        products: [
            {
                link: `/${stringToSlug("Modern Upholstered Sofa")}`,
                sku: "123456789",
                colors: ["Black", "White", "Gray", "Blue"],
                tag: "Hot",
                images: [modrenSofa, modrenSofa, modrenSofa, modrenSofa],
                img: modrenSofa,
                label: "Modern Upholstered Sofa",
                categories: "Living Room, Sofas, Home Decor",
                rating: 4.5,
                price: "$499.00 – $599.00",
                description: "Enhance your living room with this modern, comfortable sofa. Perfect for relaxing after a long day."
            },
            {
                link: `/${stringToSlug("Leather Sectional Sofa")}`,
                sku: "123456790",
                colors: ["Brown", "Black"],
                tag: "New",
                images: [leatherSofa, leatherSofa, leatherSofa, leatherSofa],
                img: leatherSofa,
                label: "Leather Sectional Sofa",
                categories: "Living Room, Sofas, Home Decor",
                rating: 4.7,
                price: "$899.00 – $999.00",
                description: "A luxurious leather sectional sofa for spacious living rooms."
            },
            {
                link: `/${stringToSlug("Velvet Lounge Chair")}`,
                sku: "123456791",
                colors: ["Green", "Pink", "Blue"],
                tag: "Sale",
                images: [valvetChair, valvetChair, valvetChair, valvetChair],
                img: valvetChair,
                label: "Velvet Lounge Chair",
                categories: "Living Room, Lounge Chairs, Home Decor",
                rating: 4.6,
                price: "$299.00 – $349.00",
                description: "A stylish velvet lounge chair for a cozy living room."
            },
            {
                link: `/${stringToSlug("Ottoman with Storage")}`,
                sku: "123456792",
                colors: ["Gray", "Beige"],
                tag: "Hot",
                images: [ottoman, ottoman, ottoman, ottoman],
                img: ottoman,
                label: "Ottoman with Storage",
                categories: "Living Room, Ottomans, Home Decor",
                rating: 4.4,
                price: "$149.00 – $199.00",
                description: "A functional ottoman with hidden storage for your living room."
            },
            {
                link: `/${stringToSlug("Glass Coffee Table")}`,
                sku: "123456793",
                colors: ["Clear", "Black"],
                tag: "New",
                images: [coffeeTable, coffeeTable, coffeeTable, coffeeTable],
                img: coffeeTable,
                label: "Glass Coffee Table",
                categories: "Living Room, Coffee Tables, Home Decor",
                rating: 4.3,
                price: "$199.00 – $249.00",
                description: "A sleek glass coffee table for modern living rooms."
            },
            {
                link: `/${stringToSlug("Wooden Side Table")}`,
                sku: "123456794",
                colors: ["Brown", "White"],
                tag: "Sale",
                images: [sideTable, sideTable, sideTable, sideTable],
                img: sideTable,
                label: "Wooden Side Table",
                categories: "Living Room, Side Tables, Home Decor",
                rating: 4.5,
                price: "$99.00 – $129.00",
                description: "A rustic wooden side table for a cozy living room."
            },
            {
                link: `/${stringToSlug("TV Stand with Shelves")}`,
                sku: "123456795",
                colors: ["Black", "White"],
                tag: "Hot",
                images: [TVStand, TVStand, TVStand, TVStand],
                img: TVStand,
                label: "TV Stand with Shelves",
                categories: "Living Room, TV Stands, Home Decor",
                rating: 4.8,
                price: "$299.00 – $349.00",
                description: "A spacious TV stand with shelves for media storage."
            },
            {
                link: `/${stringToSlug("Reclining Sofa")}`,
                sku: "123456796",
                colors: ["Gray", "Blue"],
                tag: "New",
                images: [recliner, recliner, recliner, recliner],
                img: recliner,
                label: "Reclining Sofa",
                categories: "Living Room, Sofas, Home Decor",
                rating: 4.7,
                price: "$699.00 – $799.00",
                description: "A comfortable reclining sofa for ultimate relaxation."
            }
        ],
        subLinks: [
            {
                categoryName: "Seating",
                links: [
                    { label: "Sofas & Sectionals", link: "/tricart-home-decore/category/sofas-sectionals" },
                    { label: "Lounge Chairs", link: "/tricart-home-decore/category/lounge-chairs" },
                    { label: "Ottomans & Stools", link: "/tricart-home-decore/category/ottomans" },
                ],
            },
            {
                categoryName: "Tables & Storage",
                links: [
                    { label: "Coffee Tables", link: "/tricart-home-decore/category/coffee-tables" },
                    { label: "Side Tables", link: "/tricart-home-decore/category/side-tables" },
                    { label: "TV Stands & Media Consoles", link: "/tricart-home-decore/category/media-consoles" },
                ],
            },
        ],
    },
    {
        label: "Dining Room",
        link: "/tricart-home-decore/category/dining-room",
        image: h3Cat3,
        products: [
            {
                link: `/${stringToSlug("Elegant Dining Table Set")}`,
                sku: "123456789",
                colors: ["Brown", "White", "Black"],
                tag: "Hot",
                images: [h3Cat3, h3Cat3, h3Cat3, h3Cat3],
                img: h3Cat3,
                label: "Elegant Dining Table Set",
                categories: "Dining Room, Tables, Home Decor",
                rating: 4.40,
                price: "$699.00 – $799.00",
                description: "A stylish dining table set that adds elegance to your dining space. Perfect for family dinners."
            },
            {
                link: `/${stringToSlug("Modern Dining Table")}`,
                sku: "123456797",
                colors: ["White", "Black"],
                tag: "Hot",
                images: [modrenDining, modrenDining, modrenDining, modrenDining],
                img: modrenDining,
                label: "Modern Dining Table",
                categories: "Dining Room, Dining Tables, Home Decor",
                rating: 4.6,
                price: "$499.00 – $599.00",
                description: "A sleek modern dining table for family gatherings."
            },
            {
                link: `/${stringToSlug("Wooden Dining Chairs")}`,
                sku: "123456798",
                colors: ["Brown", "Beige"],
                tag: "New",
                images: [woddenDiningChair, woddenDiningChair, woddenDiningChair, woddenDiningChair],
                img: woddenDiningChair,
                label: "Wooden Dining Chairs",
                categories: "Dining Room, Dining Chairs, Home Decor",
                rating: 4.5,
                price: "$99.00 – $129.00",
                description: "Comfortable wooden dining chairs for your dining room."
            },
            {
                link: `/${stringToSlug("Bar Stool Set")}`,
                sku: "123456799",
                colors: ["Black", "Gray"],
                tag: "Sale",
                images: [barStools, barStools, barStools, barStools],
                img: barStools,
                label: "Bar Stool Set",
                categories: "Dining Room, Bar Stools, Home Decor",
                rating: 4.4,
                price: "$199.00 – $249.00",
                description: "A set of stylish bar stools for your kitchen or bar."
            },
            {
                link: `/${stringToSlug("Buffet Cabinet")}`,
                sku: "123456800",
                colors: ["White", "Brown"],
                tag: "Hot",
                images: [cabinet, cabinet, cabinet, cabinet],
                img: cabinet,
                label: "Buffet Cabinet",
                categories: "Dining Room, Buffets, Home Decor",
                rating: 4.7,
                price: "$399.00 – $499.00",
                description: "A functional buffet cabinet for dining room storage."
            },
            {
                link: `/${stringToSlug("Round Dining Table")}`,
                sku: "123456801",
                colors: ["Gray", "Black"],
                tag: "New",
                images: [roundDining, roundDining, roundDining, roundDining],
                img: roundDining,
                label: "Round Dining Table",
                categories: "Dining Room, Dining Tables, Home Decor",
                rating: 4.5,
                price: "$349.00 – $399.00",
                description: "A round dining table for intimate dining experiences."
            },
            {
                link: `/${stringToSlug("Counter Stool Set")}`,
                sku: "123456802",
                colors: ["Black", "White"],
                tag: "Sale",
                images: [counterStools, counterStools, counterStools, counterStools],
                img: counterStools,
                label: "Counter Stool Set",
                categories: "Dining Room, Bar Stools, Home Decor",
                rating: 4.3,
                price: "$149.00 – $199.00",
                description: "A set of counter stools for your kitchen island."
            },
            {
                link: `/${stringToSlug("Sideboard with Doors")}`,
                sku: "123456803",
                colors: ["Brown", "White"],
                tag: "Hot",
                images: [sideBoard, sideBoard, sideBoard, sideBoard],
                img: sideBoard,
                label: "Sideboard with Doors",
                categories: "Dining Room, Buffets, Home Decor",
                rating: 4.6,
                price: "$299.00 – $349.00",
                description: "A stylish sideboard with doors for extra storage."
            },
            {
                link: `/${stringToSlug("Extendable Dining Table")}`,
                sku: "123456804",
                colors: ["White", "Black"],
                tag: "New",
                images: [ExtendableDiningTable, ExtendableDiningTable, ExtendableDiningTable, ExtendableDiningTable],
                img: ExtendableDiningTable,
                label: "Extendable Dining Table",
                categories: "Dining Room, Dining Tables, Home Decor",
                rating: 4.7,
                price: "$599.00 – $699.00",
                description: "An extendable dining table for flexible seating."
            }
        ],
        subLinks: [
            {
                categoryName: "Seating",
                links: [
                    { label: "Dining Chairs", link: "/tricart-home-decore/category/dining-chairs" },
                    { label: "Bar & Counter Stools", link: "/tricart-home-decore/category/stools" },
                ],
            },
            {
                categoryName: "Tables & Storage",
                links: [
                    { label: "Dining Tables", link: "/tricart-home-decore/category/dining-tables" },
                    { label: "Buffets & Sideboards", link: "/tricart-home-decore/category/buffets" },
                ],
            },
        ],
    },
    {
        label: "Bedroom",
        link: "/tricart-home-decore/category/bedroom",
        image: h3Cat4,
        products: [
            {
                link: `/${stringToSlug("Queen Size Bed Frame")}`,
                sku: "123456805",
                colors: ["Gray", "White"],
                tag: "Hot",
                images: [queenBed, queenBed, queenBed, queenBed],
                img: queenBed,
                label: "Queen Size Bed Frame",
                categories: "Bedroom, Beds, Home Decor",
                rating: 4.8,
                price: "$299.00 – $349.00",
                description: "A sturdy queen-size bed frame for your bedroom."
            },
            {
                link: `/${stringToSlug("Upholstered Headboard")}`,
                sku: "123456806",
                colors: ["Blue", "Gray"],
                tag: "New",
                images: [headboard, headboard, headboard, headboard],
                img: headboard,
                label: "Upholstered Headboard",
                categories: "Bedroom, Beds, Home Decor",
                rating: 4.6,
                price: "$199.00 – $249.00",
                description: "A comfortable upholstered headboard for your bed."
            },
            {
                link: `/${stringToSlug("Wooden Dresser")}`,
                sku: "123456807",
                colors: ["Brown", "White"],
                tag: "Sale",
                images: [woodenDresser, woodenDresser, woodenDresser, woodenDresser],
                img: woodenDresser,
                label: "Wooden Dresser",
                categories: "Bedroom, Dressers, Home Decor",
                rating: 4.5,
                price: "$249.00 – $299.00",
                description: "A spacious wooden dresser for bedroom storage."
            },
            {
                link: `/${stringToSlug("Nightstand with Drawer")}`,
                sku: "123456808",
                colors: ["Black", "White"],
                tag: "Hot",
                images: [drawerNightstand, drawerNightstand, drawerNightstand, drawerNightstand],
                img: drawerNightstand,
                label: "Nightstand with Drawer",
                categories: "Bedroom, Nightstands, Home Decor",
                rating: 4.7,
                price: "$99.00 – $129.00",
                description: "A functional nightstand with a drawer for your bedroom."
            },
            {
                link: `/${stringToSlug("King Size Bed Frame")}`,
                sku: "123456809",
                colors: ["Gray", "Black"],
                tag: "New",
                images: [kingBed, kingBed, kingBed, kingBed],
                img: kingBed,
                label: "King Size Bed Frame",
                categories: "Bedroom, Beds, Home Decor",
                rating: 4.8,
                price: "$399.00 – $449.00",
                description: "A luxurious king-size bed frame for your bedroom."
            },
            {
                link: `/${stringToSlug("Mirrored Dresser")}`,
                sku: "123456810",
                colors: ["White", "Gray"],
                tag: "Sale",
                images: [mirroredDresser, mirroredDresser, mirroredDresser, mirroredDresser],
                img: mirroredDresser,
                label: "Mirrored Dresser",
                categories: "Bedroom, Dressers, Home Decor",
                rating: 4.6,
                price: "$299.00 – $349.00",
                description: "A stylish mirrored dresser for your bedroom."
            },
            {
                link: `/${stringToSlug("Storage Bed Frame")}`,
                sku: "123456811",
                colors: ["Gray", "Black"],
                tag: "Hot",
                images: [storageBed, storageBed, storageBed, storageBed],
                img: storageBed,
                label: "Storage Bed Frame",
                categories: "Bedroom, Beds, Home Decor",
                rating: 4.7,
                price: "$499.00 – $599.00",
                description: "A bed frame with built-in storage for extra space."
            },
            {
                link: `/${stringToSlug("Minimalist Nightstand")}`,
                sku: "123456812",
                colors: ["White", "Black"],
                tag: "New",
                images: [nightstand2, nightstand2, nightstand2, nightstand2],
                img: nightstand2,
                label: "Minimalist Nightstand",
                categories: "Bedroom, Nightstands, Home Decor",
                rating: 4.5,
                price: "$79.00 – $99.00",
                description: "A minimalist nightstand for modern bedrooms."
            }
        ],
        subLinks: [
            {
                categoryName: "Beds & Frames",
                links: [
                    { label: "Beds", link: "/tricart-home-decore/category/beds" },
                    { label: "Bed Frames", link: "/tricart-home-decore/category/bed-frames" },
                ],
            },
            {
                categoryName: "Storage & Nightstands",
                links: [
                    { label: "Dressers", link: "/tricart-home-decore/category/dressers" },
                    { label: "Nightstands", link: "/tricart-home-decore/category/nightstands" },
                ],
            },
        ],
    },
    {
        label: "Office",
        link: "/tricart-home-decore/category/office",
        image: h3Cat5,
        products: [
            {
                link: `/${stringToSlug("Modern Writing Desk")}`,
                sku: "123456813",
                colors: ["White", "Black"],
                tag: "Hot",
                images: [modernDesk, modernDesk, modernDesk, modernDesk],
                img: modernDesk,
                label: "Modern Writing Desk",
                categories: "Office, Desks, Home Decor",
                rating: 4.6,
                price: "$199.00 – $249.00",
                description: "A sleek modern writing desk for your home office."
            },
            {
                link: `/${stringToSlug("Ergonomic Office Chair")}`,
                sku: "123456814",
                colors: ["Black", "Gray"],
                tag: "New",
                images: [ergonomicOfficeChair, ergonomicOfficeChair, ergonomicOfficeChair, ergonomicOfficeChair],
                img: ergonomicOfficeChair,
                label: "Ergonomic Office Chair",
                categories: "Office, Office Chairs, Home Decor",
                rating: 4.7,
                price: "$299.00 – $349.00",
                description: "A comfortable ergonomic chair for long work hours."
            },
            {
                link: `/${stringToSlug("Modern Leather Sectional Sofa")}`,
                sku: "123456789",
                colors: ["Black", "Brown", "Gray"],
                tag: "Hot",
                images: [leatherSofa, leatherSofa, leatherSofa, leatherSofa],
                img: leatherSofa,
                label: "Modern Leather Sectional Sofa",
                categories: "Living Room, Sofas, Home Decor",
                rating: 4.5,
                price: "$899.00 – $999.00",
                description: "A luxurious leather sectional sofa that offers both style and comfort for your living space."
            },
            {
                link: `/${stringToSlug("Wooden Bookcase")}`,
                sku: "123456815",
                colors: ["Brown", "White"],
                tag: "Sale",
                images: [woodenBookcase, woodenBookcase, woodenBookcase, woodenBookcase],
                img: woodenBookcase,
                label: "Wooden Bookcase",
                categories: "Office, Bookcases, Home Decor",
                rating: 4.5,
                price: "$149.00 – $199.00",
                description: "A sturdy wooden bookcase for your office or living room."
            },
            {
                link: `/${stringToSlug("Filing Cabinet with Lock")}`,
                sku: "123456816",
                colors: ["Black", "Gray"],
                tag: "Hot",
                images: [fileCabinet, fileCabinet, fileCabinet, fileCabinet],
                img: fileCabinet,
                label: "Filing Cabinet with Lock",
                categories: "Office, Filing Cabinets, Home Decor",
                rating: 4.4,
                price: "$99.00 – $129.00",
                description: "A secure filing cabinet for organizing important documents."
            },
            {
                link: `/${stringToSlug("L-Shaped Desk")}`,
                sku: "123456817",
                colors: ["White", "Black"],
                tag: "New",
                images: [LShapedDesk, LShapedDesk, LShapedDesk, LShapedDesk],
                img: LShapedDesk,
                label: "L-Shaped Desk",
                categories: "Office, Desks, Home Decor",
                rating: 4.7,
                price: "$299.00 – $349.00",
                description: "An L-shaped desk for maximizing workspace."
            },
            {
                link: `/${stringToSlug("Executive Office Chair")}`,
                sku: "123456818",
                colors: ["Black", "Brown"],
                tag: "Sale",
                images: [officeChair, officeChair, officeChair, officeChair],
                img: officeChair,
                label: "Executive Office Chair",
                categories: "Office, Office Chairs, Home Decor",
                rating: 4.6,
                price: "$399.00 – $449.00",
                description: "A luxurious executive office chair for your workspace."
            },
            {
                link: `/${stringToSlug("Wall-Mounted Bookshelf")}`,
                sku: "123456819",
                colors: ["White", "Black"],
                tag: "Hot",
                images: [wallMountedShelf, wallMountedShelf, wallMountedShelf, wallMountedShelf],
                img: wallMountedShelf,
                label: "Wall-Mounted Bookshelf",
                categories: "Office, Bookcases, Home Decor",
                rating: 4.5,
                price: "$79.00 – $99.00",
                description: "A space-saving wall-mounted bookshelf for your office."
            },
            {
                link: `/${stringToSlug("Adjustable Standing Desk")}`,
                sku: "123456820",
                colors: ["White", "Black"],
                tag: "New",
                images: [adjustableDesk, adjustableDesk, adjustableDesk, adjustableDesk],
                img: adjustableDesk,
                label: "Adjustable Standing Desk",
                categories: "Office, Desks, Home Decor",
                rating: 4.8,
                price: "$499.00 – $599.00",
                description: "An adjustable standing desk for a healthier work environment."
            }
        ],
        subLinks: [
            {
                categoryName: "Desks & Chairs",
                links: [
                    { label: "Desks", link: "/tricart-home-decore/category/desks" },
                    { label: "Office Chairs", link: "/tricart-home-decore/category/chairs" },
                ],
            },
            {
                categoryName: "Storage & Organization",
                links: [
                    { label: "Bookcases", link: "/tricart-home-decore/category/bookcases" },
                    { label: "Filing Cabinets", link: "/tricart-home-decore/category/filing-cabinets" },
                ],
            },
        ],
    },
    {
        label: "Outdoor",
        link: "/tricart-home-decore/category/outdoor",
        image: h3Cat6,
        products: [
            {
                link: `/${stringToSlug("Cozy Recliner Armchair")}`,
                sku: "123456789",
                colors: ["Beige", "Brown", "Black"],
                tag: "Hot",
                images: [recliner, recliner, recliner, recliner],
                img: recliner,
                label: "Cozy Recliner Armchair",
                categories: "Living Room, Chairs, Home Decor",
                rating: 5,
                price: "$199.00 – $249.00",
                description: "Relax in comfort with this cozy recliner armchair. Ideal for reading or watching TV."
            },
            {
                link: `/${stringToSlug("Outdoor Patio Sofa")}`,
                sku: "123456821",
                colors: ["Gray", "Beige"],
                tag: "Hot",
                images: [outdoorPatioSofa, outdoorPatioSofa, outdoorPatioSofa, outdoorPatioSofa],
                img: outdoorPatioSofa,
                label: "Outdoor Patio Sofa",
                categories: "Outdoor, Outdoor Sofas, Home Decor",
                rating: 4.7,
                price: "$499.00 – $599.00",
                description: "A comfortable outdoor sofa for your patio or garden."
            },
            {
                link: `/${stringToSlug("Rustic Wooden Coffee Table")}`,
                sku: "123456789",
                colors: ["Brown", "Walnut", "Black"],
                tag: "Hot",
                images: [h3Product3, h3Product3, h3Product3, h3Product3],
                img: h3Product3,
                label: "Rustic Wooden Coffee Table",
                categories: "Living Room, Tables, Home Decor",
                rating: 5,
                price: "$129.00 – $159.00",
                description: "Add a rustic charm to your living room with this beautifully crafted wooden coffee table."
            },
            {
                link: `/${stringToSlug("Wicker Outdoor Chair")}`,
                sku: "123456822",
                colors: ["Brown", "White"],
                tag: "New",
                images: [wickerChair, wickerChair, wickerChair, wickerChair],
                img: wickerChair,
                label: "Wicker Outdoor Chair",
                categories: "Outdoor, Outdoor Chairs, Home Decor",
                rating: 4.6,
                price: "$149.00 – $199.00",
                description: "A stylish wicker chair for outdoor relaxation."
            },
            {
                link: `/${stringToSlug("Outdoor Dining Table")}`,
                sku: "123456823",
                colors: ["Brown", "Gray"],
                tag: "Sale",
                images: [outdoorDiningTable, outdoorDiningTable, outdoorDiningTable, outdoorDiningTable],
                img: outdoorDiningTable,
                label: "Outdoor Dining Table",
                categories: "Outdoor, Patio Tables, Home Decor",
                rating: 4.5,
                price: "$299.00 – $349.00",
                description: "A durable outdoor dining table for family meals."
            },
            {
                link: `/${stringToSlug("Patio Umbrella")}`,
                sku: "123456824",
                colors: ["Blue", "Beige"],
                tag: "Hot",
                images: [patioUmbrella, patioUmbrella, patioUmbrella, patioUmbrella],
                img: patioUmbrella,
                label: "Patio Umbrella",
                categories: "Outdoor, Umbrellas, Home Decor",
                rating: 4.4,
                price: "$99.00 – $129.00",
                description: "A large patio umbrella for shade and style."
            },
            {
                link: `/${stringToSlug("Outdoor Lounge Chair")}`,
                sku: "123456825",
                colors: ["Black", "White"],
                tag: "New",
                images: [outdoorLoungeChair, outdoorLoungeChair, outdoorLoungeChair, outdoorLoungeChair],
                img: outdoorLoungeChair,
                label: "Outdoor Lounge Chair",
                categories: "Outdoor, Outdoor Chairs, Home Decor",
                rating: 4.6,
                price: "$199.00 – $249.00",
                description: "A comfortable lounge chair for outdoor relaxation."
            },
            {
                link: `/${stringToSlug("Outdoor Coffee Table")}`,
                sku: "123456826",
                colors: ["Brown", "Gray"],
                tag: "Sale",
                images: [outdoorCoffeeTable, outdoorCoffeeTable, outdoorCoffeeTable, outdoorCoffeeTable],
                img: outdoorCoffeeTable,
                label: "Outdoor Coffee Table",
                categories: "Outdoor, Patio Tables, Home Decor",
                rating: 4.5,
                price: "$149.00 – $199.00",
                description: "A weather-resistant coffee table for your patio."
            },
            {
                link: `/${stringToSlug("Outdoor Sectional Sofa")}`,
                sku: "123456827",
                colors: ["Gray", "Beige"],
                tag: "Hot",
                images: [outdoorSofa, outdoorSofa, outdoorSofa, outdoorSofa],
                img: outdoorSofa,
                label: "Outdoor Sectional Sofa",
                categories: "Outdoor, Outdoor Sofas, Home Decor",
                rating: 4.7,
                price: "$699.00 – $799.00",
                description: "A spacious sectional sofa for outdoor entertaining."
            },
            {
                link: `/${stringToSlug("Outdoor Bar Stool")}`,
                sku: "123456828",
                colors: ["Black", "White"],
                tag: "New",
                images: [barStools, barStools, barStools, barStools],
                img: barStools,
                label: "Outdoor Bar Stool",
                categories: "Outdoor, Bar Stools, Home Decor",
                rating: 4.4,
                price: "$79.00 – $99.00",
                description: "A durable bar stool for outdoor bars or kitchens."
            }
        ],
        subLinks: [
            {
                categoryName: "Seating",
                links: [
                    { label: "Outdoor Sofas", link: "/tricart-home-decore/category/outdoor-sofas" },
                    { label: "Outdoor Chairs", link: "/tricart-home-decore/category/outdoor-chairs" },
                ],
            },
            {
                categoryName: "Tables & Accessories",
                links: [
                    { label: "Patio Tables", link: "/tricart-home-decore/category/patio-tables" },
                    { label: "Umbrellas & Shades", link: "/tricart-home-decore/category/umbrellas" },
                ],
            },
        ],
    },
    {
        label: "Storage & Decor",
        link: "/tricart-home-decore/category/storage-decor",
        image: h3Cat7,
        products: [
            {
                link: `/${stringToSlug("Wooden Bookcase")}`,
                sku: "123456829",
                colors: ["Brown", "White"],
                tag: "Hot",
                images: [woodenBookcase, woodenBookcase, woodenBookcase, woodenBookcase],
                img: woodenBookcase,
                label: "Wooden Bookcase",
                categories: "Storage & Decor, Bookcases, Home Decor",
                rating: 4.6,
                price: "$149.00 – $199.00",
                description: "A sturdy wooden bookcase for your home or office."
            },
            {
                link: `/${stringToSlug("Storage Cabinet with Doors")}`,
                sku: "123456830",
                colors: ["White", "Black"],
                tag: "New",
                images: [cabinet, cabinet, cabinet, cabinet],
                img: cabinet,
                label: "Storage Cabinet with Doors",
                categories: "Storage & Decor, Cabinets, Home Decor",
                rating: 4.5,
                price: "$199.00 – $249.00",
                description: "A functional storage cabinet with doors for organization."
            },
            {
                link: `/${stringToSlug("Decorative Wall Mirror")}`,
                sku: "123456831",
                colors: ["Gold", "Black"],
                tag: "Sale",
                images: [wallMirror, wallMirror, wallMirror, wallMirror],
                img: wallMirror,
                label: "Decorative Wall Mirror",
                categories: "Storage & Decor, Mirrors, Home Decor",
                rating: 4.7,
                price: "$99.00 – $129.00",
                description: "A stylish wall mirror to enhance your home decor."
            },
            {
                link: `/${stringToSlug("Area Rug")}`,
                sku: "123456832",
                colors: ["Gray", "Beige"],
                tag: "Hot",
                images: [areaRug, areaRug, areaRug, areaRug],
                img: areaRug,
                label: "Area Rug",
                categories: "Storage & Decor, Rugs, Home Decor",
                rating: 4.6,
                price: "$199.00 – $249.00",
                description: "A soft and durable area rug for your living room."
            },
            {
                link: `/${stringToSlug("Floating Shelves")}`,
                sku: "123456833",
                colors: ["White", "Black"],
                tag: "New",
                images: [floatingShelves, floatingShelves, floatingShelves, floatingShelves],
                img: floatingShelves,
                label: "Floating Shelves",
                categories: "Storage & Decor, Shelves, Home Decor",
                rating: 4.5,
                price: "$49.00 – $69.00",
                description: "Floating shelves for displaying decor or books."
            },
            {
                link: `/${stringToSlug("Minimalist Bookshelf")}`,
                sku: "123456789",
                colors: ["White", "Black", "Walnut"],
                tag: "Hot",
                images: [h3Product4, h3Product4, h3Product4, h3Product4],
                img: h3Product4,
                label: "Minimalist Bookshelf",
                categories: "Living Room, Storage, Home Decor",
                rating: 3.80,
                price: "$149.00 – $179.00",
                description: "Organize your books and decor with this sleek and minimalist bookshelf."
            },
            {
                link: `/${stringToSlug("Decorative Throw Pillows")}`,
                sku: "123456834",
                colors: ["Blue", "Gray"],
                tag: "Sale",
                images: [throwPillow, throwPillow, throwPillow, throwPillow],
                img: throwPillow,
                label: "Decorative Throw Pillows",
                categories: "Storage & Decor, Decor, Home Decor",
                rating: 4.4,
                price: "$29.00 – $39.00",
                description: "Soft and stylish throw pillows for your sofa or bed."
            },
            {
                link: `/${stringToSlug("Wall Art Set")}`,
                sku: "123456835",
                colors: ["Multicolor"],
                tag: "Hot",
                images: [wallArt, wallArt, wallArt, wallArt],
                img: wallArt,
                label: "Wall Art Set",
                categories: "Storage & Decor, Decor, Home Decor",
                rating: 4.7,
                price: "$79.00 – $99.00",
                description: "A set of wall art pieces to brighten your space."
            },
            {
                link: `/${stringToSlug("Decorative Vase")}`,
                sku: "123456836",
                colors: ["White", "Blue"],
                tag: "New",
                images: [vase, vase, vase, vase],
                img: vase,
                label: "Decorative Vase",
                categories: "Storage & Decor, Decor, Home Decor",
                rating: 4.5,
                price: "$49.00 – $59.00",
                description: "A beautiful vase for flowers or standalone decor."
            }
        ],
        subLinks: [
            {
                categoryName: "Storage",
                links: [
                    { label: "Bookcases", link: "/tricart-home-decore/category/bookcases" },
                    { label: "Cabinets", link: "/tricart-home-decore/category/cabinets" },
                ],
            },
            {
                categoryName: "Decor",
                links: [
                    { label: "Mirrors", link: "/tricart-home-decore/category/mirrors" },
                    { label: "Rugs", link: "/tricart-home-decore/category/rugs" },
                ],
            },
        ],
    },
    {
        label: "Lighting",
        link: "/tricart-home-decore/category/lighting",
        image: h3Cat1,
        products: [
            {
                link: `/${stringToSlug("Pendant Light Fixture")}`,
                sku: "123456837",
                colors: ["Black", "Gold"],
                tag: "Hot",
                images: [pendantLight, pendantLight, pendantLight, pendantLight],
                img: pendantLight,
                label: "Pendant Light Fixture",
                categories: "Lighting, Pendant Lights, Home Decor",
                rating: 4.7,
                price: "$99.00 – $129.00",
                description: "A stylish pendant light for your kitchen or dining area."
            },
            {
                link: `/${stringToSlug("Table Lamp with USB Port")}`,
                sku: "123456838",
                colors: ["White", "Black"],
                tag: "New",
                images: [tableLamp, tableLamp, tableLamp, tableLamp],
                img: tableLamp,
                label: "Table Lamp with USB Port",
                categories: "Lighting, Table Lamps, Home Decor",
                rating: 4.6,
                price: "$49.00 – $59.00",
                description: "A modern table lamp with a built-in USB port."
            },
            {
                link: `/${stringToSlug("Outdoor Wall Light")}`,
                sku: "123456839",
                colors: ["Black", "White"],
                tag: "Sale",
                images: [wallLight, wallLight, wallLight, wallLight],
                img: wallLight,
                label: "Outdoor Wall Light",
                categories: "Lighting, Outdoor Wall Lights, Home Decor",
                rating: 4.5,
                price: "$79.00 – $99.00",
                description: "A durable outdoor wall light for your patio or garden."
            },
            {
                link: `/${stringToSlug("Landscape Lighting Kit")}`,
                sku: "123456840",
                colors: ["Black", "Silver"],
                tag: "Hot",
                images: [lightBulb, lightBulb, lightBulb, lightBulb],
                img: lightBulb,
                label: "Landscape Lighting Kit",
                categories: "Lighting, Landscape Lighting, Home Decor",
                rating: 4.7,
                price: "$149.00 – $199.00",
                description: "A complete landscape lighting kit for your yard."
            },
            {
                link: `/${stringToSlug("Floor Lamp with Shelves")}`,
                sku: "123456841",
                colors: ["Black", "White"],
                tag: "New",
                images: [floorLamp, floorLamp, floorLamp, floorLamp],
                img: floorLamp,
                label: "Floor Lamp with Shelves",
                categories: "Lighting, Floor Lamps, Home Decor",
                rating: 4.6,
                price: "$129.00 – $149.00",
                description: "A functional floor lamp with built-in shelves."
            },
            {
                link: `/${stringToSlug("Chandelier with Crystals")}`,
                sku: "123456842",
                colors: ["Gold", "Silver"],
                tag: "Sale",
                images: [crystalChandelier, crystalChandelier, crystalChandelier, crystalChandelier],
                img: crystalChandelier,
                label: "Chandelier with Crystals",
                categories: "Lighting, Chandeliers, Home Decor",
                rating: 4.8,
                price: "$299.00 – $349.00",
                description: "A luxurious chandelier with crystal accents."
            },
            {
                link: `/${stringToSlug("LED Strip Lights")}`,
                sku: "123456843",
                colors: ["Multicolor"],
                tag: "Hot",
                images: [LEDLight, LEDLight, LEDLight, LEDLight],
                img: LEDLight,
                label: "LED Strip Lights",
                categories: "Lighting, LED Lights, Home Decor",
                rating: 4.5,
                price: "$29.00 – $39.00",
                description: "Versatile LED strip lights for ambient lighting."
            },
            {
                link: `/${stringToSlug("Desk Lamp with Adjustable Arm")}`,
                sku: "123456844",
                colors: ["Black", "White"],
                tag: "New",
                images: [deskLamp, deskLamp, deskLamp, deskLamp],
                img: deskLamp,
                label: "Desk Lamp with Adjustable Arm",
                categories: "Lighting, Desk Lamps, Home Decor",
                rating: 4.6,
                price: "$59.00 – $69.00",
                description: "A practical desk lamp with an adjustable arm."
            }
        ],
        subLinks: [
            {
                categoryName: "Indoor Lighting",
                links: [
                    { label: "Pendant Lights", link: "/tricart-home-decore/category/pendant-lights" },
                    { label: "Table Lamps", link: "/tricart-home-decore/category/table-lamps" },
                ],
            },
            {
                categoryName: "Outdoor Lighting",
                links: [
                    { label: "Outdoor Wall Lights", link: "/tricart-home-decore/category/wall-lights" },
                    { label: "Landscape Lighting", link: "/tricart-home-decore/category/landscape-lighting" },
                ],
            },
        ],
    },
];


export const homeDecorMainCategories = [
    { title: "Living Room", img: h3Cat2 },
    { title: "Dining Room", img: h3Cat3 },
    { title: "Bedroom", img: h3Cat4 },
    { title: "Office", img: h3Cat5 },
    { title: "Outdoor", img: h3Cat6 },
    { title: "Storage & Decor", img: h3Cat7 },
    { title: "Lighting", img: h3Cat1 },
];

export const homeDecorFeatures = [
    {
        img: search,
        title: 'Find Your Perfect Furniture with Image or Voice Search',
        link: `/${stringToSlug("Find Your Perfect Furniture with Image or Voice Search")}`,
        date: "4 July 2024",
        tags: ["Deals", "guides"],
        description: 'Snap a photo of a chair or sofa you love, or describe it using your voice, and let our app find the perfect match for your home.',
    },
    {
        img: truck,
        date: "4 July 2024",
        tags: ["Deals", "guides"],
        title: 'Rent Tools & Trucks for Your Home Projects',
        link: `/${stringToSlug("Rent Tools & Trucks for Your Home Projects")}`,
        description: 'Need to move a new sofa or assemble bedroom furniture? Rent tools and trucks to make your home projects easier and stress-free.',
    },
    {
        img: delivery,
        date: "4 July 2024",
        tags: ["Deals", "guides"],
        title: 'Curbside Pickup for Your Home Essentials',
        link: `/${stringToSlug("Curbside Pickup for Your Home Essentials")}`,
        description: 'Order your favorite chairs, tables, or bedroom sets online and pick them up curbside at your convenience. Available daily until 6 p.m.',
    },
    {
        img: freeDelivery,
        date: "4 July 2024",
        tags: ["Deals", "guides"],
        title: 'Free Delivery on Millions of Home Products',
        link: `/${stringToSlug("Free Delivery on Millions of Home Products")}`,
        description: 'Enjoy free delivery on over two million items, from cozy sofas to elegant bedroom furniture. Upgrade your home without extra costs.',
    },
];


export const homeDecorFeaturedProducts = [
    {
        link: `/${stringToSlug("Modern Upholstered Sofa")}`,
        sku: "123456789",
        colors: ["Black", "White", "Gray", "Blue"],
        tag: "Hot",
        images: [h3Product1, h3Product1, h3Product1, h3Product1],
        img: h3Product1,
        label: "Modern Upholstered Sofa",
        categories: "Living Room, Sofas, Home Decor",
        rating: 4.5,
        price: "$499.00 – $599.00",
        description: "Enhance your living room with this modern, comfortable sofa. Perfect for relaxing after a long day."
    },
    {
        link: `/${stringToSlug("Elegant Dining Table Set")}`,
        sku: "123456789",
        colors: ["Brown", "White", "Black"],
        tag: "Hot",
        images: [h3Cat3, h3Cat3, h3Cat3, h3Cat3],
        img: h3Cat3,
        label: "Elegant Dining Table Set",
        categories: "Dining Room, Tables, Home Decor",
        rating: 4.40,
        price: "$699.00 – $799.00",
        description: "A stylish dining table set that adds elegance to your dining space. Perfect for family dinners."
    },
    {
        link: `/${stringToSlug("Cozy Recliner Armchair")}`,
        sku: "123456789",
        colors: ["Beige", "Brown", "Black"],
        tag: "Hot",
        images: [h3Product2, h3Product2, h3Product2, h3Product2],
        img: h3Product2,
        label: "Cozy Recliner Armchair",
        categories: "Living Room, Chairs, Home Decor",
        rating: 5,
        price: "$199.00 – $249.00",
        description: "Relax in comfort with this cozy recliner armchair. Ideal for reading or watching TV."
    },
    {
        link: `/${stringToSlug("Rustic Wooden Coffee Table")}`,
        sku: "123456789",
        colors: ["Brown", "Walnut", "Black"],
        tag: "Hot",
        images: [h3Product3, h3Product3, h3Product3, h3Product3],
        img: h3Product3,
        label: "Rustic Wooden Coffee Table",
        categories: "Living Room, Tables, Home Decor",
        rating: 5,
        price: "$129.00 – $159.00",
        description: "Add a rustic charm to your living room with this beautifully crafted wooden coffee table."
    },
    {
        link: `/${stringToSlug("Modern Leather Sectional Sofa")}`,
        sku: "123456789",
        colors: ["Black", "Brown", "Gray"],
        tag: "Hot",
        images: [h3Cat2, h3Cat2, h3Cat2, h3Cat2],
        img: h3Cat2,
        label: "Modern Leather Sectional Sofa",
        categories: "Living Room, Sofas, Home Decor",
        rating: 4.5,
        price: "$899.00 – $999.00",
        description: "A luxurious leather sectional sofa that offers both style and comfort for your living space."
    },
    {
        link: `/${stringToSlug("Minimalist Bookshelf")}`,
        sku: "123456789",
        colors: ["White", "Black", "Walnut"],
        tag: "Hot",
        images: [h3Product4, h3Product4, h3Product4, h3Product4],
        img: h3Product4,
        label: "Minimalist Bookshelf",
        categories: "Living Room, Storage, Home Decor",
        rating: 3.80,
        price: "$149.00 – $179.00",
        description: "Organize your books and decor with this sleek and minimalist bookshelf."
    },
];