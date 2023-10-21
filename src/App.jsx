
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Detalle from './pages/Detalle'
import Footer from "./components/Footer/Footer";
import Contacto from './pages/Contacto'
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react'
import Nosotros from './pages/Nosotros'
import CartContextProvider from './context/CartContextProvider'
import Cart from './pages/Cart'
import Checkout from './components/Checkout/Checkout'
import "./main.css"



const App = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    
    const storedUsername = localStorage.getItem('username');

    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      const fetchData = async () => {
        const { value: initialUsername } = await Swal.fire({
          title: 'Ingresa tu nombre de usuario',
          input: 'text',
          inputLabel: 'Nombre de usuario:',
          inputPlaceholder: 'Escribe tu nombre de usuario aquí',
          showCancelButton: false,
          inputValidator: (value) => {
            if (!value) {
              return 'Debes ingresar tu nombre de usuario';
            }
          },
        });

        if (initialUsername) {
          setUsername(initialUsername);
          
          localStorage.setItem('username', initialUsername);
        }
      };

      
      fetchData();
    }
  }, []);


  


  return (
    <>
    <CartContextProvider>

      <NavBar username={username }/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/category/:category" element={<ItemListContainer />}></Route>
        <Route path='/detalle/:id' element={<Detalle />}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
      
      <Footer />
      </CartContextProvider>
    </>
  )
}

export default App