import CartButton from "../Cart/CartButton";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    // <header class="header">
    //   <picture class="header__logo">
    //     <a href="index.html">
    //       <img
    //         id="logo"
    //         width="50px"
    //         src="./images/logo/andy-hermawan-O1jUvZX9DOA.jpg"
    //         alt="Logo"
    //       />
    //     </a>
    //     <h2 class="brandTitle">Juguetería Cósmica</h2>
    //   </picture>
    //   <menu class="search">
    //     <form action="" id="searchForm">
    //       <input type="text" id="nameProd" placeholder="Buscar producto" />
    //       <button type="submit">
    //         <i class="fas fa-search"></i>
    //       </button>
    //     </form>
    //   </menu>
    //   {/* <menu class="cart"> */}
    //     {/* <a href="cart.html"><i class="fas fa-shopping-cart"></i></a> */}
    //     <menu>
    //     <div className="cart-counter">
    //       <CartButton />
    //       <div className="cart-counter-number">
    //         <p>{totalItems()}</p>
    //       </div>
    //     </div>
    //   </menu>
    //   <menu class="menu">
    //     <a href="#" onclick="openMenu()">
    //       <i class="fas fa-bars"></i>
    //     </a>
    //   </menu>
    //   <nav id="links" class="links header__links">
    //     <a class="active" href="index.html">
    //       Home
    //     </a>
    //     <a href="update.html">Alta</a>
    //     <a href="contact.html">Contacto</a>
    //     <a href="about.html">Nosotros</a>
    //     <a href="shops.html">Shops</a>
    //   </nav>
    // </header>

    <nav className="Navbar">
      <h2>Desafío 15</h2>
      <h3>Aplicación de Productos</h3>
      <div className="cart-counter">
        <CartButton />
        <div className="cart-counter-number">
          <p>{
          totalItems()
          }</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
