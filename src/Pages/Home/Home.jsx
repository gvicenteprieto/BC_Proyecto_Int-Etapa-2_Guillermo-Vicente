import React from "react";
import Banner from "../../Components/Banner/Banner";
import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import ProductsCard from "../../Components/Products/ProductsView/ProductsCard";
const Home = () => {
  const { products, loading } = useContext(ProductContext);

  const [sale, setSale] = useState(true);

  return (
    <>
      <main className="main__index">
        <h1>Nuestros Productos</h1>
        <section id="category" className="category">
          {/* <h4>Categorías</h4>
          {<div class="category__list"></div>}
          <article class="category__list"></article> */}

          {loading === false ? (
            <h3>Cargando Productos...</h3>
          ) : (
            <div className="products-list">
              {loading === true && products.length === 0 ? (
                <h3>No hay productos registrados</h3>
              ) : (
                <>
                  <div>
                    <h3>Productos ordenados por orden alfabético</h3>
                    <h4>Total de Productos registrados: {products.length}</h4>
                  </div>

                  <div className="section__products">
                    {products.map((product) => (
                      <ProductsCard
                        key={product.name}
                        product={product}
                        sale={sale}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </section>
      </main>
      <Banner />
    </>
  );
};

export default Home;
