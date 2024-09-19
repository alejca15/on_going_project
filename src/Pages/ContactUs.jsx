import Secundary_nav from "../Components/Secundary_nav";
import Footer from "../Components/Footer";
import "../Styles/ContactUs.css";
import Contact_form from "../Components/Contact_form";
import Map from "../Components/Map";

const ContactUs = () => {
  return (
    <div>
      <div>
        <Secundary_nav />
      </div>
      <div id="main_ContactUs">
        <div id="contact_info">
          En Cositas ricas, nuestra misión es brindar experiencias memorables y
          alegres para celebraciones y eventos. Nos especializamos en ofrecer
          productos y servicios de alta calidad, desde deliciosos algodones de
          azúcar y palomitas de maíz hasta animaciones creativas que llenan de
          energía cada fiesta. Nos comprometemos a superar las expectativas de
          nuestros clientes, creando un ambiente festivo y único que haga de
          cada ocasión un momento inolvidable. Con un enfoque en la satisfacción
          del cliente y la atención a los detalles, nuestra meta es convertir
          cada evento en una celebración especial, llena de sabor y diversión.
        </div>
        <div id="form_contact">
          <Contact_form />
        </div>
        <div id="map_container">
          Nuestra ubicación
          <div id="map">
            <Map />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
