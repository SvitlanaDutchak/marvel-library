import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  return (
    <>
      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;