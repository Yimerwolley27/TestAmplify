import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
    return (
      <div>
        <nav className="nav">
             <a className="navbar-brand" href="#">
              <img classNameName="logo" src ="https://www.costargroup.com/images/librariesprovider3/costar-group/costar_group-logo.png?sfvrsn=2"/>
            </a>
            <ul>
            <li>
                <Link to ='/Home'> HOME </Link>
              </li>
              <li>
                <Link to ='/Data'> DATA </Link>
              </li>
              <li>
                <Link to ='/Results'> RESULT </Link>    
              </li>
              <li>
                <Link to ='/Posts'> POST </Link>
              </li>
            </ul>
        </nav>
        <Outlet />
      </div>

    )
}