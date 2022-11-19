import { Link } from "react-router-dom";
import React from 'react';

class ContactPage extends React.Component {
    render() {
        return (
            <>
                <div id="main-image">
                    <img src={"photos/photo (15).jpg"}/>
                </div>
    
                <h1>Contact</h1>
                <p>Let's chat about doing a photoshoot customized for you!</p>
                <button id="phone-number"><a href="tel:2089953587">208-995-3587</a></button>
                <button><a href="mailto:Justindguptill@gmail.com">Justindguptill@gmail.com</a></button>
            </>
        );
    }
}

const Contact = () => {
  return <ContactPage />; 
};

export default Contact;