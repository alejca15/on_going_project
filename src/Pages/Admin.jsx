import Navbar_admin from "../Components/Navbar_admin";
import "../Styles/Admin.css";
import Footer from "../Components/Footer";
import { useCallback, useEffect, useState } from "react";
import Cards_admin from "../Components/Cards_admin";
import getProducts from "../Services/getProducts";
import Side_tab_products from "../Components/Side_tab_products";
import Side_tab_promos from "../Components/Side_tab_promos";
import Order from "../Components/Orders";
import getOrders from "../Services/getOrders";
import Side_tab_orders from "../Components/side_tab_orders";
import Edit_modal from "../Components/Edit_modal";
import Edit_promo_modal from "../Components/Edit_promo_modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin_page = () => {

  //Hooks para los modales
  const [modalShow, setModalShow] = useState(false);
  const [PromomodalShow, setPromoModalShow] = useState(false);

  //Hooks
  const [Display, setDisplay] = useState("Products");
  const [products, setProducts] = useState([]);
  const [orders, setorders] = useState([]);
  const [EditingProduct, setEditingProduct] = useState("");
  const [Filter, setFilter] = useState("");

  //Toastify
  const notify_deleted = () => toast.error("Producto Eliminado");
  const order_accepted = () => toast.error("Orden Aceptada");
  const order_denied = () => toast.error("Orden Rechazada");

  //Funcion que toma el dato del input del sidetab y lo pasa al hook Filter
  const Filter_promo=(dato)=>{
    setFilter(dato)
  }
  //Funcion que muestra el modal del boton de editar
  const display_modal = (item) => {
    setModalShow(true);
    setEditingProduct(item);
  };
  //Funcion que muestra el modal del boton de editar Promos
  const display_promo_modal = (item) => {
    setPromoModalShow(true);
    setEditingProduct(item);
  };

  //Funciones que sirven para modificar el dato del hook desde el Navbar
  const show_product = () => {
    setDisplay("Products");
  };
  const show_promos = () => {
    setDisplay("Promos");
  };
  const show_orders = () => {
    setDisplay("Orders");
  };
  const show_accepted_orders = () => {
    setDisplay("Accepted_Orders");
  };
  const show_denied_orders = () => {
    setDisplay("Denied_Orders");
  };

  //Funcion que basado en el hook muestra un sidetab distinto
  const display_sideTab = () => {
    if (Display == "Products") {
      return <Side_tab_products />;
    }
    if (Display == "Promos") {
      return <Side_tab_promos />;
    }
    if (Display == "Orders"||Display=="Accepted_Orders"||Display=="Denied_Orders") {
      return <Side_tab_orders accepted={show_accepted_orders} denied={show_denied_orders} all={show_orders} filter={Filter_promo}/>;
    }
  };

  //useEffect que trae los productos del db.json
  const load_product = useCallback(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts();
  });

  useEffect(() => load_product(), [load_product]);

  //Funcion que crea las cartas para todos los productos
  const Load_products = () => {
    if (products != []) {
      return products.map((product) => (
        <Cards_admin
          notify={notify_deleted}
          modal={display_modal}
          product={product}
          tab={Display}
          key={product.id}
        />
      ));
    }
  };

  //Funcion que crea las cartas para las promociones
  const Load_promos = () => {
    if (products != []) {
      let promos = products.filter((product) => product.onsale != false);
      return promos.map((product) => (
        <Cards_admin
          notify={notify_deleted}
          modal={display_promo_modal}
          product={product}
          tab={Display}
          key={product.id}
        />
      ));
    }
  };

  //Orders

  //useEffect que trae las Ordenes del db.json
  const load_orders = useCallback(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        setorders(response);
      } catch (error) {
        console.error("Error fetching Orders", error);
      }
    };
    fetchOrders();
  });

  useEffect(() => load_orders(), [load_orders]);

  //Funcion que crea cartas por cada orden que trae del endpoint
  const Load_orders = () => {
    let accepted = orders.filter((order) => order.state == "Pending");
    return accepted.map((item) => <Order Accepted={order_accepted()} Denied={order_denied()} Data={item} key={item.id} />);
  };

  const load_accepted_orders = () => {
    let accepted = orders.filter((order) => order.state == "Accepted");
    return accepted.map((item) => <Order Accepted={order_accepted()} Denied={order_denied()} Data={item} key={item.id} />);
  };

  const load_denied_orders = () => {
    let accepted = orders.filter((order) => order.state == "Denied");
    return accepted.map((item) => <Order Accepted={order_accepted()} Denied={order_denied()} Data={item} key={item.id} />);
  };

  const filteredOrders = () => {
    let filtered_orders= orders.filter(order => 
      order.name.toLowerCase().includes(Filter.toLowerCase()) || 
      order.lastname.toLowerCase().includes(Filter.toLowerCase()) ||
      order.phone.toLowerCase().includes(Filter.toLowerCase()) ||
      order.mail.toLowerCase().includes(Filter.toLowerCase()) ||
      order.province.toLowerCase().includes(Filter.toLowerCase()) ||
      order.canton.toLowerCase().includes(Filter.toLowerCase()) ||
      order.address.toLowerCase().includes(Filter.toLowerCase()) ||
      order.zip.toLowerCase().includes(Filter.toLowerCase()) ||
      order.comments.toLowerCase().includes(Filter.toLowerCase()) ||
      order.car.some(item => item.name.toLowerCase().includes(Filter.toLowerCase()))
    );
    return filtered_orders.map((item) => <Order Data={item} key={item.id} />);
  };

  const display_main_cont = () => {
    if (Filter) {
      return filteredOrders()
    }
    if (Display == "Products") {
      return Load_products();
    }
    if (Display == "Promos") {
      return Load_promos();
    }
    if (Display == "Orders") {
      return Load_orders();
    }
    if (Display == "Accepted_Orders") {
      return load_accepted_orders();
    }
    if (Display == "Denied_Orders") {
      return load_denied_orders();
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="admin_body">
        <div id="nav_cont">
          <Navbar_admin
            show_orders={show_orders}
            show_products={show_product}
            show_promos={show_promos}
          />
        </div>
        <div id="side_tab_admin_main_cont">{display_sideTab()}</div>
        <div id="admin_main_cont">{display_main_cont()}</div>
        <div id="footer_cont">
          <Footer />
        </div>
      </div>
      <Edit_modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={EditingProduct}
      />
      <Edit_promo_modal
        show={PromomodalShow}
        onHide={() => setPromoModalShow(false)}
        product={EditingProduct}
      />
    </>
  );
};

export default Admin_page;
