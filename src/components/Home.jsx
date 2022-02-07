
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
  
const Home = () => {

    return (

        <div className="home">

        <h1>Home</h1>

        <div className="totemsOnShelf">

        <img src={hands} className="totem"/>
        <img src={annabelle} className="totem"/>
        <img src={rock} className="totem"/>

        <img src={vase} className="totem"/>
        <img src={wedding} className="totem"/>

        <img src={terracotta} className="totem"/>
        <img src={footBook} className="totem"/>
        <img src={lemb} className="totem"/>

        <img src={jamesDean} className="totem"/>
        <img src={anguished} className="totem"/>
        
        </div>
        

        </div>

    )
}

export default Home