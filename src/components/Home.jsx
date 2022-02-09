import jamesDean from "../assets/james-dean-car.png";
import anguished from "../assets/anguished-man.png";
import hands from "../assets/hands-resist-him.png";
import annabelle from "../assets/annabelle.png";
import rock from "../assets/uluru-rock.png";
import vase from "../assets/basano-vase.png";
import wedding from "../assets/bakers-wedding-dress.png";
import terracotta from "../assets/terracotta.png";
import footBook from "../assets/foot-book.png";
import lemb from "../assets/lemb.png";
import cabinet from "../assets/cabinet.png";

import 'animate.css';


const click = async (name) => {
  const url = `${process.env.REACT_APP_BASE_URL}/totem/name/find`;
  console.log(url);
  console.log(`I'm an object called: ${name}`);
  const payload = JSON.stringify({ name: name });
  console.log(payload);
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/totem/name/find`, {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });
  let returned = await res.json();
  console.log(returned);
};

const Home = () => {
  return (
    <div className="home">
      <div className="animatedCandle animate__animated animate__fadeIn animate__delay-1s animate__repeat-1	1 animate__slower	3s">
        <div className="entireCandle">
          <div className="holder">
            <div className="candle">
              <div className="blinking-glow"></div>
              <div className="thead"></div>
              <div className="glow"></div>
              <div className="flame"></div>
            </div>
            <div className="wick"></div>
            <div className="wax"></div>
          </div>
        </div>

      </div>

      <div className="animatedCandle2 animate__animated animate__fadeIn animate__delay-2s animate__repeat-1	1 animate__slower	3s">
        <div className="entireCandle">
          <div className="holder">
            <div className="candle">
              <div className="blinking-glow"></div>
              <div className="thead"></div>
              <div className="glow"></div>
              <div className="flame"></div>
            </div>
            <div className="wick"></div>
            <div className="wax"></div>
          </div>
        </div>
      </div>

      <img src={cabinet} className="cabinet" />

      <div className="cabinetObjects">
        <Shelf
          name="firstShelf"
          items={[
            {
              name: "The Hands Resist Him",
              image: hands,
              className: "totem",
            },

            { name: "Annabelle", image: annabelle, className: "doll animate__animated animate__headShake animate__delay-3s animate__repeat-3	3 animate__slower	20s" },
            { name: "Uluru Rocks", image: rock, className: "totem" },
          ]}
        />

        <Shelf
          name="secondShelf"
          items={[
            { name: "Basano Vase", image: vase, className: "totem vase" },
            {
              name: "Baker's Wedding Dress",
              image: wedding,
              className: "dress",
            },
          ]}
        />

        <Shelf
          name="thirdShelf"
          items={[
            { name: "Terracota Army", image: terracotta, className: "totem" },
            {
              name: "Dr Seuss The Foot Book",
              image: footBook,
              className: "totem",
            },
            {
              name: "The Woman from Lemb Statue",
              image: lemb,
              className: "totem",
            },
          ]}
        />
        <Shelf
          name="fourthShelf"
          items={[
            {
              name: "James Dean's Car aka Little Bastard",
              image: jamesDean,
              className: "car totem animate__animated animate__lightSpeedInRight animate__delay-0s animate__repeat-1 animate__slower	3s",
            },
            {
              name: "The Anguished Man",
              image: anguished,
              className: "anguished",
            },
          ]}
        />
      </div>
    </div>
  );
};

const Shelf = ({ name, items }) => {
  return (
    <div className={name}>
      {items.map((item, index) => {
        return (
          <img 
            src={item.image}
            key={index}
            className={item.className}
            onClick={() => click(item.name)}
          />
        );
      })}
    </div>
  );
};

export default Home;
