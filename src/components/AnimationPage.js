import React from 'react';
import './AnimationPage.css';

class AnimationPage extends React.Component {
    state = {
        showSlideDiv: false
    }

    slideIn = () => {
        this.setState({
            showSlideDiv : !this.state.showSlideDiv
        }) 
    }

    render() {

        return(

            <input type="checkbox" name="toggle" id="toggle" />
            <label for="toggle"></label>

            <div className="anim_container" style={{height:'100%'}}>
                <button onClick={this.slideIn}>Slide</button>

                {this.state.showSlideDiv && 
                    <div className="message">
                        Lorem ipsum dolor sit amet, eu error movet mei, vim congue tibique pertinax ea, 
                        praesent neglegentur eos eu. Eum sint gloriatur persequeris at. Fabellas platonem 
                        his te, ex pro idque senserit, nec nonumes explicari id. Ne sed elit admodum persecuti, 
                        cum omnes noster ocurreret no, dolorum atomorum voluptatibus pri id. Ea pro omnis justo suscipit. 
                        Mel veritus evertitur ut, choro delectus repudiare has te. Mea id maiestatis ullamcorper, eros integre nam no.
                    </div>
                }
            </div>
        )
    }
        
}

export default AnimationPage;