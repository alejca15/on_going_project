import "../Styles/Footer.css";
import code from "../Assets/code_logo.png";
import logo from "../Assets/Cositas_ricas_logo.png";


const Footer = () => {
  return (
    <div id="footer">
      <div id="ubi">Puntarenas, Montes de Oro, Miramar <br />Contactenos:+506 8888-8888</div>
      <div id="code_logo"><img src={code} alt="code_log" /></div>
      <div id="logo"><img src={logo} alt="Preview" /></div>
    </div>
  );
};

export default Footer;
