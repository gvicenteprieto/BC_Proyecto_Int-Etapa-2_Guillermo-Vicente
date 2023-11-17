import Banner from "../../Components/Banner/Banner";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContext";
import ProductsCard from "../../Components/Products/ProductsView/ProductsCard";
const Home = () => {
  const {
    products,
    loading,
    filteredProducts,
    uniqueCategories,
    filteredCategoryProducts,
    handleCategory,
  } = useContext(ProductContext);

  const [sale, setSale] = useState(false);

  useEffect(() => {
    setSale(true);
  }, []);

  return (
    <>
      <main className="main__index">
        <h1>Nuestros Productos</h1>

        {/* <section id="category" className="category">
          <h4>Categorías</h4>

          <article class="category__list">
            <button
              className="category__button"
              value=""
              onClick={handleCategory}
            >
              Todas
            </button>
            {uniqueCategories.map((category) => (
              <button
                className="category__button"
                key={category}
                value={category}
                onClick={handleCategory}
              >
                {category}
              </button>
            ))}
            
            {filteredCategoryProducts ? (
              <section className="category">
                {" "}
                <article className="category__list">
                  <div className="section__products">
                    {filteredCategoryProducts.map((product) => (
                      <ProductsCard
                        key={product.name}
                        product={product}
                        sale={sale}
                      />
                    ))}
                  </div>
                </article>
              </section>
            ) : (
              <></>
            )}
            {filteredProducts ? (
              <section className="section__products">
                <div className="products-list">
                  <div className="section__products">
                    {filteredProducts.map((product) => (
                      <ProductsCard
                        key={product.name}
                        product={product}
                        sale={sale}
                      />
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              <></>
            )}
          </article>

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
        </section> */}

        <section className="category">
          <h4>Categorías</h4>
          {/* {
            <article className="category__list">
              <button
                className="category__item"
                value=""
                onClick={handleCategory}
              >
                Todas
              </button>
              {uniqueCategories.map((category) => (
                <button
                  className="category__item"
                  key={category}
                  value={category}
                  onClick={handleCategory}
                >
                  {category}
                </button>
              ))}
            </article>
          } */}
          {
            <article className="category__list">
              {filteredCategoryProducts ? (
                <div className="section__products">
                  {filteredCategoryProducts.map((product) => (
                    <ProductsCard
                      key={product.name}
                      product={product}
                      sale={sale}
                    />
                  ))}
                </div>
              ) : (
                <></>
              )}
              {filteredProducts ? (
                <div className="section__products">
                  {filteredProducts.map((product) => (
                    <ProductsCard
                      key={product.name}
                      product={product}
                      sale={sale}
                    />
                  ))}
                </div>
              ) : (
                <></>
              )}
            </article>
          }
          <section className="section__products">
            <div className="products-list">
              {loading === false ? (
                <h3>Cargando Productos...</h3>
              ) : (
                <div className="products-list">
                  {loading === true && products.length === 0 ? (
                    <h3>No hay productos registrados</h3>
                  ) : (
                    <>

{
            <article className="category__list">
              <button
                className="category__item"
                value=""
                onClick={handleCategory}
              >
                Todas
              </button>
              {uniqueCategories.map((category) => (
                <button
                  className="category__item"
                  key={category}
                  value={category}
                  onClick={handleCategory}
                >
                  {category}
                </button>
              ))}
            </article>
          }
                      <div>
                        <h3>Productos ordenados por orden alfabético</h3>
                        <h4>
                          Total de Productos registrados: {products.length}
                        </h4>
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
            </div>
          </section>
        </section>
      </main>
      <Banner />
    </>
  );
};

export default Home;
