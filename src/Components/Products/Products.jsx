import { useState } from "react";
import Modal from "../Modal/ModalWelcome";
import ModalBase from "../Modal/ModalBase";
import ProductsForm from "./ProductsForm";
import ProductsList from "./ProductsList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  // const [openModal, setOpenModal] = useState(false);

  // const handleOpenModal = () => {
  //   setOpenModal(!openModal);
  // };

  const [openModalBase, setOpenModalBase] = useState(false);

  const handleOpenModalBase = () => {
    setOpenModalBase(!openModalBase);
  };


  return (
    <main className="Main">
      <header className="header">
        <h3>Formulario de Carga</h3>
      </header>
      {/* <button className="button" onClick={() => handleOpenModal()}>
        <div>Cargar Modal</div>
      </button>
      {openModal && <Modal />} */}


      <button className="button" onClick={() => handleOpenModalBase()}>
        <div>ModalBase</div>
      </button>
      {openModalBase && <ModalBase title={"this is a title"}/>}
      <ProductsForm />
      <ProductsList />
      <ToastContainer autoClose={800} />
    </main>
  );
};

export default Products;
