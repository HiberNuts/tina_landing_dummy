import "./App.css";
import image from "./image.svg";
import america from "./america.svg";
import phone from "./phone.svg";
import india from "./india.svg";
import whatsapp from "./whatsapp.svg";
import facebook from "./facebook.svg";
import insta from "./insta.svg";

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <p>Thank you for hopping on.</p>
        <h3>Website Launch on Nov. 10th 2022</h3>
      </div>
      <img src={image} />
      <div className="details1">
        Untill then, <span>preview our latest</span> collections @ <br />
        <a style={{ marginTop: "10px" }} href="https://www.instagram.com/tina_rosario_the_design_house/?r=nametag">
          <span>
            <img src={insta} />
          </span>
          tina_rosario_the_design_house
        </a>
        <br />
        <a
          style={{ marginTop: "-25px" }}
          href="https://www.facebook.com/people/Tina-Rosario-The-Design-House/100086487516274/"
        >
          <span>
            <img src={facebook} />
          </span>
          Tina Rosario - The Design House
        </a>
      </div>
      <div className="details2">
        <span>Stay tuned</span> to start your online shopping spree.
        <br /> Or <br /> <span>Walk into</span> our local store located @ <br />
        112a Nehru street, Alwar Thiru Nagar, Chennai - 600087
        <br /> Or <br />
      </div>
      <div className="contact">
        <span style={{ marginBottom: "10px" }}>Contact Us</span>
        <div>
          <img src={phone} />

          <img style={{ margin: "0px 10px 0px 10px" }} src={india} />

          <p>+91 7200060540</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <img style={{ margin: "0px 19px 0px 0px" }} src={america} />
          <p>+1 412-251-1363</p>
        </div>
        <div style={{ width: "100%" }}>
          <a
            style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            href="https://api.whatsapp.com/send?phone=8018082273"
          >
            <img src={whatsapp} />
            <p>+1 8018082273</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
