import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import { Modal } from "./Modal";
import { Escarchador, gel, Perfumes } from "../db/data";

const Main = () => {
  const [modal, setModal] = useState(false);
  const [cardProduct, setCardProduct] = useState({
    name: '',
    descripcion: '',
    precio: '',
    desc: '',
    ml: '',
    tipo: '',
    img: ''
   },)

  const dataPerfumes = Perfumes.map((perfume) => perfume);
  
  const dataEscarchados = Escarchador.map((perfume) => perfume);

  const dataGel = gel.map((gel) => gel);
  
  const handledModal = () => {
    setModal(!modal);
  };

  const handledProduct = (perfume) => {
    setCardProduct({
      name: perfume.name,
      descripcion: perfume.descripcion,
      precio: perfume.precio,
      desc: perfume.desc,
      ml: perfume.ml,
      tipo: perfume.tipo,
      img: perfume.img,
    });
  };

  return (
    <div className="main">
      <Header />
      <div className="box-card">
        <div>
        <p className="title">
            Fragancias
          </p>
        </div>
        {dataPerfumes.map((perfume, i) => (
          <Card key={i} handledModal={handledModal} perfume={perfume} handledProduct={handledProduct}/>
        ))}
      </div>
      <div className="box-card">
        <div>
          <p className="title">
            Fragancias Escarchadas
          </p>
        </div>
        {dataEscarchados.map((perfume, i) => (
          <Card key={i} handledModal={handledModal} perfume={perfume} handledProduct={handledProduct} />
        ))}
      </div>
      <div className="box-card">
        <div>
        <p className="title">
            Geles de Baño
          </p>
        </div>
        {dataGel.map((perfume, i) => (
          <Card key={i} handledModal={handledModal} perfume={perfume} handledProduct={handledProduct} />
        ))}
      </div>

      {modal ? <Modal handledModal={handledModal} modal={modal} cardProduct={cardProduct} /> : ""}
    </div>
  );
};

export default Main;
