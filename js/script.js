"use: strict"
import { getProductCards } from "../component/productCard.js"
import { getUserCards } from "../component/userCard.js"
import{fetchData} from "../store/fetchApi.js"

const products= await fetchData("products");
const users= await fetchData("users")
const renderProducts=document.querySelector(".products");
const renderUsers=document.querySelector(".users")

products.map((p)=>{
    renderProducts.innerHTML +=getProductCards(p);
});

users.map((u)=>{
    renderUsers.innerHTML +=getUserCards(u);
});