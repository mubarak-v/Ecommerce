import { useNavigate } from "react-router-dom";
import "./login.css"

function NotFound() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (  <>

    
    <div className="container-a">
        <h1 className="notfound-h1">404</h1>
        <p className="not-found">Temporary Unavailable</p>
        <p className="message">The resource requested could not be found on this server!</p>

        <button onClick={handleClick

        }   className="btn btn-danger btn-large">Home</button>
    </div>
    </>);
}

export default NotFound;