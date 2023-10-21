
import { useForm } from "react-hook-form";


const Contacto = () => {

     const {register, handleSubmit}= useForm();
    

     const enviar =(data) =>{
         console.log("enviando", data);
     }


     

  return (
    
        <div className="contenedor">
                <div className="wrapper animated bounceInLeft">
                    <div className="contacto">
                        <h3>Enviar Correo</h3>
                        <form className="formulario" onSubmit={handleSubmit(enviar)}>
                            
                            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                            
                            <button className="boton-enviar" type="submit">Enviar</button>
                            
                        </form>
                    </div>
                </div>
        </div>
    
  )
}

export default Contacto