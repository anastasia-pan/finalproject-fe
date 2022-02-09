
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
import candlestick from "../assets/candlestick.png";
import candlestick2 from "../assets/candlestick2.png";

  
const Home = () => {

    return (

        <div className="home">

        <div className="animatedCandle">
            <div className="entireCandle">
        <div class="holder">
        <div class="candle">
            <div class="blinking-glow"></div>
            <div class="thead"></div>
            <div class="glow"></div>
            <div class="flame"></div>
        </div>
        <div class="wick"></div>
        <div class="wax"></div>
        </div>
        </div>
        
        </div>

        <div className="animatedCandle2">
            <div className="entireCandle">
        <div class="holder">
        <div class="candle">
            <div class="blinking-glow"></div>
            <div class="thead"></div>
            <div class="glow"></div>
            <div class="flame"></div>
        </div>
        <div class="wick"></div>
        <div class="wax"></div>
        </div>
        </div>
        
        </div>

        
        <img src={cabinet} className="cabinet"/>

        <div className="cabinetObjects">

        <div className="firstShelf">

        <img src={hands} className="totem"/>
        <img src={annabelle} className="doll"/>
        <img src={rock} className="totem"/>
        </div>

        <div className="secondShelf">

        <img src={vase} className="totem"/>
        <img src={wedding} className="dress"/>
        </div>

        <div className="thirdShelf">

        <img src={terracotta} className="totem"/>
        <img src={footBook} className="totem"/>
        <img src={lemb} className="totem"/>
        </div>

        <div className="fourthShelf">

        <img src={jamesDean} className="car"/>
        <img src={anguished} className="anguished"/>
        </div>

        </div>
        

        </div>

    )
}

export default Home