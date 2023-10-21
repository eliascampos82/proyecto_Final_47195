import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from 'react-router-dom';
import CartWidget from "./CartWidget"



// eslint-disable-next-line react/prop-types
const NavBar = ({username}) => {
  return (
    <Navbar bg="dark" collapseOnSelect expand="lg" data-bs-theme="dark" >
    <Container fluid>
      <Navbar.Brand className='nombre' href="/">👟Zapas</Navbar.Brand>
      <Nav className="barra">

        <NavLink className="barra" to="/">Home</NavLink>
        <NavLink className="barra" to="/category/hombre">Hombre</NavLink>
        <NavLink className="barra" to="/category/mujer">Mujer</NavLink>
        <NavLink className="barra" to="/nosotros">Nosotros</NavLink> 
        <NavLink className="barra" to="/contacto">Contacto</NavLink>
        <h2 style={{color:'white',
                    fontSize: "18px",
                    marginTop:"5px"}}>Bienvenido! {username}
        
        </h2>
        <NavLink className="barra" to="/cart"><CartWidget  /></NavLink>
      
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;