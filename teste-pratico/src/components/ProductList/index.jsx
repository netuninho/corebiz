import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import filledStar from '../../assets/filledStar.svg';
import emptyStar from '../../assets/emptyStar.svg';
import './styles.css';



export default function ProductList({ products, setProducts }) {

  const [contar, setContar] = React.useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        alert(`Erro ao carregar posts`);
      }
    };
    loadProducts();
  }, [setProducts]);
  
  function handleClick() {
    setContar((contar) => {
      return contar += 1;
    });
  }
  
  let contador = localStorage.setItem('contador', contar);

  return products.map((product) => {
    return (
      <div key={product.productId} className="product">
        <img src={product.imageUrl} />
        <h4>{product.productName}</h4>
        <div className="starRow">
          {(() => {
            if (product.stars == 0) {
              return (
                <>
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                </>
              );
            } else if (product.stars == 1) {
              return (
                <>
                  <img src={filledStar} />
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                </>
              );
            } else if (product.stars == 2) {
              return (
                <>
                  <img src={filledStar} />
                  <img src={filledStar} />
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                </>
              );
            } else if (product.stars == 3) {
              return (
                <>
                  <img src={filledStar} />
                  <img src={filledStar} />
                  <img src={filledStar} />
                  <img src={emptyStar} />
                  <img src={emptyStar} />
                </>
              );
            } else if (product.stars == 4) {
              return (
                <>
                  <img src={filledStar} />
                  <img src={filledStar} />
                  <img src={filledStar} />
                  <img src={filledStar} />
                  <img src={emptyStar} />
                </>
              );
            } else if (product.stars == 5) {
              return (
                <>
                  <img src={filledStar} />
                  <img src={filledStar} />
                  <img src={filledStar} />
                  <img src={filledStar} />
                  <img src={filledStar} />
                </>
              );
            }
          })()}
        </div>
        {product.listPrice != null ? (
          <span>de R$ {product.listPrice}</span>
        ) : null}
        <p>Por R$ {product.price}</p>
        {product.installments.length > 0 ? (
          <small>
            ou em{" "}
            {product.installments.map((installment) => installment.quantity)}x
            de R$ {product.installments.map((installment) => installment.value)}
          </small>
        ) : null}
        <button
          onClick={handleClick}
        >COMPRAR
        </button>
      </div>
    );
  });
}
