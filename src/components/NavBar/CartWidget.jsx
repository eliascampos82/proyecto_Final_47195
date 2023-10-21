import { PiShoppingCartBold } from "react-icons/pi"
import { useContext } from "react"
import CartContext from "../../context/CartContext"




const CartWidget = () => {
  const { cart }= useContext(CartContext);

  const cartCantidad = cart.length;
  
  const checkCantidad = ()=>{

    if (cartCantidad > 0){
      return <span>{cartCantidad}</span>
  }else{
    return <span>0</span>
  }
  }


  return (
    <div className="carrito">
      
        <PiShoppingCartBold /><span>{checkCantidad()}</span>
    </div>
  )
}

export default CartWidget