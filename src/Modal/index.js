// import React from "react";
import ReactDOM from 'react-dom';

import "./Modal.css";
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   // <React.StrictMode>
//     <App nombre='Anderson Escobar' />
//    /* </React.StrictMode> */
// );

function Modal({children})
{
    return ReactDOM.createPortal(
        <div className='modal'>

            {children}
        </div>,
        document.getElementById('modal'),
    );
}


export {Modal};