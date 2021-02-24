import React, { Component } from 'react';
import CardExito from './CardExito/CardExito';
import Button from '../Button/Button';

import unoImg from './userExp.svg';
import dosImg from './dinero.svg';
import tresImg from './metricas.svg';
import cuatroImg from './aprendizaje.svg';
import cincoImg from './agil.svg';

import './Exito.css';

class Process extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render (){
    
    const uno = 'User Experience';
    const dos = 'Invierte';
    const tres = 'Metricas';
    const cuatro = 'Aprendizaje';
    const cinco = 'Agil';



    
    const unoContent = 'Conoce y experimenta';
    const dosContent = 'En lo necesario e importante';
    const tresContent = 'Mide y genera insights';
    const cuatroContent = 'Recopila lo que si funciona';
    const cincoContent =  'Genera valor con lo minimo';


    const estilo = 'center luz br4 mv3 mh3 ba b--black-10 grow mh2 w18l vh40 lh-copy';

    // const gretting1 = 'Descubre';
    const gretting = 'Hablemos';
    
    // const estiloButton1 = 'br3-ns br3 ba color-boton1 ttu white center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow';
    const estiloButton2 = 'br3-ns br3 ba color-boton2 ttu white center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow';


    return (

        <div id='exito' className='vh-100-l flex flex-column items-center img-back4 tc black'>
            <p className='fw1 f3 f1-ns lh-title mv3 pt6 pb3 ttu '>¡Descubre el exito!</p>
            <div  className='flex justify-center-ns flex-wrap items-center w-60 w-90-l  center '>
                <CardExito text = {uno}  content = {unoContent} estilo = {estilo} image={unoImg}/> 
                <CardExito text = {dos}   content = {dosContent} estilo = {estilo} image={dosImg}/>
                <CardExito text = {tres}  content = {tresContent} estilo = {estilo} image={tresImg}/>
                <CardExito text = {cuatro}   content = {cuatroContent} estilo = {estilo} image={cuatroImg}/>
                <CardExito text = {cinco}  content = {cincoContent} estilo = {estilo} image={cincoImg}/>
            </div>

            <div className='flex center flex-wrap justify-center mt5'>
{/*                         <div  className='mh2 mb3' >
                            <Button text = {gretting1}  estilo = {estiloButton1} onSumbitSubscription = {this.onSumbitSubscription} />
                        </div> */}
                        <div  className='mh2 mb3' >
                            <Button text = {gretting}  estilo = {estiloButton2} onSumbitSubscription = {this.onSumbitSubscription} />
                        </div>    
            </div>

            <div className='tc flex center justify-center '>

                <a href="#contact" className="arrow1"> 
                    <svg className="icon icon-arrow-down" width="60" height="60" viewBox="0 0 32 32"> 
                        <g id="icon-arrow-down">
                            <path className="path1" d="M4.131 8.962c-0.434-0.429-1.134-0.429-1.566 0-0.432 0.427-0.432 1.122 0 1.55l12.653 12.528c0.434 0.429 1.133 0.429 1.566 0l12.653-12.528c0.432-0.429 0.434-1.122 0-1.55s-1.136-0.429-1.566-0.002l-11.87 11.426-11.869-11.424z" 
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
    
    export default Process;
    