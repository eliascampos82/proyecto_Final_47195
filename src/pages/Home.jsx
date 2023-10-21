import ItemListContainer from '../components/Items/ItemListContainer'
import Propaganda from '../components/Propaganda/Propaganda'
import '../components/Propaganda/Propaganda.css'
import Fondo from '../components/fondo/Fondo'



const Home = () => {
 
  return (
    <div>
      
      
      <Fondo/>
      <Propaganda />
      <h2>En nuestra tienda</h2>
      <ItemListContainer />
    </div>
  )
}

export default Home