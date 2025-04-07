import home1 from '../static/toolsTemp.png'
import home2 from '../static/decorTemp.png'
import home3 from '../static/fashionTemp.png'
import home4 from '../static/electronicsTemp.png'
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