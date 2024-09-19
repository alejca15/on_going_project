import Footer from "../Components/Footer";
import Form_register from "../Components/Form_register";
import Secundary_nav from "../Components/Secundary_nav";
import "../Styles/Register.css";

const Register = () => {
  return (
    <>
      <div id="register_cont">
        <div id="nav_register">
          <Secundary_nav />
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
