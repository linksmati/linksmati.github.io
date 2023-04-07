import React from 'react';
import { Link } from "react-router-dom";
import iconoCarrito from "../assets/statics/carrito.png";
import iconoVolver from "../assets/statics/volver.png";


export default function Header (){
    return(
        <>
            <Link to="/carrito">
                <img src={iconoCarrito} alt="" className="carritou" />
            </Link>
            <Link to="/">
                <img src={iconoVolver} alt="" className="volver" />
            </Link>

            <h1 className="titulo">Tienda de Calcos</h1>
        </>
    )
}