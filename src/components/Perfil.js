import React from 'react';
import Tony from "../images/Tony.jpg";
import "../styles.css";


export const Perfil = ({nuevoValor}) => {


  return (
    <div className='container'>
        <div className='cuadroPerfil'>
            <div>
                <img 
                  src={Tony} alt="foto de cliente" width="400" heigth="400"
                />
                <p className='text-center'>Cliente: Tony Stark</p>
            </div>

            <div>
                <h1>Información</h1>
                <br/>
                <h3>Nombre: </h3><p>Tony Stark</p>
                <h3>Dirección: </h3><p>Malibú point 904-324</p>
                <h3>Edad: </h3><p>45</p>
                <br/>
                <h3>Saldo actual {nuevoValor} </h3>
            </div>
        </div>
        <hr/>
    </div>
  )
}
