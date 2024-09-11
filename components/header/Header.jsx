import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <>
    

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
          <FontAwesomeIcon  icon={faCartShopping} />
            <li className="nav-item margin-5">
            
              <a className="nav-link active custom-button " aria-current="page" href="#">Kart</a>
            </li>
            <FontAwesomeIcon icon={faUser} />
            <li className="nav-item margin-5">
           
              <a className="nav-link active custom-button" href="#">Login</a>
            </li>
            
          
          </ul>
          
        </div><form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        
      </div>
      
    </nav>




























     








    </>
  );
}

export default Header;
