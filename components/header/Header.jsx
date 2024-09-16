import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHouse, faBackward } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
    

    <nav className="navbar navbar-expand-lg ">

      <div id="nav-bar-container" className="container-fluid">
      <img  id="header-logo" src="components/header/img/DDLOGO.jpg" alt="" />
     
      <form id="search" className="d-flex" role="search">
            <input id="search-btn" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="header-btn" className="navbar-nav  me-auto mb-2 mb-lg-0 ">
          <FontAwesomeIcon  icon={faCartShopping} />
          
            <li className="nav-item margin-5">
            
              <a className="nav-link active custom-button " aria-current="page" href="/Cart">
              Cart</a>
              


            </li>
            <FontAwesomeIcon icon= {faHouse} />
            <li className="nav-item margin-5">
           
              <a className="nav-link active custom-button" href="/">Home</a>
            </li>
            
            <FontAwesomeIcon icon={faUser} />
            <li className="nav-item margin-5">
           
              <a className="nav-link active custom-button" href="/login">Login</a>
            </li>


           
          
          </ul>
          {/* <button id="back-btn" className="btn custom-button">Back</button> */}
          
        </div>

        
      </div>
      
    </nav>



    </>
  );
}

export default Header;
