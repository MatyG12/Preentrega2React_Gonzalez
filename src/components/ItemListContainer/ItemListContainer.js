import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"



function ItemListContainer ({greeting}){

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    console.log("La categoria que llego aca es:", categoryId)

    useEffect(()=>{

        const asyncFunc = categoryId ? getProductsByCategory : getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId]) 


    return(
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemListContainer;