import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Offerings } from './components/Offerings';
import Contacts from './components/Contacts/Contacts';
import { ContactForm } from './components/ContactForm';
import CTA from './components/CTA/CTA';
import { Cookies } from './components/Cookies';

function App() {
  return (
    <>
      <Header />
      <Offerings />
      <ContactForm />
      <Contacts />
      <CTA />
      <Footer />

      <Cookies />
    </>
  );
}

export default App;
