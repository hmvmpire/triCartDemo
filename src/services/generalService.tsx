import { categoriesData } from "@/data/electronicsData";
import { homeDecorCategories } from "@/data/homeDecorData";
import { fashionCategoriesData } from "@/data/fashionData";
import { productType1, productType2 } from "@/Types/productPropsTypes";

export function stringToSlug(str: string) {
  return str
    .toLowerCase() // Convert to lowercase
    .trim() // Remove any leading or trailing spaces
    .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with a hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading or trailing hyphens
}



export const handleSmoothScroll = (event: any) => {
  event.preventDefault(); // Prevent default link behavior
  const targetId = event.currentTarget.getAttribute("href").substring(1); // Get the ID from href
  const targetSection = document.getElementById(targetId); // Find the target section

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
  } else {
    console.warn(`Section with id "${targetId}" not found.`);
  }
};



export const getElectornicsDataByTag = (tag: string) => {
  let arr: productType1[] = [];
  categoriesData.forEach((item) => {
    if (item && item.products && item.products.length > 0) {
      item.products.forEach((product) => {
        if (product.tag === tag) {
          arr.push(product as productType1);
        }
      })
    }
  });
  return arr;
}

export const getElectornicsDataSimilarProducts = (categoryName: string, productName: string) => {
  let arr: productType1[] = [];
  let res = categoriesData.find((item) => item.label === categoryName);
  if (res && res.products && res.products.length > 0) {
    let result = res.products.filter((product) => product.label !== productName)
    arr = result as productType1[];
  }
  return arr;
}



export const getHomeDecoreDataSimilarProducts = (categoryName: string, productName: string) => {
  let arr: productType2[] = [];
  let res = homeDecorCategories.find((item) => item.label === categoryName);
  if (res && res.products && res.products.length > 0) {
    let result = res.products.filter((product) => product.label !== productName)
    arr = result as productType2[];
  }
  return arr;
}

export const getFashionDataSimilarProducts = (categoryName: string, productName: string) => {
  let arr: productType2[] = [];
  let res = fashionCategoriesData.find((item) => item.label === categoryName);
  if (res && res.products && res.products.length > 0) {
    let result = res.products.filter((product) => product.label !== productName)
    arr = result as productType2[];
  }
  return arr;
}

