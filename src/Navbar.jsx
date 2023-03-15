import logo from "./assests/Logo.svg"
function Navbar () {
    return (
        <div className="head">
            <div>
                <img src = {logo} alt = "food" className="logo"/>
            </div>
      
            <nav>
                <ul>
                    <li> <a href ="#">Home</a> </li>
                    <li> <a  href ="#">About</a></li>
                    <li> <a  href ="#">Menu</a></li>
                    <li> <a  href ="#">Reservations</a></li>
                    <li> <a  href ="#">Order Online</a></li>
                    <li> <a  href ="#">Login</a></li>
                </ul>
            </nav>

        </div>
    );
}
export default Navbar;