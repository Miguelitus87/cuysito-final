import { useState, React, useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { useParams } from 'react-router-dom';

export const ItemCount = (parametro) =>{

    const {id} = useParams();        
    const [cantidad, setCantidad] = useState(parametro.initial);
    const  addItem  = useContext(CartContext);
    
    const increment = () => {        
        if (cantidad < parametro.stock){
            setCantidad(cantidad+1) ;              
        }    
    }
    const decrease = () => {
        if (cantidad > parametro.initial){
            setCantidad(cantidad-1) ;
        }
    }
    
    const agregar = () => {        
        console.log('Se ejecuta agregar');
        addItem({id, cantidad});
        
    }

        return (
            <>
                <div className="ItemCount"> 
                    <div className="ItemCountB">                
                        <button className="btn btn-warning btn-lg" onClick={decrease}>-</button>
                        <button className="btn btn-warning btn-lg" onClick={ ()=>{ setCantidad(1); agregar(); }}>Añadir al carrito {cantidad} unidades</button>
                        <button className="btn btn-warning btn-lg" onClick={increment}>+</button>
                    </div>                
                </div>
            </>
        );
    
}

