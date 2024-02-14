import React from "react";
import { Container } from "./styles";
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';

export function Card() {
  return (
    <Container>
      <section className='products'>
        <div className="heading">
          <h2>Nossos produtos populares</h2>
        </div>
      </section>
      <div className="products-container">
        <div className="box">
          <img src={p1} alt="" />
          <h3>Arabica Coffee</h3>
          <div className="content">
            <span>R$ 25,00</span>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>

        <div className="box">
          <img src={p2} alt="" />
          <h3>Café Botero</h3>
          <div className="content">
            <span>R$ 25,00</span>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>

        <div className="box">
          <img src={p3} alt="" />
          <h3>Patch Roast</h3>
          <div className="content">
            <span>R$ 25,00</span>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>

        <div className="box">
          <img src={p4} alt="" />
          <h3>Read Coffee Bags</h3>
          <div className="content">
            <span>R$ 25,00</span>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>

        <div className="box">
          <img src={p5} alt="" />
          <h3>Sacred Grounds</h3>
          <div className="content">
            <span>R$ 25,00</span>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>
        
        <div className="box">
          <img src={p6} alt="" />
          <h3>Presto Coffee Bags</h3>
          <div className="content">
            <span>R$ 25,00</span>
            <button>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </Container>
  );
}