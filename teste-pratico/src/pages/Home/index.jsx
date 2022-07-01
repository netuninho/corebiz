import React from 'react';
import Header from '../../components/Header';
import HomePage from '../../components/HomePage';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Header number={localStorage.getItem('contador')}></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </>
  )
}
