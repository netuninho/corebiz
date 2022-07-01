import React from 'react'
import line from '../../assets/line2.png'
import corebiz from '../../assets/corebiz.png';
import vtex from '../../assets/vtex.png';
import './styles.css';

export default function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='adress'>
          <h3>Localização</h3>
          <img src={line}/>
          <p>
            Avenida Andrômeda, 2000. Bloco 6 e 8 <br/>
            Alphavile SP <br/>
            brasil@corebiz.ag <br/>
            +55 11 3090 1039</p>
        </div>

        <div className='contact'>
          <button>ENTRE EM CONTATO</button>
          <button>FALE COM O NOSSO <br/> CONSULTOR ONLINE</button>
        </div>
        <div className='logo'>
          <img className='corebiz-logo' src={corebiz}/>
          <img className='vtex-logo' src={vtex}/>
        </div>
      </div>
    </footer>
  )
}
