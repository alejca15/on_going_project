import "../Styles/Login.css";
import FormL from "../Components/Form_login";
import Footer from "../Components/Footer";

function Form_login() {
  return (
    <div id="form_login">
      <FormL />

      <div id="footer_cont">
        <Footer />
      </div>
    </div>
  );
}

export default Form_login;
