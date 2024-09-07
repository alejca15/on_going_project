import Footer from "../Components/Footer";
import Form_register from "../Components/Form_register";
import Nav_login from "../Components/Navbar_login";
import "../Styles/Register.css";

const Register = () => {
  return (
    <>
      <div id="register_cont">
        <div id="nav_register">
          <Nav_login />
        </div>
        <Form_register />
        <div id="footer_register">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Register;
