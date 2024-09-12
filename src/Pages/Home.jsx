import Footer from "../Components/Footer";
import "../Styles/Home.css";
import Navigation_bar from "../Components/Navbar";
import React, {useEffect, useState } from "react";
import Side_tab from "../Components/Side_tab";
import Card_home from "../Components/Cards";
import getProducts from "../Services/getProducts"
import { Checkout } from "../Components/Checkout";

const Home = () => {

  //Hooks
  const [display, setdisplay] = useState(true)
  const [products,setProducts]=useState([]);

  //Local stora que setea el valor del usuario activo
  //en un array vacio si el usuario no ha iniciado sesión
  let inactive=false;
  let is_user_active=JSON.parse(localStorage.getItem("User"));
 
  if (is_user_active==null||is_user_active==undefined) {
    localStorage.setItem("User", JSON.stringify(inactive));
  }
  
  let checkout_active=()=>{
    setdisplay(false)
  }
  let checkout_inactive=()=>{
    setdisplay(true)
  }
  

  useEffect(()=>{   
    var fetchProducts= async()=>{
      try {
        const response=await getProducts();      
        setProducts(response)
      } catch (error) {
        console.error("Error fetching Products",error)
      }
    }
    fetchProducts()
  },[])

  //Funcion que despliega las cartas
  let loadCards =() => {
    if (products!=[]) {
      return products.map((product) => <Card_home product={product} key={product.id} />);
    }
  };

  return (
    <>
      <div id="home_body">
        <div id="nav">
          <Navigation_bar Show={checkout_active} No_Show={checkout_inactive} Display={display}/>
        </div>
        <div id="sideTab">
          <Side_tab />
        </div>
        <div id="products_card">{display ? loadCards() : Checkout()}</div>
        <div id="Footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

