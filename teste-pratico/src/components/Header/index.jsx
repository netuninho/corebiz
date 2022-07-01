import React from 'react'
import logo from '../../assets/logoheader.png';
import profile from '../../assets/user.svg';
import cart from '../../assets/cart.svg';
import search from '../../assets/search.svg';
import './styles.css';

export default function Header() {
  return (
    <header className='container'>
        <div className='menu'>

          <img className='logo' src={logo} alt="Corebiz"></img>
          
          {/* <textarea className='search'>O que está procurando?</textarea> */}
          <img className='icon-search' src={search}/>

          <a><img src={profile} alt="Minha Conta"/> Minha conta</a>
          <img src={cart}/>
        </div>
    </header>
  )
}