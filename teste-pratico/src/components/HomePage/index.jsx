import React, { useEffect, useState } from "react";
import line from "../../assets/Line.png";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import { newsletter } from "../../services/api";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./styles.css";
import ProductList from "../ProductList";

const validationSchema = Yup.object({
  name: Yup.string().required("Valor é requerido"),
  email: Yup.string().email("E-mail não válido").required("Valor é requerido"),
});

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { email, name } = values;
        await newsletter(email, name);
        alert("Mensagem enviada com sucesso!");
      } catch (error) {
        alert("Mensagem não enviada!");
      }
    },
  });

  return (
    <main className="container">
      <div className="banner-container">
        <div className="banner">
          <span className="banner-text">
            Olá, o que você está buscando? <br />
            <b>Criar ou migrar seu e-commerce?</b>
          </span>
        </div>
      </div>

      <section className="product-container">
        <div className="tittle-product">
          <h1>Mais Vendidos</h1>
          <img src={line} />
        </div>

        <div className="product-nav">
          <img className="arrow" src={left} />

          <ProductList products={products} setProducts={setProducts}/>

          <img className="arrow" src={right} />
        </div>
      </section>

      <Form onSubmit={formik.handleSubmit} className="container-form">
        <h2>Participe de nossas news com promoções e novidades!</h2>

        <div className="contact-form">
        {formik.errors.name && <span>{formik.errors.name}</span>}
          <input
            id="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Digite seu nome"
          />
          {formik.errors.email && <span>{formik.errors.email}</span>}
          <input
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Digite seu email"
          />
          <button type="submit">Eu quero!</button>
        </div>
      </Form>
    </main>
  );
}
