import React from 'react';
import Nav from './Components/Nav/Nav';
import Problemas from './Components/Problemas/Problemas';
import HeroWindow from './Components/HeroWindow/HeroWindow';
import Process from './Components/Process/Process';
import Nosotros from './Components/Nosotros/Nosotros'
import CallTo from './Components/CallTo/CallTo';
import './App.css';
import Fracaso from './Components/Fracaso/Fracaso';
import Exito from './Components/Exito/Exito';
import Sidebar from './Components/Sidebar/Sidebar';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route, menuOpen) => {
    this.setState({route: route});
    console.log(route)
  }
  

  
  componentBeforeMount() {
    window.scrollTo(0, 0);
  }






  render(){

    const gretting = 'Hablemos';
    const estiloButton = 'br3-ns br3 ba color-boton2 ttu white center pt2 pb2 pr4 pl4 f5 f3-ns no-underline grow';



    return(

      <div>

          <Sidebar onRouteChange = {this.onRouteChange} />
          <Nav onRouteChange = {this.onRouteChange}/>
          {
            this.state.route === 'nosotros' 
              ? (<div>
                <Nosotros />
                <CallTo gretting={gretting} estiloButton={estiloButton}/>
              </div>)
              : (<div>
                  <HeroWindow gretting={gretting} estiloButton={estiloButton}/>
                  <Problemas />
                  <Process gretting={gretting} estiloButton={estiloButton}/>
                  <Fracaso />
                  <Exito />
                  <CallTo gretting={gretting} estiloButton={estiloButton}/>
                </div>)
                
              
          }
      </div>

    );
  }



}

export default App;