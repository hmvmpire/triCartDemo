import wrench from '../static/cardDummyimg1.jpeg'
import cordlessScrewdriver from '../static/cardDummyimg1.jpeg'
import drill from '../static/cardDummyimg1.jpeg'

import subCat1 from '../static/cardDummyimg1.jpeg'
import subCat2 from '../static/cardDummyimg1.jpeg'
import subCat3 from '../static/cardDummyimg1.jpeg'
import subCat4 from '../static/cardDummyimg1.jpeg'
import subCat5 from '../static/cardDummyimg1.jpeg'
import subCat6 from '../static/cardDummyimg1.jpeg'
import subCat7 from '../static/cardDummyimg1.jpeg'
import subCat8 from '../static/cardDummyimg1.jpeg'
import subCat9 from '../static/cardDummyimg1.jpeg'
import subCat10 from '../static/cardDummyimg1.jpeg'
import subCat11 from '../static/cardDummyimg1.jpeg'
import subCat12 from '../static/cardDummyimg1.jpeg'
import { stringToSlug } from '@/services/generalService'
import { faCogs, faHardHat, faLeaf, faTags, faToolbox } from '@fortawesome/free-solid-svg-icons'
import img1 from '../static/cardDummyimg1.jpeg'
import img2 from '../static/cardDummyimg1.jpeg'
import img3 from '../static/cardDummyimg1.jpeg'
import img4 from '../static/cardDummyimg1.jpeg'
import img5 from '../static/cardDummyimg1.jpeg'
import hammerDrill from '../static/cardDummyimg1.jpeg'
import angleDrill from '../static/cardDummyimg1.jpeg'
import drillPress from '../static/cardDummyimg1.jpeg'
import pushMower from '../static/cardDummyimg1.jpeg'
import ridingMower from '../static/cardDummyimg1.jpeg'
import roboticMower from '../static/cardDummyimg1.jpeg'
import electricChainsaw from '../static/cardDummyimg1.jpeg'
import gasChainsaw from '../static/cardDummyimg1.jpeg'
import stringTrimer from '../static/cardDummyimg1.jpeg'
import hedgeTrimmer from '../static/cardDummyimg1.jpeg'
import lawnTractor from '../static/cardDummyimg1.jpeg'
import drillBits from '../static/cardDummyimg1.jpeg'
import chuckKey from '../static/cardDummyimg1.jpeg'
import drillKit from '../static/cardDummyimg1.jpeg'
import driverBits from '../static/cardDummyimg1.jpeg'
import holeSawBit from '../static/cardDummyimg1.jpeg'
import sawKit from '../static/cardDummyimg1.jpeg'
import sawStand from '../static/cardDummyimg1.jpeg'
import tableSaw from '../static/cardDummyimg1.jpeg'

import toolSet from '../static/cardDummyimg1.jpeg'
import professionalToolSet from '../static/cardDummyimg1.jpeg'
import heavyDrill from '../static/cardDummyimg1.jpeg'
import fuelKit from '../static/cardDummyimg1.jpeg'
import ryobiKit from '../static/cardDummyimg1.jpeg'
import codlessSaw from '../static/cardDummyimg1.jpeg'
import codlessWrench from '../static/cardDummyimg1.jpeg'
import toolKit from '../static/cardDummyimg1.jpeg'

import safetyGlasses from '../static/cardDummyimg1.jpeg'
import earMuff from '../static/cardDummyimg1.jpeg'
import boots from '../static/cardDummyimg1.jpeg'
import gloves from '../static/cardDummyimg1.jpeg'
import hat from '../static/cardDummyimg1.jpeg'
import toolBelt from '../static/cardDummyimg1.jpeg'
import coverall from '../static/cardDummyimg1.jpeg'


export const mainCatgories = [
  { img: subCat1, title: [`Cordless`, <span className='fw_700 text-black'> Drill</span>, " 20V Max"] },
  { img: wrench, title: [`Heavy Duty`, <span className='fw_700 text-black'> Impact Wrench</span>] },
  { img: subCat5, title: [`Precision`, <span className='fw_700 text-black'> Angle Grinder</span>] },
  { img: subCat3, title: [<span className='fw_700 text-black'>Electric Saw</span>, ` Circular Blade`] },
];


export const SubCategories = [
  { img: subCat1, link: "/tricart-tools/category/cordless-drills", title: "Cordless Drills", productsLength: 15 },
  { img: subCat2, link: "/tricart-tools/category/impact-drivers", title: "Impact Drivers", productsLength: 12 },
  { img: subCat3, link: "/tricart-tools/category/circular-saws", title: "Circular Saws", productsLength: 10 },
  { img: subCat4, link: "/tricart-tools/category/jigsaws", title: "Jigsaws", productsLength: 8 },
  { img: subCat5, link: "/tricart-tools/category/angle-grinders", title: "Angle Grinders", productsLength: 14 },
  { img: subCat6, link: "/tricart-tools/category/orbital-sanders", title: "Orbital Sanders", productsLength: 7 },
  { img: subCat7, link: "/tricart-tools/category/string-trimmers", title: "String Trimmers", productsLength: 9 },
  { img: subCat8, link: "/tricart-tools/category/lawn-mowers", title: "Lawn Mowers", productsLength: 5 },
  { img: subCat9, link: "/tricart-tools/category/lithium-ion-batteries", title: "Lithium-Ion Batteries", productsLength: 20 },
  { img: subCat10, link: "/tricart-tools/category/safety-gear", title: "Safety Gear", productsLength: 18 },
  { img: subCat11, link: "/tricart-tools/category/tool-belts", title: "Tool Belts", productsLength: 6 },
  { img: subCat12, link: "/tricart-tools/category/accessories", title: "Workshop Accessories", productsLength: 8 },
];




export const toolsProductsData = [
  {
    link: `/${stringToSlug("DeWalt Cordless Drill 20V")}`, sku: "DW123456",
    colors: ["Black", "Yellow", "Red"],
    tag: "Hot", images: [subCat1, subCat1, subCat1, subCat1], img: subCat1, label: "DeWalt Cordless Drill 20V", categories: "Power Tools, Drills, Handheld Tools", rating: 4.8, price: "$150.00 – $170.00", description: "A powerful cordless drill that offers high torque and precision for various tasks."
  },
  {
    link: `/${stringToSlug("Makita Impact Wrench XWT08Z")}`, sku: "MAK123456",
    colors: ["Black", "Blue"],
    tag: "Hot", images: [wrench, wrench, wrench, wrench], img: wrench, label: "Makita Impact Wrench XWT08Z", categories: "Power Tools, Wrenches, Automotive", rating: 4.7, price: "$200.00 – $230.00", description: "Heavy-duty impact wrench designed for automotive and industrial applications."
  },
  {
    link: `/${stringToSlug("Bosch Angle Grinder GWS 13-50")}`, sku: "BOS123456",
    colors: ["Black", "Blue"],
    tag: "Hot", images: [subCat5, subCat5, subCat5, subCat5], img: subCat5, label: "Bosch Angle Grinder GWS 13-50", categories: "Power Tools, Grinders, Metalworking", rating: 5, price: "$99.00 – $120.00", description: "A versatile angle grinder for cutting and grinding with excellent control."
  },
  {
    link: `/${stringToSlug("Milwaukee Circular Saw M18")}`, sku: "MIL123456",
    colors: ["Black", "Red"],
    tag: "Hot", images: [subCat3, subCat3, subCat3, subCat3], img: subCat3, label: "Milwaukee Circular Saw M18", categories: "Power Tools, Saws, Woodworking", rating: 5, price: "$180.00 – $210.00", description: "High-performance circular saw with superior cutting power and durability."
  },
  {
    link: `/${stringToSlug("Hitachi Demolition Hammer H65")}`, sku: "HIT123456",
    colors: ["Black", "Green"],
    tag: "Hot", images: [drill, drill, drill, drill], img: drill, label: "Hitachi Demolition Hammer H65", categories: "Power Tools, Hammers, Construction", rating: 4.6, price: "$450.00 – $490.00", description: "Heavy-duty demolition hammer with high impact energy for breaking concrete."
  },
  {
    link: `/${stringToSlug("Ryobi Cordless Screwdriver P1810")}`, sku: "RYO123456",
    colors: ["Black", "Green"],
    tag: "Hot", images: [cordlessScrewdriver, cordlessScrewdriver, cordlessScrewdriver, cordlessScrewdriver], img: cordlessScrewdriver, label: "Ryobi Cordless Screwdriver P1810", categories: "Power Tools, Screwdrivers, Home Improvement", rating: 4.3, price: "$40.00 – $50.00", description: "Compact cordless screwdriver perfect for small DIY and home improvement tasks."
  },
]



export const allToolCategories = [
  {
    label: "Power Tools",
    icon: faToolbox,
    link: "/tricart-tools/category/power-tools",
    img: img1,
    products: [
      {
        link: `/${stringToSlug("DeWalt Cordless Drill 20V")}`,
        sku: "DW123456",
        colors: ["Black", "Yellow", "Red"],
        tag: "Hot",
        images: [subCat1, subCat1, subCat1, subCat1],
        img: subCat1,
        label: "DeWalt Cordless Drill 20V",
        categories: "Power Tools, Drills, Handheld Tools",
        rating: 4.8,
        price: "$150.00 – $170.00",
        description: "A powerful cordless drill that offers high torque and precision for various tasks."
      },
      {
        link: `/${stringToSlug("Makita Impact Driver")}`,
        sku: "MK123457",
        colors: ["Blue", "White"],
        tag: "New",
        images: [subCat2, subCat2, subCat2, subCat2],
        img: subCat2,
        label: "Makita Impact Driver",
        categories: "Power Tools, Drills, Handheld Tools",
        rating: 4.7,
        price: "$130.00 – $150.00",
        description: "A compact and lightweight impact driver for fastening tasks."
      },
      {
        link: `/${stringToSlug("Bosch Hammer Drill")}`,
        sku: "BS123458",
        colors: ["Green", "Black"],
        tag: "Sale",
        images: [hammerDrill, hammerDrill, hammerDrill, hammerDrill],
        img: hammerDrill,
        label: "Bosch Hammer Drill",
        categories: "Power Tools, Drills, Handheld Tools",
        rating: 4.6,
        price: "$140.00 – $160.00",
        description: "A versatile hammer drill for masonry and concrete drilling."
      },
      {
        link: `/${stringToSlug("Milwaukee Right Angle Drill")}`,
        sku: "ML123459",
        colors: ["Red", "Black"],
        tag: "Hot",
        images: [angleDrill, angleDrill, angleDrill, angleDrill],
        img: angleDrill,
        label: "Milwaukee Right Angle Drill",
        categories: "Power Tools, Drills, Handheld Tools",
        rating: 4.5,
        price: "$160.00 – $180.00",
        description: "A right angle drill for tight spaces and hard-to-reach areas."
      },
      {
        link: `/${stringToSlug("Ryobi Drill Press")}`,
        sku: "RY123460",
        colors: ["Green", "Black"],
        tag: "New",
        images: [drillPress, drillPress, drillPress, drillPress],
        img: drillPress,
        label: "Ryobi Drill Press",
        categories: "Power Tools, Drills, Stationary Tools",
        rating: 4.4,
        price: "$200.00 – $220.00",
        description: "A drill press for precision drilling and consistent results."
      },
      {
        link: `/${stringToSlug("Bosch Angle Grinder GWS 13-50")}`, sku: "BOS123456",
        colors: ["Black", "Blue"],
        tag: "Hot", images: [subCat5, subCat5, subCat5, subCat5], img: subCat5, label: "Bosch Angle Grinder GWS 13-50", categories: "Power Tools, Grinders, Metalworking", rating: 5, price: "$99.00 – $120.00", description: "A versatile angle grinder for cutting and grinding with excellent control."
      },
      {
        link: `/${stringToSlug("DeWalt Circular Saw")}`,
        sku: "DW123461",
        colors: ["Yellow", "Black"],
        tag: "Hot",
        images: [subCat3, subCat3, subCat3, subCat3],
        img: subCat3,
        label: "DeWalt Circular Saw",
        categories: "Power Tools, Saws, Handheld Tools",
        rating: 4.8,
        price: "$120.00 – $140.00",
        description: "A powerful circular saw for cutting wood and other materials."
      },
      {
        link: `/${stringToSlug("Makita Jigsaw")}`,
        sku: "MK123462",
        colors: ["Blue", "White"],
        tag: "New",
        images: [subCat4, subCat4, subCat4, subCat4],
        img: subCat4,
        label: "Makita Jigsaw",
        categories: "Power Tools, Saws, Handheld Tools",
        rating: 4.7,
        price: "$110.00 – $130.00",
        description: "A versatile jigsaw for cutting curves and intricate shapes."
      },
      {
        link: `/${stringToSlug("Bosch Orbital Sander")}`,
        sku: "BS123463",
        colors: ["Green", "Black"],
        tag: "Sale",
        images: [subCat6, subCat6, subCat6, subCat6],
        img: subCat6,
        label: "Bosch Orbital Sander",
        categories: "Power Tools, Sanders & Grinders, Handheld Tools",
        rating: 4.6,
        price: "$90.00 – $110.00",
        description: "An orbital sander for smooth and even sanding."
      }
    ],
    subLinks: [
      {
        categoryName: "Drills & Drivers",
        link: "/tricart-tools/category/drills-drivers",
        links: [
          { label: "Cordless Drills", link: "/tricart-tools/category/cordless-drills" },
          { label: "Impact Drivers", link: "/tricart-tools/category/impact-drivers" },
          { label: "Hammer Drills", link: "/tricart-tools/category/hammer-drills" },
          { label: "Right Angle Drills", link: "/tricart-tools/category/right-angle-drills" },
          { label: "Drill Presses", link: "/tricart-tools/category/drill-presses" },
        ]
      },
      {
        categoryName: "Saws",
        link: "/tricart-tools/category/saws",
        links: [
          { label: "Circular Saws", link: "/tricart-tools/category/circular-saws" },
          { label: "Jigsaws", link: "/tricart-tools/category/jigsaws" },
          { label: "Reciprocating Saws", link: "/tricart-tools/category/reciprocating-saws" },
          { label: "Miter Saws", link: "/tricart-tools/category/miter-saws" },
          { label: "Table Saws", link: "/tricart-tools/category/table-saws" },
        ]
      },
      {
        categoryName: "Sanders & Grinders",
        link: "/tricart-tools/category/sanders-grinders",
        links: [
          { label: "Orbital Sanders", link: "/tricart-tools/category/orbital-sanders" },
          { label: "Belt Sanders", link: "/tricart-tools/category/belt-sanders" },
          { label: "Angle Grinders", link: "/tricart-tools/category/angle-grinders" },
          { label: "Bench Grinders", link: "/tricart-tools/category/bench-grinders" },
          { label: "Detail Sanders", link: "/tricart-tools/category/detail-sanders" },
        ]
      }
    ]
  },
  {
    label: "Outdoor Power Equipment",
    icon: faLeaf,
    link: "/tricart-tools/category/outdoor-power-equipment",
    img: img2,
    products: [
      {
        link: `/${stringToSlug("Milwaukee Circular Saw M18")}`, sku: "MIL123456",
        colors: ["Black", "Red"],
        tag: "Hot", images: [subCat3, subCat3, subCat3, subCat3], img: subCat3, label: "Milwaukee Circular Saw M18", categories: "Power Tools, Saws, Woodworking", rating: 5, price: "$180.00 – $210.00", description: "High-performance circular saw with superior cutting power and durability."
      },
      {
        link: `/${stringToSlug("Honda Push Mower")}`,
        sku: "HD123464",
        colors: ["Red", "Black"],
        tag: "Hot",
        images: [pushMower, pushMower, pushMower, pushMower],
        img: pushMower,
        label: "Honda Push Mower",
        categories: "Outdoor Power Equipment, Lawn Mowers",
        rating: 4.8,
        price: "$300.00 – $320.00",
        description: "A reliable push mower for maintaining a well-manicured lawn."
      },
      {
        link: `/${stringToSlug("Toro Riding Mower")}`,
        sku: "TO123465",
        colors: ["Green", "Black"],
        tag: "New",
        images: [ridingMower, ridingMower, ridingMower, ridingMower],
        img: ridingMower,
        label: "Toro Riding Mower",
        categories: "Outdoor Power Equipment, Lawn Mowers",
        rating: 4.7,
        price: "$1200.00 – $1300.00",
        description: "A comfortable riding mower for large lawns."
      },
      {
        link: `/${stringToSlug("Husqvarna Robotic Mower")}`,
        sku: "HQ123466",
        colors: ["Orange", "Black"],
        tag: "Sale",
        images: [roboticMower, roboticMower, roboticMower, roboticMower],
        img: roboticMower,
        label: "Husqvarna Robotic Mower",
        categories: "Outdoor Power Equipment, Lawn Mowers",
        rating: 4.6,
        price: "$1500.00 – $1600.00",
        description: "A robotic mower for automated lawn care."
      },
      {
        link: `/${stringToSlug("Craftsman Lawn Tractor")}`,
        sku: "CM123467",
        colors: ["Red", "Black"],
        tag: "Hot",
        images: [lawnTractor, lawnTractor, lawnTractor, lawnTractor],
        img: lawnTractor,
        label: "Craftsman Lawn Tractor",
        categories: "Outdoor Power Equipment, Lawn Mowers",
        rating: 4.5,
        price: "$1400.00 – $1500.00",
        description: "A lawn tractor for large properties and heavy-duty mowing."
      },
      {
        link: `/${stringToSlug("Black+Decker String Trimmer")}`,
        sku: "BD123468",
        colors: ["Orange", "Black"],
        tag: "New",
        images: [stringTrimer, stringTrimer, stringTrimer, stringTrimer],
        img: stringTrimer,
        label: "Black+Decker String Trimmer",
        categories: "Outdoor Power Equipment, Trimmers & Edgers",
        rating: 4.4,
        price: "$80.00 – $100.00",
        description: "A lightweight string trimmer for edging and trimming."
      },
      {
        link: `/${stringToSlug("Greenworks Hedge Trimmer")}`,
        sku: "GW123469",
        colors: ["Green", "Black"],
        tag: "Sale",
        images: [hedgeTrimmer, hedgeTrimmer, hedgeTrimmer, hedgeTrimmer],
        img: hedgeTrimmer,
        label: "Greenworks Hedge Trimmer",
        categories: "Outdoor Power Equipment, Trimmers & Edgers",
        rating: 4.3,
        price: "$90.00 – $110.00",
        description: "A cordless hedge trimmer for shaping bushes and hedges."
      },
      {
        link: `/${stringToSlug("Echo Gas Chainsaw")}`,
        sku: "EC123470",
        colors: ["Black", "Orange"],
        tag: "Hot",
        images: [gasChainsaw, gasChainsaw, gasChainsaw, gasChainsaw],
        img: gasChainsaw,
        label: "Echo Gas Chainsaw",
        categories: "Outdoor Power Equipment, Chainsaws",
        rating: 4.8,
        price: "$200.00 – $220.00",
        description: "A powerful gas chainsaw for cutting trees and logs."
      },
      {
        link: `/${stringToSlug("Poulan Electric Chainsaw")}`,
        sku: "PL123471",
        colors: ["Green", "Black"],
        tag: "New",
        images: [electricChainsaw, electricChainsaw, electricChainsaw, electricChainsaw],
        img: electricChainsaw,
        label: "Poulan Electric Chainsaw",
        categories: "Outdoor Power Equipment, Chainsaws",
        rating: 4.7,
        price: "$100.00 – $120.00",
        description: "An electric chainsaw for light-duty cutting tasks."
      }
    ],
    subLinks: [
      {
        categoryName: "Lawn Mowers",
        link: "/tricart-tools/category/lawn-mowers",
        links: [
          { label: "Push Mowers", link: "/tricart-tools/category/push-mowers" },
          { label: "Riding Mowers", link: "/tricart-tools/category/riding-mowers" },
          { label: "Robotic Mowers", link: "/tricart-tools/category/robotic-mowers" },
          { label: "Lawn Tractors", link: "/tricart-tools/category/lawn-tractors" },
        ]
      },
      {
        categoryName: "Trimmers & Edgers",
        link: "/tricart-tools/category/trimmers-edgers",
        links: [
          { label: "String Trimmers", link: "/tricart-tools/category/string-trimmers" },
          { label: "Hedge Trimmers", link: "/tricart-tools/category/hedge-trimmers" },
          { label: "Edgers", link: "/tricart-tools/category/edgers" },
          { label: "Brush Cutters", link: "/tricart-tools/category/brush-cutters" },
        ]
      },
      {
        categoryName: "Chainsaws",
        link: "/tricart-tools/category/chainsaws",
        links: [
          { label: "Gas Chainsaws", link: "/tricart-tools/category/gas-chainsaws" },
          { label: "Electric Chainsaws", link: "/tricart-tools/category/electric-chainsaws" },
          { label: "Cordless Chainsaws", link: "/tricart-tools/category/cordless-chainsaws" },
          { label: "Pole Saws", link: "/tricart-tools/category/pole-saws" },
        ]
      }
    ]
  },
  {
    label: "Accessories",
    icon: faCogs,
    link: "/tricart-tools/category/accessories",
    img: img3,
    products: [
      {
        link: `/${stringToSlug("Makita Impact Wrench XWT08Z")}`, sku: "MAK123456",
        colors: ["Black", "Blue"],
        tag: "Hot", images: [wrench, wrench, wrench, wrench], img: wrench, label: "Makita Impact Wrench XWT08Z", categories: "Power Tools, Wrenches, Automotive", rating: 4.7, price: "$200.00 – $230.00", description: "Heavy-duty impact wrench designed for automotive and industrial applications."
      },
      {
        link: `/${stringToSlug("DeWalt Drill Bits Set")}`,
        sku: "DW123472",
        colors: ["Black", "Yellow"],
        tag: "Hot",
        images: [drillBits, drillBits, drillBits, drillBits],
        img: drillBits,
        label: "DeWalt Drill Bits Set",
        categories: "Accessories, Drill Accessories",
        rating: 4.8,
        price: "$30.00 – $40.00",
        description: "A set of high-quality drill bits for various materials."
      },
      {
        link: `/${stringToSlug("Hitachi Demolition Hammer H65")}`, sku: "HIT123456",
        colors: ["Black", "Green"],
        tag: "Hot", images: [drill, drill, drill, drill], img: drill, label: "Hitachi Demolition Hammer H65", categories: "Power Tools, Hammers, Construction", rating: 4.6, price: "$450.00 – $490.00", description: "Heavy-duty demolition hammer with high impact energy for breaking concrete."
      },
      {
        link: `/${stringToSlug("Makita Driver Bits Set")}`,
        sku: "MK123473",
        colors: ["Blue", "White"],
        tag: "New",
        images: [driverBits, driverBits, driverBits, driverBits],
        img: driverBits,
        label: "Makita Driver Bits Set",
        categories: "Accessories, Drill Accessories",
        rating: 4.7,
        price: "$25.00 – $35.00",
        description: "A set of durable driver bits for fastening tasks."
      },
      {
        link: `/${stringToSlug("Bosch Hole Saw Kit")}`,
        sku: "BS123474",
        colors: ["Green", "Black"],
        tag: "Sale",
        images: [holeSawBit, holeSawBit, holeSawBit, holeSawBit],
        img: holeSawBit,
        label: "Bosch Hole Saw Kit",
        categories: "Accessories, Drill Accessories",
        rating: 4.6,
        price: "$40.00 – $50.00",
        description: "A hole saw kit for cutting clean holes in wood and metal."
      },
      {
        link: `/${stringToSlug("Ryobi Cordless Screwdriver P1810")}`, sku: "RYO123456",
        colors: ["Black", "Green"],
        tag: "Hot", images: [cordlessScrewdriver, cordlessScrewdriver, cordlessScrewdriver, cordlessScrewdriver], img: cordlessScrewdriver, label: "Ryobi Cordless Screwdriver P1810", categories: "Power Tools, Screwdrivers, Home Improvement", rating: 4.3, price: "$40.00 – $50.00", description: "Compact cordless screwdriver perfect for small DIY and home improvement tasks."
      },
      {
        link: `/${stringToSlug("Milwaukee Chuck Key")}`,
        sku: "ML123475",
        colors: ["Red", "Black"],
        tag: "Hot",
        images: [chuckKey, chuckKey, chuckKey, chuckKey],
        img: chuckKey,
        label: "Milwaukee Chuck Key",
        categories: "Accessories, Drill Accessories",
        rating: 4.5,
        price: "$10.00 – $15.00",
        description: "A chuck key for tightening and loosening drill chucks."
      },
      {
        link: `/${stringToSlug("Ryobi Drill Kit")}`,
        sku: "RY123476",
        colors: ["Green", "Black"],
        tag: "New",
        images: [drillKit, drillKit, drillKit, drillKit],
        img: drillKit,
        label: "Ryobi Drill Kit",
        categories: "Accessories, Drill Accessories",
        rating: 4.4,
        price: "$50.00 – $60.00",
        description: "A comprehensive drill kit with various accessories."
      },
      {
        link: `/${stringToSlug("DeWalt Saw Blades Set")}`,
        sku: "DW123477",
        colors: ["Yellow", "Black"],
        tag: "Hot",
        images: [sawKit, sawKit, sawKit, sawKit],
        img: sawKit,
        label: "DeWalt Saw Blades Set",
        categories: "Accessories, Saw Accessories",
        rating: 4.8,
        price: "$35.00 – $45.00",
        description: "A set of high-performance saw blades for different materials."
      },
      {
        link: `/${stringToSlug("Makita Miter Saw Stand")}`,
        sku: "MK123478",
        colors: ["Blue", "White"],
        tag: "New",
        images: [sawStand, sawStand, sawStand, sawStand],
        img: sawStand,
        label: "Makita Miter Saw Stand",
        categories: "Accessories, Saw Accessories",
        rating: 4.7,
        price: "$100.00 – $120.00",
        description: "A sturdy miter saw stand for precise cutting."
      },
      {
        link: `/${stringToSlug("Bosch Table Saw Fence")}`,
        sku: "BS123479",
        colors: ["Green", "Black"],
        tag: "Sale",
        images: [tableSaw, tableSaw, tableSaw, tableSaw],
        img: tableSaw,
        label: "Bosch Table Saw Fence",
        categories: "Accessories, Saw Accessories",
        rating: 4.6,
        price: "$80.00 – $90.00",
        description: "A table saw fence for accurate and consistent cuts."
      }
    ],
    subLinks: [
      {
        categoryName: "Drill Accessories",
        link: "/tricart-tools/category/drill-accessories",
        links: [
          { label: "Drill Bits", link: "/tricart-tools/category/drill-bits" },
          { label: "Driver Bits", link: "/tricart-tools/category/driver-bits" },
          { label: "Hole Saws", link: "/tricart-tools/category/hole-saws" },
          { label: "Chucks", link: "/tricart-tools/category/chucks" },
          { label: "Drill Kits", link: "/tricart-tools/category/drill-kits" },
        ]
      },
      {
        categoryName: "Saw Accessories",
        link: "/tricart-tools/category/saw-accessories",
        links: [
          { label: "Saw Blades", link: "/tricart-tools/category/saw-blades" },
          { label: "Miter Saw Stands", link: "/tricart-tools/category/miter-saw-stands" },
          { label: "Table Saw Fences", link: "/tricart-tools/category/table-saw-fences" },
          { label: "Saw Guides", link: "/tricart-tools/category/saw-guides" },
          { label: "Saw Dust Bags", link: "/tricart-tools/category/saw-dust-bags" },
        ]
      },
      {
        categoryName: "Batteries & Chargers",
        link: "/tricart-tools/category/batteries-chargers",
        links: [
          { label: "Lithium-Ion Batteries", link: "/tricart-tools/category/lithium-ion-batteries" },
          { label: "Battery Chargers", link: "/tricart-tools/category/battery-chargers" },
          { label: "Battery Packs", link: "/tricart-tools/category/battery-packs" },
          { label: "Power Tool Adapters", link: "/tricart-tools/category/power-tool-adapters" },
          { label: "Battery Cases", link: "/tricart-tools/category/battery-cases" },
        ]
      }
    ]
  },
  {
    label: "Brands",
    icon: faTags,
    link: "/tricart-tools/category/brands",
    img: img4,
    products: [
      {
        link: `/${stringToSlug("DeWalt Power Tools Combo Kit")}`,
        sku: "DW123480",
        colors: ["Yellow", "Black"],
        tag: "Hot",
        images: [toolKit, toolKit, toolKit, toolKit],
        img: toolKit,
        label: "DeWalt Power Tools Combo Kit",
        categories: "Brands, DeWalt",
        rating: 4.8,
        price: "$300.00 – $320.00",
        description: "A combo kit of DeWalt power tools for various tasks."
      },
      {
        link: `/${stringToSlug("Makita Cordless Tool Set")}`,
        sku: "MK123481",
        colors: ["Blue", "White"],
        tag: "New",
        images: [professionalToolSet, professionalToolSet, professionalToolSet, professionalToolSet],
        img: professionalToolSet,
        label: "Makita Cordless Tool Set",
        categories: "Brands, Makita",
        rating: 4.7,
        price: "$350.00 – $370.00",
        description: "A set of cordless tools from Makita for versatile use."
      },
      {
        link: `/${stringToSlug("Milwaukee M18 Fuel Kit")}`,
        sku: "ML123482",
        colors: ["Red", "Black"],
        tag: "Sale",
        images: [fuelKit, fuelKit, fuelKit, fuelKit],
        img: fuelKit,
        label: "Milwaukee M18 Fuel Kit",
        categories: "Brands, Milwaukee",
        rating: 4.6,
        price: "$400.00 – $420.00",
        description: "A powerful M18 Fuel kit from Milwaukee for heavy-duty tasks."
      },
      {
        link: `/${stringToSlug("Bosch Professional Tools Set")}`,
        sku: "BS123483",
        colors: ["Green", "Black"],
        tag: "Hot",
        images: [toolSet, toolSet, toolSet, toolSet],
        img: toolSet,
        label: "Bosch Professional Tools Set",
        categories: "Brands, Bosch",
        rating: 4.5,
        price: "$280.00 – $300.00",
        description: "A set of professional tools from Bosch for precision work."
      },
      {
        link: `/${stringToSlug("Ryobi One+ Starter Kit")}`,
        sku: "RY123484",
        colors: ["Green", "Black"],
        tag: "New",
        images: [ryobiKit, ryobiKit, ryobiKit, ryobiKit],
        img: ryobiKit,
        label: "Ryobi One+ Starter Kit",
        categories: "Brands, Ryobi",
        rating: 4.4,
        price: "$150.00 – $170.00",
        description: "A starter kit from Ryobi for DIY enthusiasts."
      },
      {
        link: `/${stringToSlug("DeWalt Heavy-Duty Drill")}`,
        sku: "DW123485",
        colors: ["Yellow", "Black"],
        tag: "Hot",
        images: [heavyDrill, heavyDrill, heavyDrill, heavyDrill],
        img: heavyDrill,
        label: "DeWalt Heavy-Duty Drill",
        categories: "Brands, DeWalt",
        rating: 4.8,
        price: "$180.00 – $200.00",
        description: "A heavy-duty drill from DeWalt for tough jobs."
      },
      {
        link: `/${stringToSlug("Makita Cordless Circular Saw")}`,
        sku: "MK123486",
        colors: ["Blue", "White"],
        tag: "New",
        images: [codlessSaw, codlessSaw, codlessSaw, codlessSaw],
        img: codlessSaw,
        label: "Makita Cordless Circular Saw",
        categories: "Brands, Makita",
        rating: 4.7,
        price: "$160.00 – $180.00",
        description: "A cordless circular saw from Makita for cutting wood and metal."
      },
      {
        link: `/${stringToSlug("Milwaukee Cordless Impact Wrench")}`,
        sku: "ML123487",
        colors: ["Red", "Black"],
        tag: "Sale",
        images: [codlessWrench, codlessWrench, codlessWrench, codlessWrench],
        img: codlessWrench,
        label: "Milwaukee Cordless Impact Wrench",
        categories: "Brands, Milwaukee",
        rating: 4.6,
        price: "$220.00 – $240.00",
        description: "A cordless impact wrench from Milwaukee for fastening tasks."
      }
    ],
    subLinks: [
      {
        categoryName: "Top Brands",
        link: "/tricart-tools/category/top-brands",
        links: [
          { label: "DeWalt", link: "/tricart-tools/category/dewalt" },
          { label: "Makita", link: "/tricart-tools/category/makita" },
          { label: "Milwaukee", link: "/tricart-tools/category/milwaukee" },
          { label: "Bosch", link: "/tricart-tools/category/bosch" },
          { label: "Ryobi", link: "/tricart-tools/category/ryobi" },
        ]
      }
    ]
  },
  {
    label: "Safety Gear",
    icon: faHardHat,
    link: "/tricart-tools/category/safety-gear",
    img: img5,
    products: [
      {
        link: `/${stringToSlug("3M Safety Glasses")}`,
        sku: "3M123488",
        colors: ["Clear", "Smoke"],
        tag: "Hot",
        images: [safetyGlasses, safetyGlasses, safetyGlasses, safetyGlasses],
        img: safetyGlasses,
        label: "3M Safety Glasses",
        categories: "Safety Gear, Protective Equipment",
        rating: 4.8,
        price: "$10.00 – $15.00",
        description: "Safety glasses from 3M for eye protection."
      },
      {
        link: `/${stringToSlug("Ironclad Work Gloves")}`,
        sku: "IC123489",
        colors: ["Black", "Gray"],
        tag: "New",
        images: [gloves, gloves, gloves, gloves],
        img: gloves,
        label: "Ironclad Work Gloves",
        categories: "Safety Gear, Protective Equipment",
        rating: 4.7,
        price: "$20.00 – $25.00",
        description: "Durable work gloves from Ironclad for hand protection."
      },
      {
        link: `/${stringToSlug("Honeywell Hard Hat")}`,
        sku: "HW123490",
        colors: ["White", "Yellow"],
        tag: "Sale",
        images: [hat, hat, hat, hat],
        img: hat,
        label: "Honeywell Hard Hat",
        categories: "Safety Gear, Protective Equipment",
        rating: 4.6,
        price: "$30.00 – $35.00",
        description: "A hard hat from Honeywell for head protection."
      },
      {
        link: `/${stringToSlug("Howard Leight Ear Protection")}`,
        sku: "HL123491",
        colors: ["Green", "Black"],
        tag: "Hot",
        images: [earMuff, earMuff, earMuff, earMuff],
        img: earMuff,
        label: "Howard Leight Ear Protection",
        categories: "Safety Gear, Protective Equipment",
        rating: 4.5,
        price: "$15.00 – $20.00",
        description: "Ear protection from Howard Leight for noise reduction."
      },
      {
        link: `/${stringToSlug("Carhartt Coveralls")}`,
        sku: "CT123492",
        colors: ["Brown", "Black"],
        tag: "New",
        images: [coverall, coverall, coverall, coverall],
        img: coverall,
        label: "Carhartt Coveralls",
        categories: "Safety Gear, Workwear",
        rating: 4.4,
        price: "$50.00 – $60.00",
        description: "Durable coveralls from Carhartt for full-body protection."
      },
      {
        link: `/${stringToSlug("Timberland Work Boots")}`,
        sku: "TB123493",
        colors: ["Brown", "Black"],
        tag: "Sale",
        images: [boots, boots, boots, boots],
        img: boots,
        label: "Timberland Work Boots",
        categories: "Safety Gear, Workwear",
        rating: 4.3,
        price: "$100.00 – $120.00",
        description: "Comfortable work boots from Timberland for all-day wear."
      },
      {
        link: `/${stringToSlug("Reflective High-Vis Vest")}`,
        sku: "RH123494",
        colors: ["Orange", "Yellow"],
        tag: "Hot",
        images: [subCat1, subCat1, subCat1, subCat1],
        img: subCat1,
        label: "Reflective High-Vis Vest",
        categories: "Safety Gear, Workwear",
        rating: 4.2,
        price: "$20.00 – $25.00",
        description: "A high-visibility vest for safety in low-light conditions."
      },
      {
        link: `/${stringToSlug("Leather Tool Belt")}`,
        sku: "LT123495",
        colors: ["Brown", "Black"],
        tag: "New",
        images: [toolBelt, toolBelt, toolBelt, toolBelt],
        img: toolBelt,
        label: "Leather Tool Belt",
        categories: "Safety Gear, Workwear",
        rating: 4.1,
        price: "$40.00 – $50.00",
        description: "A durable leather tool belt for carrying tools."
      }
    ],
    subLinks: [
      {
        categoryName: "Protective Equipment",
        link: "/tricart-tools/category/protective-equipment",
        links: [
          { label: "Safety Glasses", link: "/tricart-tools/category/safety-glasses" },
          { label: "Work Gloves", link: "/tricart-tools/category/work-gloves" },
          { label: "Hard Hats", link: "/tricart-tools/category/hard-hats" },
          { label: "Ear Protection", link: "/tricart-tools/category/ear-protection" },
        ]
      },
      {
        categoryName: "Workwear",
        link: "/tricart-tools/category/workwear",
        links: [
          { label: "Coveralls", link: "/tricart-tools/category/coveralls" },
          { label: "Work Boots", link: "/tricart-tools/category/work-boots" },
          { label: "High-Visibility Vests", link: "/tricart-tools/category/high-vis-vests" },
          { label: "Tool Belts", link: "/tricart-tools/category/tool-belts" },
        ]
      }
    ]
  }
];


export const toolsNavlinks = [
  {
    label: "Products",
    link: "/tricart-tools/category/power-tools",
    subLinks: [
      {
        categoryName: "Drills & Drivers",
        links: [
          { label: "Cordless Drills", link: "/cordless-drills" },
          { label: "Impact Drivers", link: "/impact-drivers" },
          { label: "Hammer Drills", link: "/hammer-drills" },
          { label: "Right Angle Drills", link: "/right-angle-drills" },
          { label: "Drill Presses", link: "/drill-presses" },
        ],
      },
      {
        categoryName: "Protective Equipment",
        links: [
          { label: "Safety Glasses", link: "/safety-glasses" },
          { label: "Work Gloves", link: "/work-gloves" },
          { label: "Hard Hats", link: "/hard-hats" },
          { label: "Ear Protection", link: "/ear-protection" },
          { label: "Work Boots", link: "/work-boots" },
        ],
      },
      {
        categoryName: "Saw Accessories",
        links: [
          { label: "Saw Blades", link: "/tricart-tools/category/saw-blades" },
          { label: "Miter Saw Stands", link: "/tricart-tools/category/miter-saw-stands" },
          { label: "Table Saw Fences", link: "/tricart-tools/category/table-saw-fences" },
          { label: "Saw Guides", link: "/tricart-tools/category/saw-guides" },
          { label: "Saw Dust Bags", link: "/tricart-tools/category/saw-dust-bags" },
        ],
      },
      {
        categoryName: "Trimmers & Edgers",
        links: [
          { label: "String Trimmers", link: "/string-trimmers" },
          { label: "Hedge Trimmers", link: "/hedge-trimmers" },
          { label: "Edgers", link: "/edgers" },
          { label: "Brush Cutters", link: "/brush-cutters" },
        ],
      },
    ],
  },
  {
    label: "Accessories",
    link: "/tricart-tools/category/accessories",
    subLinks: [
      {
        categoryName: "Drill Accessories",
        links: [
          { label: "Drill Bits", link: "/drill-bits" },
          { label: "Driver Bits", link: "/driver-bits" },
          { label: "Hole Saws", link: "/hole-saws" },
          { label: "Chucks", link: "/chucks" },
          { label: "Drill Kits", link: "/drill-kits" },
        ],
      },
      {
        categoryName: "Saw Accessories",
        links: [
          { label: "Saw Blades", link: "/saw-blades" },
          { label: "Miter Saw Stands", link: "/miter-saw-stands" },
          { label: "Table Saw Fences", link: "/table-saw-fences" },
          { label: "Saw Guides", link: "/saw-guides" },
          { label: "Saw Dust Bags", link: "/saw-dust-bags" },
        ],
      },
      {
        categoryName: "Batteries & Chargers",
        links: [
          { label: "Lithium-Ion Batteries", link: "/lithium-ion-batteries" },
          { label: "Battery Chargers", link: "/battery-chargers" },
          { label: "Battery Packs", link: "/battery-packs" },
          { label: "Power Tool Adapters", link: "/power-tool-adapters" },
          { label: "Battery Cases", link: "/battery-cases" },
        ],
      },
    ],
  },
  {
    label: "Brands",
    link: "/tricart-tools/category/brands",
    subLinks: [
      {
        categoryName: "Top Brands",
        links: [
          { label: "DeWalt", link: "/dewalt" },
          { label: "Makita", link: "/makita" },
          { label: "Milwaukee", link: "/milwaukee" },
          { label: "Bosch", link: "/bosch" },
          { label: "Ryobi", link: "/ryobi" },
        ],
      },
    ],
  },
  {
    label: "About",
    link: "/tricart-tools/about-us",
  },
  {
    label: "Contact",
    link: "/tricart-tools/contact-us",
  },
];
