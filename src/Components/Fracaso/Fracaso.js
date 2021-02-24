import React, { Component } from 'react';
import TextCard from './TextCard/TextCard';

import './Fracaso.css';


class Fracaso extends Component {
    render (){
    
    const texto1 = 'Perderias clientes debido a que no conoces lo que si les importa.';
    const texto2 = 'Invertirias dinero sin saber que accion fue la mejor.';
    const texto3 = 'No sabrias que accion realizar para mejorar tu estrategia.';
    
    return (



        <div id='fracaso' className='white bg-black vh-100 flex flex-column items-center pt6 pb3' >
                <div className="bg-black vh-50-l flex items-center flex-column justify-center" >
                    <p className='fw1 f3 f1-ns  ttu tc center '>¿Imagina que sucederia si no mejoras tus <br/>canales digitales?</p>
                    <div className=' w-80-ns ph2 flex center flex-wrap justify-center'>
                        <TextCard contenido = {texto1} />
                        <TextCard contenido = {texto2} />                    
                        <TextCard contenido = {texto3} />
                    </div>
                </div>
                <a href="#exito" className="arrow1 pt3"> 
                    <svg className="icon icon-arrow-down1" width="60" height="60" viewBox="0 0 32 32"> 
                        <g id="icon-arrow-down1">
                            <path className="path1 " d="M4.131 8.962c-0.434-0.429-1.134-0.429-1.566 0-0.432 0.427-0.432 1.122 0 1.55l12.653 12.528c0.434 0.429 1.133 0.429 1.566 0l12.653-12.528c0.432-0.429 0.434-1.122 0-1.55s-1.136-0.429-1.566-0.002l-11.87 11.426-11.869-11.424z" 
                            fill="#B60D35" 
                            ></path>
                        </g>
                    </svg> 
                </a>


                


        </div>
    );
    
    }
    }
    
    export default Fracaso;
    