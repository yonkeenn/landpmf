import React, { Component } from 'react';

import Button from '../Button/Button';
import fotoportada from './fotoportada.jpeg'
import './Nosotros.css'

class Nosotros extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    

    render (){

    
        // const gretting1 = 'Descubre';
        const gretting = 'Hablemos';
        
        // const estiloButton1 = 'br3-ns br3 ba color-boton1 ttu white center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow';
        const estiloButton2 = 'br3-ns br3 ba color-boton2 ttu white center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow';
    
    
    
    return (
        <section id='nosotros' className='img-back1 pt6-ns pv5 pb3 flex flex-column justify-center align-center tc vh-100-l' >

            <div className="center w-90 ph3 ph5-l tc br4-ns pv3 flex flex-column flex-wrap justify-center mt5">

                <div className='flex flex-wrap items-center   br3 w-90-l vh-30-l  center  luz mv1 ph4 pv4 ' >
                    <div className='ph2-ns w-70-l w-100'>
                        <h1 className="fw2 f5 f3-ns ttu lh-title mt0 mb3">
                            Nosotros
                        </h1>
                        <h2 className="fw2 f6 f5-ns lh-copy-ns mt0 mb3 tj">
                        Somos ITRESSE, una Start-Up que se enfoca en la creacion de MVP data-driven mediante estrategias digitales bajo el enfoque de Lean UX y ciencia de datos. 
                        Nuestra propuesta se resume en el siguiente cuadro. 
                        
                        </h2>
                        <ul  className='tl fw2 f6 f5-ns lh-copy-ns'>
                            <li>Fase Inicial: Descubrir al cliente (UX).</li>
                            <li>Fase Intermedia: Crear MVP data-driven funcional.</li>
                            <li>Fase Final: Mejora continua con ciencia de datos y UX.</li>
                        </ul>
                    </div>
                    <div className='w-30-l w-100 ma0 pa0' >
{/*                         <div  className='mh2 mb3' >
                            <Button text = {gretting1}  estilo = {estiloButton1} onSumbitSubscription = {this.onSumbitSubscription} />
                        </div> */}
                        <div  className='mh2 mb3' >
                            <Button text = {gretting}  estilo = {estiloButton2} onSumbitSubscription = {this.onSumbitSubscription} />
                        </div>   
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-center br3 w-90-l vh-30-l  center  luz mv1 ph4 pv4' >
                    <div className='ph2-ns w-70-l w-100'>
                        <h1 className="fw2 f5 f3-ns ttu lh-title mt0 mb3">
                        Historia
                        </h1>
                        <h2 className="fw2 f6 f5-ns lh-copy-ns mt0 mb3 tj">
                        El fundador de esta iniciativa es el candidato a Master en Computer Science de la UNI, Lima-Peru, Jhon Vargas Reyes que es quien lidera el equipo. 
                        Bajo su experiencia esta liderar equipos de telecomuniaciones bajos el enfoque agil por mas de 10ños. 
                        Experiencia en Projectos bajo el enfoque PMI, Metododos Agiles y Desing Thinking.                         
                        </h2>

                    </div>
                    <div className='ma0 pa0 center' >
                            <img
                            src={fotoportada}
                            className=' vh-20 db pa0 ma0 br4 '
                            alt='Bch. Jhon Vargas'
                            />
                            <a className="btn contact-details f5-l f6 pa1 mt3" href="https://www.linkedin.com/in/yonkeenn/" target="_blank" rel='noreferrer'>
                            <i className="fab fa-linkedin pr1"></i>
                            LinkedIn
                            </a>  
{/*                             <a className="btn contact-details f5-l f6 pa1 mt3" href="https://yonkeenn.com/" target="_blank" rel='noreferrer'>
                            <i className="fab fa-blogger pr1"></i>
                            Blog
                            </a>    */}    
                    </div>
                </div>
            </div>


        </section>
    
    );

}
}

export default Nosotros;
