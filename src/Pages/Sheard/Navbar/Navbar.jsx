import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/admission">À propos de nous</Link>
      </li>
      <li>
        <Link to="/success">Produits</Link>
      </li>
      <li>
        <Link to="/about">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contactez-nous</Link>
      </li>
      <li>
        <Link to="/contact">
          <button className="btn btn-outline">Obtenir un devis</button>
        </Link>
      </li>
    </>
  );
  return (
    <Headroom>
      <div className="navbar sticky top-3  bg-opacity-30 bg-base-100  max-w-[1280px] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div className="tooltip  tooltip-right h-14" data-tip="LSOLARI">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
