import pant from "../assets/denim.jpeg";
import shoes from "../assets/sneaker.jpeg";
import Accesories from "../assets/cap.jpeg";
import shirt from "../assets/newshirt.jpeg";

export const sliderItems = [
  {
    id: 1,
    img: "https://i.ibb.co/XsdmR2c/1.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];

export const categories = [
  {
    id: 1,
    img: shirt,
    title: "shirts",
    url: "../assets/newshirt.jpeg",
  },
  {
    id: 2,
    img: pant,
    title: "pants",
    url: "https://images.pexels.com/photos/10600596/pexels-photo-10600596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    img: shoes,
    title: "shoes",
    url: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 4,
    img: Accesories,
    title: "accesories",
    url: "https://images.pexels.com/photos/13387446/pexels-photo-13387446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];


export const popularProducts = [
  {
    id: 1,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
  },
  {
    id: 3,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
  },
  {
    id: 4,
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
  },
  {
    id: 5,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
  },
  {
    id: 6,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },
  {
    id: 7,
    img: "https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png",
  },
  {
    id: 8,
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
  },
];


export const filter = [
  {
    name: "Sort By",
    dropdownName: "sortby",
    dropdownList: [
      { name: "toprated", value: "Top Rated" },
      { name: "lowtohigh", value: "Price Low-High" },
      { name: "hightolow", value: "Price High-Low" },
    ],
  },
  {
    name: "Price",
    dropdownName: "price",
    dropdownList: [
      { name: "25_50", value: "$20 - $50" },
      { name: "50_100", value: "$50 - $100" },
      { name: "100_150", value: "$100 - $150" },
    ],
  },
  {
    name: "Color",
    dropdownName: "color",
    dropdownList: [
      { name: "red", value: "Red" },
      { name: "black", value: "Black" },
      { name: "white", value: "White" },
      { name: "green", value: "Green" },
      { name: "blue", value: "Blue" },
    ],
  },
]; 

// dropdownList: [{name:"toprated",value:"Top Rated"},{name:"lowtohigh",value:"Price Low-High"},{name:"hightolow",value:"Price High-Low"}],