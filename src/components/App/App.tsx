import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import ProductsCrud from '../Products/ProductsCrud';


function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <ProductsCrud></ProductsCrud>
      </Container>
    </div>
  );
}

export default App;