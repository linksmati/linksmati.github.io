import React from "react";
import Contexto from "./Contexto";
import { useReducer } from "react";
import axios from "axios";
import  Reducer  from "./Reducer";

export default function UsarContexto (props){
    const {children} = props;
    const estadoInicial = {
        productos:[],
        carrito:[]
    };
    const [state, dispatch] = useReducer(Reducer, estadoInicial);
    const listameProductos =  async ()=>{
        const res = await axios.get("https://devrockstore-default-rtdb.firebaseio.com/productos.json");
        dispatch({type:"LISTAME_PRODUCTOS", payload: res.data})
        console.log(res.data, "desde usar contexto");
    };
    const agregarCarrito = (item)=>{
        console.log("agregamos a carrito", item);
        dispatch({type:"AGREGAR_CARRITO", payload: item});
        
    };
    const eliminarCarrito = (item) => {
        console.log("eliminar carrito", item);
        dispatch({ type: "ELIMINAR_CARRITO", payload: item });
    };


    return(
        <Contexto.Provider 
        value={{
                productos: state.productos,
                carrito: state.carrito,
                listameProductos,
                agregarCarrito,
                eliminarCarrito
            }}
        >
            {children}
        </Contexto.Provider>
        
    )
}