import Footer from "../Components/Footer";
import "../Styles/Home.css";
import Navigation_bar from "../Components/Navbar";
import React, { useEffect, useState } from "react";
import Side_tab from "../Components/Side_tab";
import Card_home from "../Components/Cards";
import getProducts from "../Services/getProducts";
import Checkout from "../Components/Checkout";

const Home = () => {
  const [display, setDisplay] = useState("Promotions");
  const [products, setProducts] = useState([]);

  //Hook del filter
  const [Filter_Data, setFilter_Data] = useState(false);
  //Funcion del filter
  const setData=(data)=>{
    setFilter_Data(data)
  }

  //Funciones que cambian el valor de los hooks
  const displayCheckout = () => setDisplay("Checkout");
  const displayEverything = () => setDisplay("Everything");
  const displayPromotions = () => setDisplay("Promotions");
  const displaySweet = () => setDisplay("Sweet");
  const displaySalty = () => setDisplay("Salty");
  const displayItems = () => setDisplay("Items");
  const displayCombos = () => setDisplay("Combos");
  const displayAnimation = () => setDisplay("Animation");
  const displayInflables = () => setDisplay("Inflables");
  const displayEvents = () => setDisplay("Events");

  //UseEffect que mantiene los datos de los productos actualizados
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts();
  }, []);
  //Carga las cartas con todos los products
  const loadCards = () => {
    return products.map((product) => (
      <Card_home product={product} key={product.id} />
    ));
  };

  //Crea las cartas para las promociones
  const Load_promos=()=>{
    if (products!=[]) {
      let promos=products.filter((product)=> (product.onsale!=false||product.salequantity!=false))     
      return promos.map((product)=>(
        <Card_home product={product} key={product.id}/>)
      )
    }
  };

  //Crea las cartas de los dulces
  const Load_sweets=()=>{
    if (products!=[]) {
      let promos=products.filter((product)=> (product.category=="Dulces"))     
      return promos.map((product)=>(
        <Card_home product={product} key={product.id}/>)
      )
    }
  };
  //Crea las cartas de los salados
  const Load_salty=()=>{
    if (products!=[]) {
      let promos=products.filter((product)=> (product.category=="Salados"))     
      return promos.map((product)=>(
        <Card_home product={product} key={product.id}/>)
      )
    }
  };

  //Crea las cartas de los Recuerdos
  const Load_recuerdos=()=>{
    if (products!=[]) {
      let promos=products.filter((product)=> (product.category=="Recuerdos"))     
      return promos.map((product)=>(
        <Card_home product={product} key={product.id}/>)
      )
    }
  };

  //Crea las cartas de los Combos
  const Load_Combos=()=>{
    if (products!=[]) {
      let promos=products.filter((product)=> (product.category=="Combos"))     
      return promos.map((product)=>(
        <Card_home product={product} key={product.id}/>)
      )
    }
  };

   //Crea las cartas de las Animaciones
   const Load_Animations=()=>{
    if (products!=[]) {
      let promos=products.filter((product)=> (product.category=="Animacion"))     
      return promos.map((product)=>(
        <Card_home product={product} key={product.id}/>)
      )
    }
  };

  //Crea las cartas de los Inflables
  const Load_Inflables=()=>{
    if (products!=[]) {
      let promos=products.filter((product)=> (product.category=="Inflable"))     
      return promos.map((product)=>(
        <Card_home product={product} key={product.id}/>)
      )
    }
  };

  //Crea las cartas de los Eventos
  const Load_Events=()=>{
    if (products!=[]) {
      let promos=products.filter((product)=> (product.category=="Evento"))     
      return promos.map((product)=>(
        <Card_home product={product} key={product.id}/>)
      )
    }
  };

  const renderContent = () => {
    if (Filter_Data) {
      let filtrado= products.filter(producto=>
        producto.name.toLowerCase().includes(Filter_Data.toLowerCase())||
        producto.category.toLowerCase().includes(Filter_Data.toLowerCase()))
        return filtrado.map((product)=>(
          <Card_home product={product} key={product.id}/>)
        )
    } 
    switch (display) {
      case "Checkout":
        return <Checkout Done={displayEverything} />;
      case "Everything":
        return loadCards();
      case "Promotions":
        return Load_promos();
      case "Sweet":
        return Load_sweets();
      case "Salty":
        return Load_salty();
      case "Items":
        return Load_recuerdos();
      case "Combos":
        return Load_Combos();
      case "Animation":
        return Load_Animations();
      case "Inflables":
        return Load_Inflables();
      case "Events":
        return Load_Events();
      default:
        return null;
    }
  };

  
useEffect(() => {
  //Actualiza display si Filter_Data tiene contenido
  if (Filter_Data) {
    setDisplay("Everything");
  } else {
    setDisplay("Promotions");
  }
}, [Filter_Data]);

  return (
    <>
      <div id="home_body">
        <div id="nav">
          <Navigation_bar data={setData} checkout={displayCheckout} />
        </div>
        <div id="sideTab">
          <Side_tab
            everything={displayEverything}
            promotion={displayPromotions}
            sweet={displaySweet}
            salty={displaySalty}
            item={displayItems}
            combo={displayCombos}
            animation={displayAnimation}
            inflable={displayInflables}
            event={displayEvents}
          />
        </div>
        <div id="products_card">{renderContent()}</div>
        <div id="Footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home