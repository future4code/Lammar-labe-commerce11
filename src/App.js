import React, { useState } from 'react';
import './App.css';
import { Carrinho } from './Components/Carrinhos';
import { Filtros } from './Components/Filtros';
import { ListaDeProdutos } from './Components/ListaDeProdutos';
import { DivApp } from './Styled.js';
import { Produtos } from './mockDeDados'

function App() {
  const [carrinho, setCarrinho]=useState([])
  const [produtoAtual, setProdutoAtual]=useState(Produtos)

  return (
    <DivApp>
      <Filtros/>
      <ListaDeProdutos meusProdutos={produtoAtual} adicionarAoCarrinho={setCarrinho} carrinho={carrinho}/>
      <Carrinho carrinho={carrinho}/>
    </DivApp>
  );
}

export default App;
