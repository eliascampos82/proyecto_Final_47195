import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartDetail = () => {
  const { cart, removeItem, precioTotal, clear } = useContext(CartContext);

  console.log("estoy en este console", cart);

  return (
    <div className="card mb-3" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h1>carrito</h1>

      {cart.map((el) => (
        <div className="row g-0" key={el.id} style={{display:"flex",
                                                    border: "1px solid red",
                                                    width:"50%",
                                                    marginBottom:"20px",
                                                    borderRadius:"10px"}}>
          <div className="col-md-4">
            <img
              src={el.item.img}
              className="img-fluid rounded-start"
              style={{ width: "180px", marginLeft: "50px",marginTop:"20px" }}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{textAlign:"center",fontSize:"20px"}}>
              <h5 className="card-title" >{el.item.name}</h5>
              <p className="card-text">Precio: ${el.item.price}</p>
              <p className="card-text">Cantidad: {el.q}</p>
              <p className="card-text">Total : $ {el.item.price * el.q}</p>
            </div>
            <button style={{marginBottom:"20px"}}
            onClick={() => {
              removeItem(el.item.id);
            }}
            className="cartButton"
          >
            Sacar del Carrito  ❌
          </button>
          </div>
          
        </div>
      ))}
      {cart.length > 0 ? (
        <>
          <h2>Precio Total: ${precioTotal()}</h2>
          <button style={{backgroundColor:"lightblue",padding:"10px",borderRadius:"10px",marginBottom:"10px"}} onClick={clear}>Vaciar</button>
          <Link to="/checkout" style={{textDecoration:"none", fontSize:"20px"}}>Finalizar Compra</Link>
        </>
      ) : (
        <h2 style={{marginBottom:"10%"}}>El carrito esta vacio 😒</h2>
      )}
    </div>
  );
};

export default CartDetail;
