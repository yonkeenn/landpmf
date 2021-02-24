import React, { Component } from 'react';
import Card from './Card/Card';
import Button from '../Button/Button';
import design from './diseño.svg';
import proceso from './proceso.svg';
import ajuste from './ajuste.svg';
import './Process.css';

class Process extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render (){
    
    const diseño = 'Diseño';
    const entrega = 'Desarrollo';
    const disfruta = 'Ajuste';

    const uno = '1';
    const dos = '2';
    const tres = '3';
    
    const disCont = 'Envianos tu idea y diseñaremos un plan que se adapte a ti';
    const entCont = 'Desarrollamos tu producto y validaremos los resultados.';
    const disfCont = 'Ajusteremos acorde los resultados hasta alcanzar tus objetivos.';
    


    const estilo = 'center luz br4 mv3 mh3 ba b--black-10 w-30-l w-100 grow';
    return (

        <div id='proceso' className='vh-100-l flex flex-column items-center img-back3 tc black'>
            <p className='fw1 f3 f1-ns lh-title mv3 pt6 pb3 ttu white'>¿Como <br className="dn-ns"/> Solucionarlo?</p>
            <div  className='flex justify-center-ns flex-wrap items-center w-75 center  vh-75-l'>
                <Card text = {diseño} number = {uno} content = {disCont} estilo = {estilo} image={design}/> 
                <Card text = {entrega}  number = {dos} content = {entCont} estilo = {estilo} image={proceso}/>
                <Card text = {disfruta}  number = {tres} content = {disfCont} estilo = {estilo} image={ajuste}/>
            </div>

            <div className='tc flex flex-column justify-center vh-15-l'>
                <p className='fw1 f5 f3-ns lh-title mv3'>¿Empezamos?</p>
                <div className='center flex '>
                    <div  className='center mb3 ph4' >
                    <Button text={this.props.gretting} estilo={this.props.estiloButton}/>
                    </div>    
                </div>
                <a href="#fracaso" className="arrow1"> 
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
    
    export default Process;
    