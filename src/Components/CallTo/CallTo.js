import React, { Component } from 'react';
import './CallTo.css';
import Button from '../Button/Button';

class CallTo extends Component {

    render (){

        return (

            <div id='calltoaction' className='img-back2 '>

                <section id="contact" className='tc'>

                    <div className='center tc white mt6 ma0' >
                        <h2 className='f1-ns f3 ttu' >¡Trabajemos juntos!</h2>
                        <p className='f3-ns f6'>¿A que hora nos vemos?</p>
                    </div>

                    <div className='flex flex-wrap justify-center center flex-column flex-row-l mt4'>

                        <a className="btn contact-details f5-l f6 pa1 pr5-l" href="mailto:conversemos@itresse.com" target="_blank" rel='noreferrer'>
                            <i className="fas fa-at pr1"></i>
                            Enviame un mensaje
                        </a>

                        <a className="btn contact-details f5-l f6 pa1" href="tel:+51-902551938" target="_blank" rel='noreferrer'>
                            <i className="fas fa-mobile-alt pr1"></i>
                            Llamame
                        </a>

                    </div>

                    <div className='mv4' >
                        <Button text={this.props.gretting} estilo={this.props.estiloButton}/>
                    </div>

                </section>

                <footer className="ph2 ph4-ns black-70 bt white b--black-10">
                    <div className="flex flex-column flex-row-l mt3 items-center justify-between-l">

                        <div className='dn-s dn-m'>
                            <article className="fl w-40 dib-ns w-auto-ns mr4-m mr5-l mb0 pr2 pr0-ns">
                                <h4 className="f7 f5-l fw1 ma0">Telefono</h4>
                                <a className="f7 f5-ns db fw6 pv0 black-70 white link dim" title="Call SF" href="tel:+51-997502031">
                                    +51-997502031
                                </a>
                            </article>

                            <article className="fl w-40 dib-ns w-auto-ns mr4-m mr5-l mb0 pl2 pl0-ns">
                                <h4 className="f7 f5-l fw1 ma0">Email</h4>
                                <a href="mailto:" className="f7 f5-ns db fw6 pv0 white link dim black-70" title="conversemos@itresse.com">
                                    hola@itresse.com
                                </a>
                            </article>
                        </div>
                    

                        <div className="db dtc-ns black-70 tc tr-ns v-mid ">

                            <a className=" link hover-silver near-white dib mv1 mh2 tc" href="https://instagram.com/itresseai" target="_blank" rel='noreferrer'>
                                <i className="fab fa-instagram f2"></i>
                            </a>
        
                            <a className="link hover-silver near-white dib mv1 mh2 tc" href="https://facebook.com/itresseai" target="_blank" rel='noreferrer'>
                                <i className="fab fa-facebook-square f2"></i>
                            </a>
        
                            <a className="link hover-silver near-white dib mv1 mh2 tc" href="https://wa.me/51997502031?text=Hola%2C+ITRESSE%2C+Estoy+interesado+en+sus+servicios" target="_blank" rel='noreferrer'>
                                <i className="fab fa-whatsapp f2"></i>
                            </a>
        
                        </div>
                        
                    </div>
                    
                    <div className="tc center pa0 ma0">
                            <p className="f7 white">
                                Copyright © iTresse
                            </p>
                    </div>
                </footer>

            </div>
            
    );
    
    }
    }
    
    export default CallTo;