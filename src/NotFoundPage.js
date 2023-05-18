import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return ( <>
    <h1>404 Error </h1>
    <Link to={"/"} className="font-bold p-2">Go Back To Home</Link>
    </> );
}
 
export default NotFoundPage;