import React from 'react';


export const Modal = ({children, estadoModal}) => {
  return (
    <>
    {estadoModal &&
    <div className='contmodal'>
        <div className='vmodal'>
            {children}
        </div>
        
    </div>
}
    </>
  )
}
