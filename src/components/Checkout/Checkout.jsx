import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";



const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { cart, precioTotal,clear } = useContext(CartContext)
    
    const {register, handleSubmit}= useForm();


    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total$: precioTotal(),
            
        }
        console.log(pedido);
        const db = getFirestore();
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clear();
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es:  <b>{pedidoId}</b> </p>
            </div>
        )
    }
    



    

return (

    <div className="contenedor">
        <div className="wrapper animated bounceInLeft">
            <div className="contacto">

                <h3>Enviar Correo</h3>
                    <form className="formulario" onSubmit={handleSubmit(comprar)}>
                        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                        <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                        <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                        
                        <button className="boton-enviar" type="submit">COMPRAR</button>

                    </form>
            </div>
        </div>
    </div>

)
}

export default Checkout