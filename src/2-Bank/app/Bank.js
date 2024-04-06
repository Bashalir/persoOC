import React from 'react';

import BankRoutes from '../components/-Routes';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Bank() {
  return (
    <div>
      <Header />
      <BankRoutes />
      <Footer />
    </div>
  );
}

export default Bank;