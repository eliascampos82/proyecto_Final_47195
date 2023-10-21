import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp} from 'react-icons/fa';






function Footer() {
  return (
    <div className="footer">
        
        <p className="comunicate">Comunicate con nosotros con la app que mas te guste !! </p>
        <h3>NUESTRAS REDES</h3>
        <span className="iconos">
            < FaFacebook />
            < FaInstagram />
            <FaWhatsapp />
            < FaTiktok />
          

        </span>
      
      <p>React Js - <em>CODERHOUSE</em> - <b>FRANCISCO ELIAS CAMPOS</b>  - COMISION 47195 -</p>
      <p>© 2023 <em>Zapas </em>Ⓡ, TODOS LOS DERECHOS RESERVADOS. Las fotos contenidas en este site, el logotipo y las marcas
        son propiedad de <em>Zapas </em>Ⓡ.</p>
      <p>Está prohibida la reproducción total o parcial, sin la expresa autorización de la administracion de la tienda virtual, empresa perteneciente al grupo <em>Zapas </em>Ⓡ S.A.</p>
    
    </div>
  )
}

export default Footer;