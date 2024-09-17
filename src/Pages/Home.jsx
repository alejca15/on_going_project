import Footer from "../Components/Footer";
import "../Styles/Home.css";
import Navigation_bar from "../Components/Navbar";
import React, { useEffect, useState } from "react";
import Side_tab from "../Components/Side_tab";
import Card_home from "../Components/Cards";
import getProducts from "../Services/getProducts";
import Checkout from "../Components/Checkout";

const Home = () => {
  //Hooks
  const [display, setdisplay] = useState("Everything");
  const [products, setProducts] = useState([]);

  //Funciones que cambian el valor de los hooks
  let display_checkout = () => {
    setdisplay("Checkout");
  };
  let display_everything = () => {
    setdisplay("Everything");
  };
  let display_promotion = () => {
    setdisplay("Promotions");
  };
  let display_sweet = () => {
    setdisplay("Sweet");
  };
  let display_salty = () => {
    setdisplay("Salty");
  };
  let display_items = () => {
    setdisplay("Items");
  };
  let display_themes = () => {
    setdisplay("Themes");
  };
  let display_combos = () => {
    setdisplay("Combos");
  };
  let display_animation = () => {
    setdisplay("Animation");
  };
  let display_inflables = () => {
    setdisplay("Inflables");
  };
  let display_events = () => {
    setdisplay("Events");
  };

  //useEffect que trae los productos del db.json
  useEffect(() => {
    var fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts();
  }, []);

  //Funcion que despliega las cartas
  let loadCards = () => {
    if (products != []) {
      return products.map((product) => (
        <Card_home product={product} key={product.id} />
      ));
    }
  };

  //Funcion que despliega las promos
  let load_promos = () => {
    if (products != []) {
      return <>Promos</>;
    }
  };
  //Funion que despliega los dulces
  let load_sweets = () => {
    if (products != []) {
      return <>sweets</>;
    }
  };

  //Funcion que despliega los salados
  let load_salty = () => {
    if (products != []) {
      return <>Salty</>;
    }
  };

  //Funcion que carga los recuerdos
  let load_items = () => {
    if (products != []) {
      return <>Recuerdos</>;
    }
  };

  //Funcion que carga las tematicas
  let load_themes = () => {
    if (products != []) {
      return <>Themes</>;
    }
  };

  //Funcion que carga los combos
  let load_combos = () => {
    if (products != []) {
      return <>Combos</>;
    }
  };

  //Funcion que carga las animaciones
  let load_animations = () => {
    if (products != []) {
      return <>Animations</>;
    }
  };

  //Funcion que carga los inflables
  let load_inflables = () => {
    if (products != []) {
      return <>Inflables</>;
    }
  };

  let load_events = () => {
    if (products != []) {
      return <>Events</>;
    }
  };

  //Funcion que muestra un contenedor dependiendo del valor del hook
  const show_cont = () => {
    if (display == "Checkout") {
      return Checkout();
    }
    if (display == "Everything") {
      return loadCards();
    }
    if (display == "Promotions") {
      return load_promos();
    }
    if (display == "Sweet") {
      return load_sweets();
    }
    if (display == "Salty") {
      return load_salty();
    }
    if (display=="Items") {
      return load_items()
    }
    if (display=="Themes") {
      return load_themes()
    }
    if (display=="Combos") {
      return load_combos()
    }
    if (display=="Animation") {
      return load_animations()
    }
    if (display=="Inflables") {
      return load_inflables()
    }
    if (display=="Events") {
      return load_events()
    }
  };

  return (
    <>
      <div id="home_body">
        <div id="nav">
          <Navigation_bar checkout={display_checkout} />
        </div>
        <div id="sideTab">
          <Side_tab
            everything={display_everything}
            promotion={display_promotion}
            sweet={display_sweet}
            salty={display_salty}
            item={display_items}
            theme={display_themes}
            combo={display_combos}
            animation={display_animation}
            inflable={display_inflables}
            event={display_events}
          />
        </div>
        <div id="products_card">{show_cont()}</div>
        <div id="Footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
