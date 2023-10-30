import ReactModal from "react-modal";
import { useState } from "react";
import "./styles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    height: "80%",
    color: "white",
    backgroundColor: "grey",
    padding: ".5rem",
  },
};
const ModalBase = ({ title }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  //cerrar el modal al presionar la tecla escape
  const handleCloseModalOut = (e) => {
    if (
      e.key === "27" ||
      e.key === "Escape" ||
      e.key === "Esc" ||
      e.key === "esc" ||
      e.key === 27
    ) {
      setIsOpen(false);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      closeTimeoutMS={200}
      //   className="modal"
      style={customStyles}
      handleCloseModalOut={handleCloseModalOut}
      onRequestClose={handleCloseModal}
    >
      {/* <div className="modal-content"> */}

      <div>
        <div className="modal-header">
          <h1>{title}</h1>
          <button className="modal-button" onClick={handleCloseModal}>
            X
          </button>
        </div>
      </div>

      <main class="main__update">
        <h1>Alta</h1>
        <div id="validationMessage" class="success-message"></div>
        <div id="successMessage" class="success-message"></div>
        <form id="form__update" class="form__update">
          <p id="validationMessage"></p>
          <label for="name" class="label__add">
            Nombre
          </label>
          <input
            class="input__add"
            type="text"
            name="name_prod"
            id="name_prod"
            placeholder="ex: X Men, Osita, etc."
          />
          <div>
            <p id="errorName_prod" class="error-message"></p>
          </div>

          <label class="label__add" for="price">
            Precio
          </label>
          <input
            class="input__add"
            type="text"
            name="price"
            id="price"
            placeholder="ex: 0.99, 25.33 etc."
          />
          <div>
            <p id="errorPrice" class="error-message"></p>
          </div>
          <label class="label__add" for="stock">
            Stock
          </label>
          <input
            class="input__add"
            type="number"
            name="stock"
            id="stock"
            placeholder="ex: 1, 10, etc."
          />
          <div>
            <p id="errorStock" class="error-message"></p>
          </div>
          <label class="label__add" for="brand">
            Marca
          </label>
          <input
            class="input__add"
            type="text"
            name="brand"
            id="brand"
            placeholder="ex: 3M, Cosmic Toys, etc."
          />
          <div>
            <p id="errorBrand" class="error-message"></p>
          </div>
          <label class="label__add" for="category">
            Categoria
          </label>
          <input
            class="input__add"
            type="text"
            name="category"
            id="category"
            placeholder="ex: Peluches, Juguetes, etc."
          />
          <div>
            <p id="errorCategory" class="error-message"></p>
          </div>
          <label class="label__add" for="short_description">
            Descripcion Corta
          </label>
          <input
            class="input__add"
            type="text"
            name="short_description"
            id="short_description"
            placeholder=" Lorem ipsum."
          />
          <div>
            <p id="errorShort_description" class="error-message"></p>
          </div>
          <label class="label__add" for="long_description">
            Descripcion Larga
          </label>
          <input
            class="input__add"
            type="text"
            name="long_description"
            id="long_description"
            placeholder="ex: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div>
            <p id="errorLong_description" class="error-message"></p>
          </div>
          <label class="label__add" for="free_shipping">
            Envio sin Cargo
          </label>
          <select class="input__add" name="free_shipping" id="free_shipping">
            <option value="1">Si</option>
            <option value="0">No</option>
          </select>

          <label class="label__add" for="age_from">
            Edad Desde
          </label>
          <input
            class="input__add"
            type="number"
            name="age_from"
            id="age_from"
            placeholder="Edad Desde"
          />
          <div>
            <p id="errorAge_from" class="error-message"></p>
          </div>

          <label class="label__add" for="age_to">
            Edad Hasta
          </label>
          <input
            class="input__add"
            type="number"
            name="age_to"
            id="age_to"
            placeholder="Edad Hasta"
          />
          <div>
            <p id="errorAge_to" class="error-message"></p>
          </div>
          <label class="label__add" for="photo">
            Foto
          </label>
          <input
            class="input__add"
            type="file"
            name="photo"
            id="photo"
            placeholder="Foto"
          />
          <div>
            <p id="errorPhoto" class="error-message"></p>
          </div>
          <button class="btnSend button__add">Enviar</button>
        </form>
      </main>
    </ReactModal>
  );
};

export default ModalBase;
