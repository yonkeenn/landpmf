import React from 'react';


const  CardExito = (props) => {
return (
    <article className={props.estilo}>
        
        <div className='vh-25 mt3 ' >
            <img
                src={props.image}
                className='w-100 db br4 br--bottom'
                alt='of a kitty staring at you'
                />
        </div>
        
        <div className=' mt4' >
            <hr className='w-20' />
            <h1 className='fw1 f5 f4-ns  mv0 ttu'>{props.text}</h1>
            <p className='measure center fw2 f6-ns f7'>{props.content}</p>
        </div>
            

    </article>
    );

}


export default CardExito;