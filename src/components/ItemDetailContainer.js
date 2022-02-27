import { useEffect, useState } from "react";
import { database, getList } from "../database";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () =>{

    const {id} = useParams();
    
    const[DbItems,setDbItems]= useState([]); 


    useEffect( async() => {
            try{
                const data = await getList(database.filter(item => item.id === parseInt(id)), 100);
                setDbItems(data)
            
            } catch(error) {
                console.log(error)
            }
    },[id]);

    return (
        <>            
            <div className="ItemDetailContainer">                
                
                {                    
                    DbItems.map((item) => (                        
                        <ItemDetail 
                            key={item.id} 
                            title={item.title} 
                            description={item.description} 
                            price={item.price} 
                            pictureURL={item.pictureURL}/>
                        )
                    )
                }
                
            </div>
        </>
    );

}