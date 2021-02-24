import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar1.css';


class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      route: 'home',
      menuOpen: false
    }
  }

    // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
    console.log(state.menuOpen)
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
    console.log(this.state.menuOpen)
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

    render(){


      return (
        // Pass on our props
        <Menu

        width={ '50%' }
        right
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        
        >

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div >
            <a href="#home" ><p className='hover-it grow pointer tc  f4 f2-m f1-l ma2' onClick={()=> {this.props.onRouteChange('home'); this.closeMenu() }}>Home</p></a>
            {/* <a href="#nosotros" ><p className='hover-it grow pointer tc  f4 f2-m f1-l ma2' onClick={()=>{this.props.onRouteChange('nosotros'); this.closeMenu() }}>Nosotros</p></a>  */}
            <a href="#calltoaction" ><p className='hover-it grow pointer tc  f4 f2-m f1-l ma2' onClick={()=>{this.props.onRouteChange('contacto'); this.closeMenu()}}>Contacto</p></a> 
            
          </div>


          <div className="o-50 ">

            <div className="flex flex-wrap  items-center justify-center  mt4">

              <div className="flex flex-column w-50-l center">

                  <div className="flex flex-column  items-center justify-center mb4-l cf tc center mt4">

                  <article className="fl w-100 dib-ns w-auto-ns  mt4 tc">
                    <a className=" link hover-silver near-white dib mv1 mh2 tc" href="https://instagram.com/itresseai" target="_blank" rel='noreferrer'>
                      <i className="fab fa-instagram f2"></i>
                    </a>
                    <a className="link hover-silver near-white dib mv1 mh2 tc" href="https://facebook.com/itresseai" target="_blank" rel='noreferrer'>
                        <i className="fab fa-facebook-square f2"></i>
                    </a>
                    <a className="link hover-silver near-white dib mv1 mh2 tc" href="https://wa.me/51997502031?text=Hola%2C+ITRESSE%2C+Estoy+interesado+en+sus+servicios" target="_blank" rel='noreferrer'>
                        <i className="fab fa-whatsapp f2"></i>
                    </a>


            
                  </article>

                  <article className="fl w-100 dib-ns w-auto-ns mt3  tc">
                    <a href="tel:+51-997502031" className="f6 db fw1 pv2 link dim white" title="Call Lima office.">
                      +51-997502031
                    </a>
                  </article>

                  <article className="fl w-100 dib-ns w-auto-ns  tc">
                    <a href="mailto:hola@itresse.com" className="f6 db fw1 pv2 link dim white" title="Mail office.">hola@itresse.com</a>
                  </article>

                </div>
              </div>

            </div>
          </div>


          <div className="o-50 tc dt dt--fixed w-100 flex flex-column mt6" >

            <div className="">
              <p className="f7 black-70 dib mb3 white">
                © iTresse 2021
              </p>
            </div>

          </div>


        </Menu>
      );

    }
  
}

export default Sidebar;



