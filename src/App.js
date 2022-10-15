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
      <img style={{ marginTop: "50px" }} src={image} />
      <div style={{ marginTop: "40px" }} className="details1">
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
      <div style={{ marginTop: "20px" }} className="details2">
        <span>Stay tuned</span> to start your online shopping spree.
        <br /> Or <br /> <span>Walk into</span> our local store located @ <br />
        112a Nehru street, Alwar Thiru Nagar, Chennai - 600087
        <br /> Or
      </div>
      <div className="contact">
        <span style={{ marginBottom: "10px" }}>Contact Us</span>
        <div>
          <img src={phone} />

          <img style={{ margin: "0px 10px 0px 10px" }} src={india} />

          <p>+91 7200060540</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <img style={{ margin: "0px 10px 0px 0px" }} src={america} />
          <p style={{ marginRight: "10px" }}>+1 412-251-1363</p>
        </div>
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <a
            style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            href="https://api.whatsapp.com/send?phone=9916818637"
          >
            <img src={whatsapp} />
            <p style={{ marginRight: "6px" }}>+91 99168 18637</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
