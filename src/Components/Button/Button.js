import React from 'react';


const  Button = (props) => {
return (
    <div className=''>
    <a href='https://itresse.wispform.com/37f90f6e' >
        <button 
        className={props.estilo}
        >
        {props.text}
        </button>
    </a>

    </div>
);

}


export default Button;