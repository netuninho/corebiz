import React from 'react'
import logo from '../../assets/logoheader.png';
import profile from '../../assets/user.svg';
import cart from '../../assets/cart.svg';
import search from '../../assets/search.svg';
import './styles.css';

export default function Header(props) {
  return (
    <header className='container'>
        <div className='menu'>

          <img className='header-logo' src={logo} alt="Corebiz"></img>
          
          <div className='search-bar'>
            <input type='search' className='search' placeholder='O que está procurando?'></input>
            <img className='icon-search' src={search}/>
          </div>
          
          <div className='menu-mobile'>
            <a className='account'><img src={profile} alt="Minha Conta"/> Minha conta</a>
            <div className='cart'>
              <img src={cart}/>
              <span className='counter'>{props.number}</span>
            </div>  
          </div>
        </div>
    </header>
  )
}