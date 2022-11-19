import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="./index.html">Justin Guptill</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="reviews" className="nav-link">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;