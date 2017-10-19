import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './SlideMenuPage.css';

class SlideMenuPage extends React.Component {

    render() {

        return(
            <div id="outer-container" style={{height:'100%'}}>
                <Menu id="menu" pageWrapId={'page-wrap'} 
                    outerContainerId={'outer-container'} width={'20%'} customBurgerIcon={ <img src="img/icon.svg" /> } >
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                </Menu>
                <main id="page-wrap">
                    demo to a burger menu
                </main>
            </div>
        )
    }
        
}

export default SlideMenuPage;