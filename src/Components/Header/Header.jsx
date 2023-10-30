import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link, NavLink } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import Dates from "../Dates/Dates";
import { openMenu } from "../../Utils/dropDown";

const Header = () => {
  const dropDown = () => {
    openMenu();
  }

  const { totalItems } = useContext(CartContext);
  return (
    <>
      <Dates />
      <header className="header">
        <picture className="header__logo">
          <Link to={"/"}>
            <img
              className="logo"
              id="logo"
              width="50px"
              src="./images/logo/andy-hermawan-O1jUvZX9DOA.jpg"
              alt="Logo"
            />
          </Link>
          <h2 className="brandTitle">Juguetería Cósmica</h2>
        </picture>
        <menu className="search">
          <form action="" id="searchForm">
            <input type="text" id="nameProd" placeholder="Buscar producto" />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </menu>
        <menu className="cart">
          <div className="cart-counter">
            <CartButton />
            <div className="cart-counter-number">
              <p>{totalItems()}</p>
            </div>
          </div>
        </menu>
        <menu className="menu">
          <Link onClick={dropDown} to="#">
            <i className="fas fa-bars"></i>{" "}
          </Link>
        </menu>
        <nav id="links" className="links header__links">
          <NavLink to={"/"}> Home</NavLink>
          <NavLink to={"/update"}>Alta</NavLink>
          <NavLink to={"/contact"}>Contacto</NavLink>
          <NavLink to={"/about"}>Nosotros</NavLink>
          <NavLink to={"/shops"}>Shops</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
