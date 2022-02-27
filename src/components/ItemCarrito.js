

export const ItemCarrito = (ItemCarrito) =>{
    return (
        <>
            <div className="ItemCarrito">
                <img src={ItemCarrito.pictureURL} alt={ItemCarrito.title} width="60" height="75"/>                        
                <h3>{ItemCarrito.title}</h3>                
                <p>Descripcion: {ItemCarrito.description}</p>                
                <p>Precio: ${ItemCarrito.price}</p>  
                <button >Remover</button>
            </div>
            <hr></hr>                                         
        </>
    );
}

/*
<button onClick={removeItem()}>Remover</button>
<button onClick={checkout}>checkout</button>
*/