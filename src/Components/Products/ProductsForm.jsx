import { useEffect, useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

const ProductsForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [short_description, setShort_description] = useState("");
  const [long_description, setLong_description] = useState("");
  const [free_shipping, setFree_shipping] = useState("");
  const [age_from, setAge_from] = useState("");
  const [age_to, setAge_to] = useState("");
  const [photo, setPhoto] = useState("");

  const [error, setError] = useState(false);

  const {
    addProduct,
    editProduct,
    updateProduct,
    setUpdateProduct,
    setErrorLoad,
  } = useContext(ProductContext);

  useEffect(() => {
    if (updateProduct) {
      setName(updateProduct.name);
      setPrice(updateProduct.price);
      setStock(updateProduct.stock);
      setBrand(updateProduct.brand);
      setCategory(updateProduct.category);
      setShort_description(updateProduct.short_description);
      setLong_description(updateProduct.long_description);
      setFree_shipping(updateProduct.free_shipping);
      setAge_from(updateProduct.age_from);
      setAge_to(updateProduct.age_to);
      setPhoto(updateProduct.photo);
    } else {
      setName("");
      setPrice("");
      setStock("");
      setBrand("");
      setCategory("");
      setShort_description("");
      setLong_description("");
      setFree_shipping("");
      setAge_from("");
      setAge_to("");
      setPhoto("");
    }
  }, [updateProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const product = { name, description, price };
    const product = {
      name,
      price,
      stock,
      brand,
      category,
      short_description,
      long_description,
      free_shipping,
      age_from,
      age_to,
      photo,
    };

    if (updateProduct) {
      editProduct(updateProduct.name, product);
    } else {
      addProduct(product);
    }
    setTimeout(() => {
      handleReset(e);
    }, 1000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    } else if (e.target.name === "stock") {
      setStock(e.target.value);
    } else if (e.target.name === "brand") {
      setBrand(e.target.value);
    } else if (e.target.name === "category") {
      setCategory(e.target.value);
    } else if (e.target.name === "short_description") {
      setShort_description(e.target.value);
    } else if (e.target.name === "long_description") {
      setLong_description(e.target.value);
    } else if (e.target.name === "free_shipping") {
      setFree_shipping(e.target.value);
    } else if (e.target.name === "age_from") {
      setAge_from(e.target.value);
    } else if (e.target.name === "age_to") {
      setAge_to(e.target.value);
    } else if (e.target.name === "photo") {
      setPhoto(e.target.value);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName("");
    setPrice("");
    setStock("");
    setBrand("");
    setCategory("");
    setShort_description("");
    setLong_description("");
    setFree_shipping("");
    setAge_from("");
    setAge_to("");
    setPhoto("");
  };

  return (
    <main className="main__update">
      <h1>Alta</h1>
      <form className="form form__update" onSubmit={handleSubmit}>
        <label htmlFor="name" className="label__add">
          Nombre
        </label>
        <input
          className="input__add"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="ex: X Men, Osita, etc."
        />

        {/* <div>
          <p id="errorName" class="error-message"></p>
        </div> */}

        <label htmlFor="price" className="label__add">
          Precio
        </label>
        <input
          className="input__add"
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={handleChange}
          placeholder="ex: 0.99, 25.33 etc."
        />
        <label htmlFor="stock" className="label__add">
          Stock
        </label>
        <input
          className="input__add"
          type="number"
          id="stock"
          name="stock"
          value={stock}
          onChange={handleChange}
          placeholder="ex: 1, 10, etc."
        />
        <label htmlFor="brand" className="label__add">
          Marca
        </label>
        <input
          className="input__add"
          type="text"
          id="brand"
          name="brand"
          value={brand}
          onChange={handleChange}
          placeholder="ex: 3M, Cosmic Toys, etc."
        />
        <label htmlFor="category" className="label__add">
          Categoría
        </label>
        <input
          className="input__add"
          type="text"
          id="category"
          name="category"
          value={category}
          onChange={handleChange}
          placeholder="ex: Peluches, Juguetes, etc."
        />
        <label htmlFor="short_description" className="label__add">
          Descripción corta
        </label>
        <input
          className="input__add"
          type="text"
          id="short_description"
          name="short_description"
          value={short_description}
          onChange={handleChange}
          placeholder="ex: Lorem ipsum."
        />
        <label htmlFor="long_description" className="label__add">
          Descripción larga
        </label>
        <input
          className="input__add"
          type="text"
          id="long_description"
          name="long_description"
          value={long_description}
          onChange={handleChange}
          placeholder="ex: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <label htmlFor="free_shipping" className="label__add">
          Envío gratis
        </label>
        <select
          class="input__add"
          name="free_shipping"
          id="free_shipping"
          value={free_shipping}
          onChange={handleChange}
        >
          <option value="1">Si</option>
          <option value="0">No</option>
        </select>
        {/* <input
          className="input__add"
          type="text"
          id="free_shipping"
          name="free_shipping"
          value={free_shipping}
          onChange={handleChange}
          placeholder="Envío gratis del producto"
        /> */}
        <label htmlFor="age_from" className="label__add">
          Edad desde
        </label>
        <input
          className="input__add"
          type="number"
          id="age_from"
          name="age_from"
          value={age_from}
          onChange={handleChange}
          placeholder="Edad desde..."
        />

        <label htmlFor="age_to" className="label__add">
          Edad hasta
        </label>
        <input
          className="input__add"
          type="number"
          id="age_to"
          name="age_to"
          value={age_to}
          onChange={handleChange}
          placeholder="Edad hasta..."
        />
        <label htmlFor="photo" className="label__add">
          Foto
        </label>
        <input
          className="input__add"
          type="text"
          id="photo"
          name="photo"
          value={photo}
          onChange={handleChange}
          placeholder="Foto del producto"
        />

        {updateProduct ? (
          <div className="form-buttons buttons-container">
            <button type="submit" className="edit-button">
              Actualizar Producto
            </button>
            <button type="reset" className="reset-button" onClick={handleReset}>
              Limpiar Formulario
            </button>
          </div>
        ) : (
          <>
            <button type="submit" className="add-button">
              Agregar Producto
            </button>
          </>
        )}
      </form>
    </main>
  );
};

export default ProductsForm;
