import React, { Component } from 'react';

import Button from '../Button/Button'
import './Empatia.css';
import yamheru from './yamheru.png';

class Empatia extends Component {
    render (){
    



    
    const gretting = 'Descubre';
    const gretting1 = 'Hablemos';
    
    const estiloButton1 = 'br3-ns br3 ba color-boton1 ttu white center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow';
    const estiloButton2 = 'br3-ns br3 ba color-boton2 ttu white center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow';


    return (

            <div id='autoridad' className='white img-back vh-100-l pv6  cf flex-ns  flex-column justify-center-l' >

                <p className='tc fw1 f3 f1-ns lh-title  mb5'>Conoce nuestros proyectos</p>

                <div className="slider ">
                    <ul>
                        <li className='mh4' >
                        <img src={yamheru} alt="Floreria Yamheru" />
                        </li>
                        <li className='mh4'>
                        <img src={yamheru} alt="Floreria Yamheru" />
                        </li>
                        <li className='mh4'>
                        <img src={yamheru} alt="Floreria Yamheru" />
                        </li>
                        <li className='mh4'>
                        <img src={yamheru} alt="Floreria Yamheru" />
                        </li>
                    </ul>
                </div>

                <div className='tc flex flex-column justify-center'>
                <p className='fw1 f5 f3-ns lh-title mv3'>¿Empezamos?</p>
                <div className='flex center flex-wrap justify-center mt3'>
                        <div  className='mh2 mb3' >
                            <Button text = {gretting1}  estilo = {estiloButton1} onSumbitSubscription = {this.onSumbitSubscription} />
                        </div>
                        <div  className='mh2 mb3' >
                            <Button text = {gretting}  estilo = {estiloButton2} onSumbitSubscription = {this.onSumbitSubscription} />
                        </div>    
                </div>
                <a href="#calltoaction" className="arrow1"> 
                    <svg className="icon icon-arrow-down1" width="60" height="60" viewBox="0 0 32 32"> 
                        <g id="icon-arrow-down1">
                            <path className="path1 " d="M4.131 8.962c-0.434-0.429-1.134-0.429-1.566 0-0.432 0.427-0.432 1.122 0 1.55l12.653 12.528c0.434 0.429 1.133 0.429 1.566 0l12.653-12.528c0.432-0.429 0.434-1.122 0-1.55s-1.136-0.429-1.566-0.002l-11.87 11.426-11.869-11.424z" 
                            fill="#B60D35" 
                            ></path>
                        </g>
                    </svg> 
                </a>
            </div>
                


        </div>
    );
    
    }
    }
    
    export default Empatia;
    