import React from 'react';


const  Card = (props) => {
return (
    <article className={props.estilo}>
        <div className='tc'>
            <h3 className='fw1 f1  lh-title mv0'>{props.number}</h3>
            <hr className='w-20' />
            <h1 className='fw1 f3 f2-ns lh-title mv0 ttu'>{props.text}</h1>
            
        </div>
            <p className='tc lh-copy-ns measure center fw2 f5-ns f6'>{props.content}</p>
        <div>
        <img
            src={props.image}
            className='w-90 db br4 br--bottom'
            alt='of a kitty staring at you'
            />
        </div>
    </article>
    );

}


export default Card;