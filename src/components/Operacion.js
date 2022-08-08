import React, { useState } from 'react';
import { useForm } from '../helpers/useForm';
import { Perfil } from './Perfil';
import { Modal } from './Modal';


export const Operacion = () => {

    const [value, handleInputChange] = useForm({
        id:"",
        id2:"",
        monto:"",
        monto2:""
    });

    const {id, id2, monto, monto2} = value;


const [state, setState] = useState(1000000);

const handleDepositar = () => {
    setState( state + (Number.parseInt(monto)) );
    setEstado(true);
}

const handleRetirar = () => {
    setState( state - monto2 );
    setEstado(true);
}

const [estado, setEstado] = useState(false);

const handleChange = () =>{
    setEstado(!estado)
}

  return (
    <div className='all'>
         <div>
           <Modal 
                estadoModal={estado}
                cambiarEstado={handleChange}
            >
                <div className='contenidodep'>
                    <h1>Hecho</h1>
                    <button
                        onClick={handleChange} 
                        className='aceptar'
                    >Aceptar</button>
                </div>
            </Modal>

        </div>
        <div>
            <Perfil nuevoValor = {state}/>
        </div>

        <div className='container'>
            <div className='inputp container'>
              
                    <h1>Depositar </h1>
                    

                    <div className="form-group">
                        <input
                            type="text"
                            name="id"
                            className="in"
                            placeholder="Ingresa Id"
                            autoComplete="off"
                            value={id}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            name="monto"
                            className="in"
                            placeholder="Monto"
                            autoComplete="off"
                            value={monto}
                            onChange={handleInputChange}
                        />
                    </div>
                
                    <button 
                        onClick={handleDepositar}
                        className='btn btn-primary'>
                        Depositar
                    </button>
            
            </div>
            
            <hr/>
            <div className='inputp container'>
                <div>
                    <h1>Retirar</h1>
                    

                    <div className="form-group">
                        <input
                            type="text"
                            name="id2"
                            className="in"
                            placeholder="Ingresa Id"
                            autoComplete="off"
                            value={id2}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            name="monto2"
                            className="in"
                            placeholder="Monto"
                            autoComplete="off"
                            value={monto2}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button 
                        onClick={handleRetirar}
                        className='btn btn-primary'>
                        Retirar
                    </button>
                    

                </div>
            </div>
        </div>

    </div>
          

    
  )
}

