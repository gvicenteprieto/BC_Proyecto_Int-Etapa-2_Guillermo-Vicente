import CartButton from "../Cart/CartButton";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setopenMenu] = useState("false");

  const openMenuFunction = () => {
    if (openMenu === "false") {
      setopenMenu("true");
    } else {
      setopenMenu("false");
    }
    alert("Open menu");
  };

  //   function openMenu() {
  //     let links = document.getElementById('links');
  //     if (links.style.display == 'flex') {
  //         links.style.display = "none";
  //     }
  //     else {
  //         links.style.display = 'flex';
  //         links.style.justifyContent = 'space-around';
  //     }
  // }

  const { totalItems } = useContext(CartContext);
  return (
    <header className="header">
      <picture className="header__logo">
        <Link to="/">
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
        <Link onClick={openMenuFunction} to="#">
          <i className="fas fa-bars"></i>{" "}
        </Link>
      </menu>
      <nav id="links" className="links header__links">
        <Link to="/"> Home</Link>
        <Link to="update">Alta</Link>
        <Link to="contact">Contacto</Link>
        <Link to="about">Nosotros</Link>
        <Link to="shops">Shops</Link>
      </nav>
    </header>
  );
};

export default Header;
