/* eslint-disable react/prop-types */
import Counter from '../Counter/Counter'


const ItemDetail = ({ item, onAdd}) => {

    return (
        <div className='detalle'>
            <h5>{item.name}</h5>
            <img className='zoom' src={item.img} />

            <p style={{textAlign:'center'}}>
                Descripcion: {item.descripcion}
            </p>

            <p>
                Precio: $ {item.price}
            </p>

            <p>
                Categoria:  {item.category}
            </p>
            <p>
                Stock:  {item.stock}
            </p>

            <Counter item={item} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail