import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import ItemListContainer from "../components/Items/ItemListContainer"
import Detalle from "../pages/Detalle"
import Contacto from "../pages/Contacto"
import Nosotros from "../pages/Nosotros"
import Cart from "../pages/Cart"
import Checkout from "../components/Checkout/Checkout"


const RoutesComponent = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/category/:category" element={<ItemListContainer />}></Route>
        <Route path='/detalle/:id' element={<Detalle />}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
  )
}

export default RoutesComponent