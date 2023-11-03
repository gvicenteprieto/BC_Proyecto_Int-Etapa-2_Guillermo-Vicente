import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [updateProduct, setUpdateProduct] = useState(null);
  const [errorLoad, setErrorLoad] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(false);
    const urlData = "https://6532fc15d80bd20280f632f1.mockapi.io/api/";
    const response = await fetch(urlData + "int_products");
    const data = await response.json();
    if (data) {
      setProducts(data.sort((a, b) => a.name.localeCompare(b.name)));
      setLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchProducts();
    }, 250);
  }, []);

  const addProduct = (product) => {
    const existProduct = products.find((p) => p.name === product.name);
    if (existProduct) {
      setErrorLoad(true);
      toast.warning("El producto que intenta cargar ya existe!");
      return;
    }

    let nameRegex = /^[A-Z 0-9][ A-Za-z 0-9.']{0,30}$/;
    let priceRegex = /^[0-9]+([.][0-9]+)?$/;
    let stockRegex = /^[0-9]+$/;
    let brandRegex = /^[A-Z 0-9][ A-Za-z 0-9.']{0,30}$/;
    let categoryRegex = /^[A-Z][ A-Za-z 0-9.']{0,30}$/;
    let short_descriptionRegex = /^[A-Za-z0-9\s]{1,30}$/;
    let long_descriptionRegex = /^[A-Za-z0-9\s]{1,30}$/;
    let free_shippingRegex = /^[A-Za-z0-9\s]{1,30}$/;
    let age_fromRegex = /^[0-9]{1,2}$/;
    let age_toRegex = /^[0-9]{1,2}$/;
    let photoRegex = /^[A-Za-z0-9\s]{1,300}$/;

    if (
      // product.name.trim() === "" ||
      // product.description.trim() === "" ||
      // product.price.trim() === ""


      // !nameRegex.test(product.name) ||
      // !priceRegex.test(product.price) ||
      // !stockRegex.test(product.stock) ||
      // !brandRegex.test(product.brand) ||
      // !categoryRegex.test(product.category) ||
      // !short_descriptionRegex.test(product.short_description) ||
      // !long_descriptionRegex.test(product.long_description) ||
      // !free_shippingRegex.test(product.free_shipping) ||
      // !age_fromRegex.test(product.age_from) ||
      // !age_toRegex.test(product.age_to) ||
      // !photoRegex.test(product.photo)

      product.name.trim() === "" ||
      product.price.trim() === "" ||
      product.stock.trim() === "" ||
      product.brand.trim() === "" ||
      product.category.trim() === "" ||
      product.short_description.trim() === "" ||
      product.long_description.trim() === "" ||
      product.free_shipping.trim() === "" ||
      product.age_from.trim() === "" ||
      product.age_to.trim() === "" ||
      product.photo.trim() === ""

    ) {
      toast.error("Todos los campos son obligatorios!");
      return;
    }
    const newProduct = {
      // name: product.name,
      // description: product.description,
      // price: product.price,
      // date: product.date,
      name: product.name,
      price: product.price,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
      short_description: product.short_description,
      long_description: product.long_description,
      free_shipping: product.free_shipping,
      age_from: product.age_from,
      age_to: product.age_to,
      photo: product.photo,
    };
    const productsFetch = async () => {
      const urlData =
        "https://6532fc15d80bd20280f632f1.mockapi.io/api/" + "int_products";
      const response = await fetch(urlData, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      setProducts([...products, data]);
    };
    productsFetch();
    toast.success("Producto agregado con éxito!");

    setTimeout(() => {
      fetchProducts();
    }, 750);
  };

  const deleteProduct = async (name) => {
    setErrorLoad(false);
    const productsData = await fetch(
      "https://6532fc15d80bd20280f632f1.mockapi.io/api/int_products"
    );
    const productsDataJson = await productsData.json();
    const productDelete = productsDataJson
      .map((doc) => ({ name: doc.name }))
      .filter((doc) => doc.name === name);

    const productsFetch = async () => {
      const urlData =
        "https://6532fc15d80bd20280f632f1.mockapi.io/api/" + "int_products";
      const response = await fetch(urlData);
      const data = await response.json();
      data.forEach((doc) => {
        if (doc.name === productDelete[0].name) {
          fetch(urlData + "/" + doc.id, {
            method: "DELETE",
          });
        }
      });
    };
    productsFetch();
    setTimeout(() => {
      toast.info("Producto eliminado con éxito!");
      fetchProducts();
    }, 500);
  };

  const editProduct = async (name, product) => {
    const productsData = await fetch(
      "https://6532fc15d80bd20280f632f1.mockapi.io/api/int_products"
    );
    const productsDataJson = await productsData.json();
    const productEdit = productsDataJson
      .map((doc) => ({ name: doc.name }))
      .filter((doc) => doc.name === name);

    const productsFetch = async () => {
      const urlData =
        "https://6532fc15d80bd20280f632f1.mockapi.io/api/" + "int_products";
      const response = await fetch(urlData);
      const data = await response.json();
      data.forEach((doc) => {
        if (doc.name === productEdit[0].name) {
          fetch(urlData + "/" + doc.id, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(product),
          });
        }
      });
    };

    productsFetch();

    setTimeout(() => {
      toast.success("Producto actualizado con éxito!");
      fetchProducts();
    }, 500);
  };

  const searchProducts = async (name) => {
    const productsData = await fetch(
      "https://6532fc15d80bd20280f632f1.mockapi.io/api/int_products"
    );
    const productsDataJson = await productsData.json();
    console.log("productsDataJson", productsDataJson);
    const productSearch = productsDataJson
      .map((doc) => ({ name: doc.name }))
      .filter((doc) => doc.name === name);
    console.log("productSearch", productSearch);
    return productSearch;
  }
  return (
    <ProductContext.Provider
      value={{
        products,
        updateProduct,
        errorLoad,
        loading,
        addProduct,
        deleteProduct,
        editProduct,
        setUpdateProduct,
        setErrorLoad,
        searchProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
