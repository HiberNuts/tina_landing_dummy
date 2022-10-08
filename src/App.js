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
        <a href="https://www.instagram.com/tina_rosario_the_design_house/?r=nametag">
          <span>
            <img src={insta} />
          </span>
          tina_rosario_the_design_house
        </a>
        <br />
        <a href="https://www.facebook.com/people/Tina-Rosario-The-Design-House/100086487516274/">
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
        <br /> Or <br /> <span>Contact Us</span>
      </div>
      <dic className="contact">
        <div>
          {" "}
          <span>
            {" "}
            <img src={phone} />
          </span>{" "}
          <span>
            {" "}
            <img src={india} />
          </span>{" "}
          +91 7200060540
        </div>
        <div>
          <span>
            <img src={america} />
          </span>
          +1 412-251-1363
        </div>
        <div>
          <span>
            <img src={whatsapp} />
          </span>{" "}
          +1 801-808-2273
        </div>
      </dic>
    </div>
  );
}

export default App;
