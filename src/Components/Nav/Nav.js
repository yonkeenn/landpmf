import React, { Component } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import imgSource2 from './itresse.png'
import './Nav.css';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render (){

        const estiloImg2 = 'pl3 w-40-ns w-40'
        const gretting = 'Hablemos';

        const estiloButton2 = 'br3-ns br3 ba color-boton2 ttu center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow dn-s dn-m';

    return (
        <div className='flex items-center justify-between bg-transparent pr3 pl3 pt3 pb3 br3-l fixed-itresse mw-100'>
            <Logo imgSource = {imgSource2} estiloImg = {estiloImg2} />
            

            <div className='items-center flex ' >
                <ul className='flex ph2'>
                    <li className='fw1 f3-ns f6 fw2 black-80 ph2 list dn-s dn-m'><a href="#home" ><p className='hover-it grow' onClick={()=>this.props.onRouteChange('home')}>Home</p></a> </li>
                    {/* <li className='fw1 f3-ns f6 fw2 black-80 ph2 list dn-s dn-m'><a href="#nosotros" ><p className='hover-it grow' onClick={()=>this.props.onRouteChange('nosotros')}>Nosotros</p></a> </li> */}
                    <li className='fw1 f3-ns f6 fw2 black-80 ph2 list dn-s dn-m'><a href="#calltoaction" ><p className='hover-it grow'>Contacto</p></a> </li>

                </ul>
                <Button text={gretting} estilo={estiloButton2}/>
            </div>





        </div>
        
    );

}
}

export default Nav;

