import { Link } from "react-router-dom";
import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <>
              <div id="main-image">
                <img src={"photos/photo (17).jpg"}/>
              </div>
        
              <p className="about">Hey! I’m Justin and I’m a local portrait and nature photographer based out of Provo, UT! I grew up in the Pacific Northwest near Portland, Oregon. The beautiful forests and mountains of Oregon helped me find a passion for photography which continues today. Some of my hobbies include backpacking, road trips, and pickleball. Please feel free to chat with me about photoshoots customized to you! </p>
              
              <button><Link to="/contact">Contact</Link></button>
            </>
        );
    }
}

const About = () => {
  return <AboutPage />; 
};

export default About;