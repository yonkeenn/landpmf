import React, { Component } from 'react';
import Button from '../Button/Button';
import './HeroWindow.css';

class HeroWindow extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    onSumbitSubscription = (event) => {
        alert('clicked');
    }
    


    render (){
    
        // const gretting1 = 'Descubre';
        const gretting = 'Hablemos';
        
        // const estiloButton1 = 'br3-ns br3 ba color-boton1 ttu white center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow';
        const estiloButton2 = 'br3-ns br3 ba color-boton2 ttu white center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow';
    
    
    return (
        <div id="home" className='tc-l vh-100 flex flex-column center justify-center '>
            <div className='tc pv5-l pv1 flex justify-center align-items vh-75-l vh-50'>
                <div className='ma5-l mt0  w-80-l pa4-l ba-l b--none-l tc br4 flex flex-column justify-center-ns align-items  vh-50-ns vhflex luz '>
                    <h1 className='f2 f1-m f-5-l fw1 ttu black-90 mb0 pa0'>Crea Experiencia  <br /> & Mide tus resultados.</h1>
                    <h2 className='fw1 f3-ns f6 fw2 black-80 mt2 mb2-ns'>Descubre tu estrategia con Lean UX y mide tus resultados con Ciencia.</h2>
                    <div className='flex center flex-wrap justify-center mt4-ns'>
{/*                         <div  className='mh2 mb3' >
                            <Button text = {gretting1}  estilo = {estiloButton1} onSumbitSubscription = {this.onSumbitSubscription} />
                        </div>  */}
                        <div  className='mh2 mb3' >
                            <Button text = {gretting}  estilo = {estiloButton2} onSumbitSubscription = {this.onSumbitSubscription} />
                        </div>    
                    </div>
                </div>
            </div>


            <div className='tc flex center justify-center '>

                <a href="#problemas" className="arrow"> 
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

export default HeroWindow;