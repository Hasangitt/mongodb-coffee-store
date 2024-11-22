import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="md:w-2/3 md:mx-auto flex justify-between mb-10 mt-10">
            <NavLink to="/"><button className="btn">Home</button></NavLink>
            <NavLink to="/signin"><button className="btn">Sign In</button></NavLink>
            <NavLink to="/signup"><button className="btn">Sign Up</button></NavLink>
            <NavLink to="/coffees"><button className="btn">Coffees</button></NavLink>
            <NavLink to="/users"><button className="btn">Users</button></NavLink>
        </div>
    );
};

export default Header;