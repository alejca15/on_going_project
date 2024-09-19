import Navbar_admin from "../Components/Navbar_admin";
import "../Styles/Admin.css";
import Footer from "../Components/Footer";
import { useCallback, useEffect, useState } from "react";
import Cards_admin from "../Components/Cards_admin";
import getProducts from "../Services/getProducts";
import Side_tab_products from "../Components/Side_tab_products";
import Side_tab_promos from "../Components/Side_tab_promos";

const Admin_page = () => {
    const [Display, setDisplay] = useState("Products")
    const [products, setProducts] = useState([]);


    const show_product=()=>{
      setDisplay("Products")
    }
    const show_promos=()=>{
      setDisplay("Promos")
    }
    const show_orders=()=>{
      setDisplay("Orders")
    }

    const display_sideTab=()=>{
      if (Display=="Products") {
        return <Side_tab_products/>
      }
      if (Display=="Promos") {
        return <Side_tab_promos/>
      }
    }

     //useEffect que trae los productos del db.json
     const load_product=useCallback(()=>{
      const fetchProducts = async () => {
        try {
          const response = await getProducts();
          setProducts(response);
        } catch (error) {
          console.error("Error fetching Products", error);
        }
      };
      fetchProducts()
     })
    
    useEffect(()=>load_product(),[load_product])
    
  const Load_products = () => {
    if (products != []) {
      return products.map((product) => (
        <Cards_admin product={product} key={product.id} />
      ));
    }
  };
  
  const Load_promos=()=>{
    return <p>Promos</p>
  }

  const Load_orders=()=>{
    return <p>Orders</p>
  }


  const display_main_cont=()=>{
    if (Display=="Products") {
      return Load_products()
    }
    if (Display=="Promos") {
      return Load_promos()
    }
    if (Display=="Orders") {
      return Load_orders()
    }
  }
  return (
    <>
      <div id="admin_body">
        <div id="nav_cont">
          <Navbar_admin show_orders={show_orders} show_products={show_product} show_promos={show_promos} />
        </div>
        <div id="side_tab_admin_main_cont">
           {display_sideTab()}
        </div>
        <div id="admin_main_cont">{display_main_cont()}</div>
        <div id="footer_cont">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Admin_page;
