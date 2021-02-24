import React from 'react';


const  Logo = (props) => {
return (
    <div className='tl grow'>
        <a href="#home">
            <img 
            className={props.estiloImg} 
            src={props.imgSource}
            alt={props.Description}
            />
        </a>
    </div>
);

}


export default Logo;