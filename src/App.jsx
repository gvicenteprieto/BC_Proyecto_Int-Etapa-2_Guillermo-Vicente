import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import { CartProvider } from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";
import { Routes, Route } from "react-router-dom";
import ModalWelcome from "./Components/Modal/ModalWelcome";
import Header from "./Components/Header/Header";
// import ProductsList from "./Components/Products/ProductsList";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Shops from "./Components/Shops/Shops";
import Error from "./Components/Error/Error";
function App() {
  return (
    <>
      <div className="App">
        {/* <ModalWelcome /> */}
        <ProductProvider>
          <CartProvider>
            <Header />
            {/* <Navbar /> */}
            <Routes>
              {/*<Route path="/" element={<ProductsList />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/update" element={<Products />} />
              <Route path="/shops" element={<Shops />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ProductProvider>
      </div>
    </>
  );
}

export default App;
