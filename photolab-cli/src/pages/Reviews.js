import { Link } from "react-router-dom";
import React from 'react';

class ReviewsPage extends React.Component {
    render() {
        return (
            <>
              <h1>Reviews</h1>
              <div className="review">
                <h3>Joseph S.</h3>
                <p>"The image of the fire had a very interesting blur effect to it. I quite liked it!"</p>
                <hr />
              </div>
              
              <div className="review">
                <h3>Brigham Y.</h3>
                <p>"The color of each image feels like it was meticulously crafted."</p>
                <hr />
              </div>
              
              <div className="review">
                <h3>John T.</h3>
                <p>"When Justin took a photo for me, I couldn't help but feel a sense of awe."</p>
                <hr />
              </div>
              
              <div className="review">
                <h3>Wilford W.</h3>
                <p>"The snow on the trees was exceedingly white. It reminds me of a story I one heard..."</p>
                <hr />
              </div>
              
              <div className="review">
                <h3>Lorenzo S.</h3>
                <p>"I thought these photos were absolutely stupendous."</p>
                <hr />
              </div>
    
              <div className="review">
                <h3>Joseph F. S.</h3>
                <p>"Never before have I seen lush vegitation portrayed with such fine colors as detailed in this photo."</p>
                <hr />
              </div>
    
    
    
              <p id="disclaimer">*Disclaimer: These reviews are not real.</p>
            </>
        );
    }
}

const Reviews = () => {
  return <ReviewsPage />; 
};

export default Reviews;