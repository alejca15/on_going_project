import Footer from "../Components/Footer";
import "../Styles/Home.css";
import Navigation_bar from "../Components/Navbar";
import React, { useEffect, useState } from "react";
import Side_tab from "../Components/Side_tab";
import Card_home from "../Components/Cards";
import getProducts from "../Services/getProducts";
import Checkout from "../Components/Checkout";

const Home = () => {
  const [display, setDisplay] = useState("Everything");
  const [products, setProducts] = useState([]);

  //Funciones que cambian el valor de los hooks
  const displayCheckout = () => setDisplay("Checkout");
  const displayEverything = () => setDisplay("Everything");
  const displayPromotions = () => setDisplay("Promotions");
  const displaySweet = () => setDisplay("Sweet");
  const displaySalty = () => setDisplay("Salty");
  const displayItems = () => setDisplay("Items");
  const displayThemes = () => setDisplay("Themes");
  const displayCombos = () => setDisplay("Combos");
  const displayAnimation = () => setDisplay("Animation");
  const displayInflables = () => setDisplay("Inflables");
  const displayEvents = () => setDisplay("Events");

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

  const loadCards = () => {
    return products.map((product) => (
      <Card_home product={product} key={product.id} />
    ));
  };

  const renderContent = () => {
    switch (display) {
      case "Checkout":
        return <Checkout Done={displayEverything} />;
      case "Everything":
        return loadCards();
      case "Promotions":
        return <>Promos</>;
      case "Sweet":
        return <>Sweets</>;
      case "Salty":
        return <>Salty</>;
      case "Items":
        return <>Recuerdos</>;
      case "Themes":
        return <>Themes</>;
      case "Combos":
        return <>Combos</>;
      case "Animation":
        return <>Animations</>;
      case "Inflables":
        return <>Inflables</>;
      case "Events":
        return <>Events</>;
      default:
        return null;
    }
  };

  return (
    <>
      <div id="home_body">
        <div id="nav">
          <Navigation_bar checkout={displayCheckout} />
        </div>
        <div id="sideTab">
          <Side_tab
            everything={displayEverything}
            promotion={displayPromotions}
            sweet={displaySweet}
            salty={displaySalty}
            item={displayItems}
            theme={displayThemes}
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