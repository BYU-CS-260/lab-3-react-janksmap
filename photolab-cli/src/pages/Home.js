import { Link } from "react-router-dom";

const Home = () => {
    <>
        <div id="main-image">
        <img src="photos/photo (38).jpg"/>
        </div>
        
        <h1>Justin Guptill</h1>
        <p>portrait and nature photography</p>
        <button><Link to="/contact">Contact</Link></button>
    </>
}

export default Home;