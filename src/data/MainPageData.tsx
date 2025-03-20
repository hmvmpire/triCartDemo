import home1 from '../static/toolsTemp.png'
import home2 from '../static/decorTemp.png'
import home3 from '../static/fashionTemp.png'
import home4 from '../static/electronicsTemp.png'
import listing1 from '../static/listing1.png'
import listing2 from '../static/listing2.png'
import listing3 from '../static/listing3.png'
import listing4 from '../static/listing4.png'
import detail1 from '../static/detail1.png'
import detail2 from '../static/detail2.png'
import detail3 from '../static/detail3.png'
import detail4 from '../static/detail4.png'
import { faCashRegister, faChair, faEnvelope, faFileContract, faHome, faInfoCircle, faMobileAlt, faProjectDiagram, faShieldAlt, faShirt, faShoppingCart, faSlidersH, faTools, faUserCog, faUserLock } from '@fortawesome/free-solid-svg-icons'
import {
  faReact,           // NextJS
  faJs,              // TypeScript
  faFontAwesome,     // FontAwesome
  faCss3Alt,         // TailwindCSS
} from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons'

export const homePages = [
  { name: "Home Page 1", image: home1, slug: "/tricart-electronics" },
  { name: "Home Page 2", image: home2, slug: "/tricart-tools" },
  { name: "Home Page 3", image: home3, slug: "/tricart-home-decore" },
  { name: "Home Page 4", image: home4, slug: "/tricart-fashion" },
]


export const listingPages = [
  { name: "Listing Page 1", image: listing1, slug: "/tricart-electronics/category/screen-protectors" },
  { name: "Listing Page 2", image: listing2, slug: "/tricart-tools/category/home-decore" },
  { name: "Listing Page 3", image: listing3, slug: "/tricart-home-decore/category/furniture" },
  { name: "Listing Page 4", image: listing4, slug: "/tricart-fashion/category/tables-desks" },
]

export const detailPages = [
  { name: "Detail Page 1", image: detail1, slug: "/tricart-electronics/product/anker-322-usb-c-to-usb-c-cable-1-8m-braided" },
  { name: "Detail Page 2", image: detail2, slug: "/tricart-tools/product/cimota-upholstered-armchair" },
  { name: "Detail Page 3", image: detail3, slug: "/tricart-home-decore/product/cimota-upholstered-armchair" },
  { name: "Detail Page 4", image: detail4, slug: "/tricart-fashion/product/cimota-upholstered-armchair" },
]



export const otherPages = [
  { icon: faEnvelope, title: "Contact Us", slug: "/contact-us" },
  { icon: faInfoCircle, title: "About Us", slug: "/about-us" },
  { icon: faShieldAlt, title: "Privacy Policy", slug: "/privacy-policy" },
  { icon: faFileContract, title: "Terms & Conditions", slug: "/terms-&-conditions" },
  { icon: faShoppingCart, title: "Cart", slug: "/cart" },
  { icon: faCashRegister, title: "Checkout", slug: "/checkout" },
  { icon: faUserLock, title: "Authentication", slug: "/account/authentication" },
  { icon: faUserCog, title: "Account Dashboard", slug: "/account/my-account" },
];

export const pagesLength = [
  { name: "Home Pages", length: "4" },
  { name: "Listing Pages", length: "4" },
  { name: "Detail Pages", length: "4" },
  { name: "Other Pages", length: "8+" },
]

export const templates = [
  { name: "Power Tools", link: "/tricart-tools", icon: faTools },
  { name: "Home Decor", link: "/tricart-home-decore", icon: faChair },
  { name: "Fashion", link: "/tricart-fashion", icon: faShirt },
  { name: "Electronics", link: "/tricart-electronics", icon: faMobileAlt },
]

export const techs = [
  {
    title: "NextJS",
    icon: faReact,
    description: "A powerful React framework for server-side rendering and static site generation.",
  },
  {
    title: "TypeScript",
    icon: faJs,
    description: "A strongly typed superset of JavaScript for building scalable applications.",
  },
  {
    title: "Redux",
    icon: faProjectDiagram,
    description: "A state management library for predictable and centralized application state.",
  },
  {
    title: "FontAwesome",
    icon: faFontAwesome,
    description: "A popular icon library for adding scalable vector icons to your projects.",
  },
  {
    title: "TailwindCSS",
    icon: faCss3Alt,
    description: "A utility-first CSS framework for rapidly building custom designs.",
  },
  {
    title: "React-Toastify",
    icon: faBell,
    description: "A lightweight and customizable toast notification library for React.",
  },
  {
    title: "React Multi Carousel",
    icon: faSlidersH,
    description: "A flexible and responsive carousel component for React applications.",
  },
];

export const commonNavbarLinks = [
  {
    label: "Demo", icon: faHome, path: "#demo"
  },
  {
    label: "Features", icon: faHome, path: "#features"
  },
  {
    label: "Tech", icon: faHome, path: "#tech"
  },
  {
    label: "pages", icon: faHome, path: "#pages"
  },
]