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
    const response = await fetch(urlData + "products");
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
    if (
      product.name.trim() === "" ||
      product.description.trim() === "" ||
      product.price.trim() === ""
    ) {
      toast.error("Todos los campos son obligatorios!");
      return;
    }
    const newProduct = {
      name: product.name,
      description: product.description,
      price: product.price,
      date: product.date,
    };
    const productsFetch = async () => {
      const urlData =
        "https://6532fc15d80bd20280f632f1.mockapi.io/api/" + "products";
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
      "https://6532fc15d80bd20280f632f1.mockapi.io/api/products"
    );
    const productsDataJson = await productsData.json();
    const productDelete = productsDataJson
      .map((doc) => ({ name: doc.name }))
      .filter((doc) => doc.name === name);

    const productsFetch = async () => {
      const urlData =
        "https://6532fc15d80bd20280f632f1.mockapi.io/api/" + "products";
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
      "https://6532fc15d80bd20280f632f1.mockapi.io/api/products"
    );
    const productsDataJson = await productsData.json();
    const productEdit = productsDataJson
      .map((doc) => ({ name: doc.name }))
      .filter((doc) => doc.name === name);

    const productsFetch = async () => {
      const urlData =
        "https://6532fc15d80bd20280f632f1.mockapi.io/api/" + "products";
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
