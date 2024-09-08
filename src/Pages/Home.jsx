import Footer from "../Components/Footer";
import "../Styles/Home.css";
import Navigation_bar from "../Components/Navbar";
import React, { useEffect, useState } from "react";
import Side_tab from "../Components/Side_tab";
import Card_home from "../Components/Cards";
import getProducts from "../Services/getProducts"


export const Home = () => {

  const [products,setProducts]=useState([]);

  useEffect(()=>{
    const fetchProducts= async()=>{
      try {
        const response=await getProducts();
        setProducts(response)
      } catch (error) {
        console.error("Error fetching Products",error)
      }
    }
    fetchProducts()
  },[])

  let loadCards =() => {
    
    if (products!=[]) {
      return products.map((product) => <Card_home name={product.name} category={product.category} product={product} key={product.id} />);
    }
  };

  return (
    <>
      <div id="home_body">
        <div id="nav">
          <Navigation_bar />
        </div>
        <div id="sideTab">
          <Side_tab />
        </div>
        <div id="products_card">{loadCards()}</div>
        <div id="Footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
