import { stringToSlug } from '@/services/generalService'
import subCat1 from '../static/subCat1.png'


export const sidebarData = [
    { name: "Dashboard", link: "/account/my-account" },
    { name: "Orders", link: "/account/orders" },
    { name: "Addresses", link: "/account/addresses" },
    { name: "Account Details", link: "/account/account-details" },
    { name: "Wishlist", link: "/account/wishlist" },
    { name: "Logout", link: "/" },
]



export const wishlistProducts = [
    {
      link: `/tricart-tools/product/${stringToSlug("Makita Impact Driver")}`,
      sku: "MK123457",
      colors: ["Blue", "White"],
      tag: "New",
      images: [subCat1, subCat1, subCat1, subCat1],
      img: subCat1,
      label: "Makita Impact Driver",
      categories: "Power Tools, Drills, Handheld Tools",
      rating: 4.7,
      price: "$130.00 – $150.00",
      description: "A compact and lightweight impact driver for fastening tasks."
    },
  ]