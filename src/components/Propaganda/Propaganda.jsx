import  banner1 from "../../imagenes/banner1.jpg";
import  banner2 from "../../imagenes/banner2.jpg";

function Propaganda() {
  return (
    
    <div className="container">
        <h2>Proximamante</h2>
      <div className="gallery-wrap">
        <div className="item item-1"></div>
        <div className="item item-2"></div>
        <div className="item item-3"></div>
      </div>
      <p>SUPER-ARCHI-RUNNING</p>
      <h2 className="promo_h2">PROMOCIONES</h2>
        <div className="promo">
        <img src={ banner1 } alt="banner1"/>
        <img src={ banner2 } alt="banner2"/>
        </div>
    </div>
    
  )
}

export default Propaganda