import React, { Component } from 'react';
import Button from '../Button/Button';
import './Problemas.css';
import digital from './digital.svg';
import ventaja from './ventaja.svg';
import step from './step.svg';

class Problemas extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    

    render (){
    
        const gretting = 'Hablemos';
        const estiloButton = 'br3-ns br3 ba color-boton2 ttu white center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow';

    
    return (
        <section id='problemas' className='bg-black pt6-ns pv5 pb3 flex flex-column justify-center align-center tc ' >
            <p className='fw1 f3 f1-ns lh-title ttu'>¿Que Problemas tienes?</p>
            <div className="center w-90 ph3 ph5-l tc br4-ns pv3 flex flex-column flex-wrap justify-center">

                <div className='flex items-center content-between  br3 w-75-l grow vh-20-l pv3 center  luz mv1 ph3' >
                    <div className='ph2-ns'>
                        <h1 className="fw2 f5 f3-ns ttu lh-title mt0 mb3">
                            ¿presencia digital?
                        </h1>
                        <h2 className="fw2 f6 f5-ns lh-copy-ns mt0 mb3 ">
                        Quieres tener presencia digital en tus canales digitales, pero que enganche con tus clientes.
                        </h2>
                    </div>
                    <div className='w-30-l w-100 ma0 pa0  dn-s' >
                        <img
                            src={digital}
                            className='w-100 vh-20 db pa0 ma0 br4 br--right b-white'
                            alt='of a kitty staring at you'
                            />
                    </div>
                </div>

                <div className='flex items-center content-between  br3 w-75-l grow vh-20-l pv3 center  luz mv1 ph3' >
                    <div className='w-30-l w-100 ma0 pa0 dn-s' >
                        <img
                            src={ventaja}
                            className='w-100 vh-20 db pa0 ma0 br4 br--left'
                            alt='of a kitty staring at you'
                            />
                    </div>
                    <div className='ph2-ns'>
                        <h1 className="fw2 f5 f3-ns ttu lh-title mt0 mb3">
                            ¿Interpretar resultados?
                        </h1>
                        <h2 className="fw2 f6 f5-ns lh-copy-ns mt0 mb3 ">
                        Nos sabes como interpretar los datos generados de tus canales digitales y sacarles provecho.
                        </h2>
                    </div>

                </div>

                <div className='flex items-center content-between  br3 w-75-l grow vh-20-l pv3  center  luz mv1 ph3' >
                    <div className='ph2-ns'>
                        <h1 className="fw2 f5 f3-ns ttu lh-title mt0 mb3">
                            ¿Flexibilidad?
                        </h1>
                        <h2 className="fw2 f6 f5-ns lh-copy-ns mt0 mb3 ">
                        Quieres avanzar paso a paso de manera flexible pero generando valor desde el inicio a tu negocio.
                        </h2>
                    </div>
                    <div className='w-30-l w-100 ma0 pa0 dn-s' >
                        <img
                            src={step}
                            className='w-100 vh-20 db pa0 ma0 br4 br--right'
                            alt='of a kitty staring at you'
                            />
                    </div>
                </div>

            </div>

            <div className='tc flex flex-column justify-center mt5'>

                <div className='center flex '>
                    <div  className='center mb3 ph4' >
                        <Button text = {gretting}  estilo = {estiloButton} onSumbitSubscription = {this.onSumbitSubscription} />
                    </div>    
                </div>
                <a href="#proceso" className="arrow1"> 
                    <svg className="icon icon-arrow-down1" width="60" height="60" viewBox="0 0 32 32"> 
                        <g id="icon-arrow-down1">
                            <path className="path1 " d="M4.131 8.962c-0.434-0.429-1.134-0.429-1.566 0-0.432 0.427-0.432 1.122 0 1.55l12.653 12.528c0.434 0.429 1.133 0.429 1.566 0l12.653-12.528c0.432-0.429 0.434-1.122 0-1.55s-1.136-0.429-1.566-0.002l-11.87 11.426-11.869-11.424z" 
                            fill="#B60D35" 
                            ></path>
                        </g>
                    </svg> 
                </a>
            </div>

        </section>
    
    );

}
}

export default Problemas;
