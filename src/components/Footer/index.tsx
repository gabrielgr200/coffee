import './style.css';
import React from 'react';
import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <Container>
      <section className="footer">
        <div className="footer-box">
          <h2>Cafeteria</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, architecto!</p>
          <div className="social">
            <a href="/"><FontAwesomeIcon icon={faFacebook} className='bx' /></a>
            <a href="/"><FontAwesomeIcon icon={faWhatsapp} className='bx' /></a>
            <a href="/"><FontAwesomeIcon icon={faInstagram} className='bx' /></a>
            <a href="/"><FontAwesomeIcon icon={faTwitter} className='bx' /></a>
          </div>
        </div>
        <div className="footer-box">
          <h3>Suporte</h3>
          <li><a href="/">Produtos</a></li>
          <li><a href="/">Ajuda & Suporte</a></li>
          <li><a href="/">Política de devolução</a></li>
          <li><a href="/">Termos De Uso</a></li>
          <li><a href="/">Cookies</a></li>
        </div>
        <div className="footer-box">
          <h3>Ver Guias</h3>
          <li><a href="/">Características</a></li>
          <li><a href="/">Carreiras</a></li>
          <li><a href="/">Postagens No Blog</a></li>
          <li><a href="/">Nossas Filiais</a></li>
        </div>
        <div className="footer-box">
          <h3>Contato</h3>
          <div className="contact">
            <span><FontAwesomeIcon icon={faLocationDot} className='i' /> 100 Divinópolis, BRL 1001</span>
            <span><FontAwesomeIcon icon={faPhone} className='i' /> (+55) 37 99911-3366</span>
            <span><FontAwesomeIcon icon={faEnvelope} className='i' /> GGCoffee@.gmail.com</span>
          </div>
        </div>
      </section>

      <div className="copyright">
        <p>&#169; GGCoffee All Right Reserved</p>
      </div>
    </Container>
  )
}

export default Footer
