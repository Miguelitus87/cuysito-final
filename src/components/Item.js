import { Link } from "react-router-dom";

export const Item = (item) =>{
    return (
        <>
            <div className="Item">
                <h3>{item.title}</h3>
                <img src={item.pictureURL} alt={item.title} />                        
                <p>Descripcion: {item.description}</p>
                <Link to={'/item/'+item.id}><button className="btn btn-warning" >Ver Detalle</button></Link>               
                <p>Precio: ${item.price}</p>  
            </div>
        </>
    );
}

