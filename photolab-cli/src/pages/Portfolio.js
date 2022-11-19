import { Link } from "react-router-dom";
import React from 'react';

class PortfolioPage extends React.Component {
    render() {
        return (
          <>
            <h1>My Work</h1>
    
              <div id="portfolio-grid" className="container">
                <div className="row">
                  <div className="col-md">
                    <img src={"photos/photo (1).jpg"} alt=""/>
                    <img src={"photos/photo (2).jpg"} alt=""/>
                    <img src={"photos/photo (3).jpg"} alt=""/>
                    <img src={"photos/photo (4).jpg"} alt=""/>
                    <img src={"photos/photo (5).jpg"} alt=""/>
                    <img src={"photos/photo (6).jpg"} alt=""/>
                    <img src={"photos/photo (7).jpg"} alt=""/>
                    <img src={"photos/photo (8).jpg"} alt=""/>
                    <img src={"photos/photo (9).jpg"} alt=""/>
                    <img src={"photos/photo (10).jpg"} alt=""/>
                    <img src={"photos/photo (11).jpg"} alt=""/>
                    
                  </div>
                  <div className="col-md">
                    <img src={"photos/photo (16).jpg"} alt=""/>
                    <img src={"photos/photo (17).jpg"} alt=""/>
                    <img src={"photos/photo (18).jpg"} alt=""/>
                    <img src={"photos/photo (19).jpg"} alt=""/>
                    <img src={"photos/photo (20).jpg"} alt=""/>
                    <img src={"photos/photo (21).jpg"} alt=""/>
                    <img src={"photos/photo (22).jpg"} alt=""/>
                    <img src={"photos/photo (23).jpg"} alt=""/>
                    <img src={"photos/photo (24).jpg"} alt=""/>
                    <img src={"photos/photo (25).jpg"} alt=""/>
                    <img src={"photos/photo (26).jpg"} alt=""/>
                    <img src={"photos/photo (27).jpg"} alt=""/>
                    <img src={"photos/photo (12).jpg"} alt=""/>
    
                    
                  </div>
                  <div className="col-md">
                    <img src={"photos/photo (31).jpg"} alt=""/>
                    <img src={"photos/photo (32).jpg"} alt=""/>
                    <img src={"photos/photo (33).jpg"} alt=""/>
                    <img src={"photos/photo (34).jpg"} alt=""/>
                    <img src={"photos/photo (35).jpg"} alt=""/>
                    <img src={"photos/photo (36).jpg"} alt=""/>
                    <img src={"photos/photo (37).jpg"} alt=""/>
                    <img src={"photos/photo (38).jpg"} alt=""/>
                    <img src={"photos/photo (39).jpg"} alt=""/>
                    <img src={"photos/photo (40).jpg"} alt=""/>
                    <img src={"photos/photo (28).jpg"} alt=""/>
                    <img src={"photos/photo (29).jpg"} alt=""/>
                    <img src={"photos/photo (30).jpg"} alt=""/>
                    
                  </div>
                  <div className="col-md">
                    <img src={"photos/photo (46).jpg"} alt=""/>
                    <img src={"photos/photo (47).jpg"} alt=""/>
                    <img src={"photos/photo (48).jpg"} alt=""/>
                    <img src={"photos/photo (49).jpg"} alt=""/>
                    <img src={"photos/photo (50).jpg"} alt=""/>
                    <img src={"photos/photo (41).jpg"} alt=""/>
                    <img src={"photos/photo (42).jpg"} alt=""/>
                    <img src={"photos/photo (43).jpg"} alt=""/>
                    <img src={"photos/photo (44).jpg"} alt=""/>
                    <img src={"photos/photo (45).jpg"} alt=""/>
                    <img src={"photos/photo (13).jpg"} alt=""/>
                    <img src={"photos/photo (14).jpg"} alt=""/>
                    <img src={"photos/photo (15).jpg"} alt=""/>
                  </div>
                </div>
              </div>
          </>
        );
    }
}

const Portfolio = () => {
  return <PortfolioPage />; 
};

export default Portfolio;