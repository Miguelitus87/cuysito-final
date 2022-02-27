import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"
import { ItemCarrito } from "./ItemCarrito";
import { database } from "../database";

export const Cart = () =>{

const  CartList  = useContext(CartContext);
console.log(CartList);

const checkout = useContext(CartContext);



{/*const {carrito,  removeItem, checkout} = useContext(CartContext);*/}

    return (
        <>            
            <div className="Cart">
                <h1>CARRITO DE COMPRAS</h1>
                <div>
                {/* se va a mapear CartList y no database */}
                {                    
                    
                    database.map((item) => (
                        <ItemCarrito 
                            key={item.id}                             
                            title={item.title} 
                            description={item.description} 
                            price={item.price} 
                            pictureURL={item.pictureURL}/>                                                                                            
                            
                        )
                    )
                }  


                </div>    
                <button className="btn btn-warning btn-lg" onClick={checkout} >checkout</button>
                <Link to={'/'}><button className="btn btn-warning btn-lg" >Volver al Inicio</button></Link> 
            </div>
        </>
    );

}