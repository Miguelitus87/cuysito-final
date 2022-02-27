import { ItemCount} from "./ItemCount";
import { Link } from "react-router-dom";
import { useState} from 'react';
import { useParams } from "react-router-dom";


export const ItemDetail = (item) =>{

    {/*    
    const {id} = useParams();
    
    const [itemID, setItemID] = useState(id);

    const onAdd = (canti)=> {        
        alert(`se agrego `+canti+` unidades al carrito del producto con ID N°`+itemID);        
        setItemID(id);        
    }
    */}

    return (
        <>            
            <div className="ItemDetail">
                <div>                        

                        <img src={item.pictureURL} alt={item.title} />                                                             
                </div>        
                <div>
                        <h3>{item.title}</h3>
                        
                        <p>{item.description}</p>                        
                        <p>Precio: ${item.price} pesos</p>    

                        <ItemCount stock={5} initial={1}/>    
                        {/*<ItemCount stock={5} initial={1} addItem={onAdd}/>*/}    

                        <Link to={'/cart'}><button className="btn btn-warning btn-lg" >Terminar compra / Ir al Carrito</button></Link>
                        <hr/>
                        <Link to={'/'}><button className="btn btn-warning btn-lg" >Volver al Inicio</button></Link>   
                </div>
            </div>
        </>
    );

}