import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Blog logo</h2>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/about">About</Link>
                <Link to="/create" >New Post</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;