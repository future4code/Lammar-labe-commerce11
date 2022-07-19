import React, { useState } from 'react';
import './App.css';
import { Carrinho } from './Components/Carrinhos';
import { Filtros } from './Components/Filtros';
import { ListaDeProdutos } from './Components/ListaDeProdutos';
import { DivApp, DivProdutosExibidos } from './Styled.js';
import { Produtos } from './mockDeDados'

function App() {
  const [carrinho, setCarrinho] = useState([])
  const [produtoAtual] = useState(Produtos)
  const [consulta, setConsulta] = useState("")

  return (
    <DivApp>

      <Filtros
        consulta={consulta}
        setConsulta={setConsulta}
      />

      <DivProdutosExibidos>
        {
          produtoAtual
          .filter(prod => prod.nomeDoProduto.includes(consulta))
          .map(prod => <ListaDeProdutos key={prod.id} prod={prod} setCarrinho={setCarrinho} carrinho={carrinho}></ListaDeProdutos>)
        }
      </DivProdutosExibidos>

      <ListaDeProdutos meusProdutos={produtoAtual} adicionarAoCarrinho={setCarrinho} carrinho={carrinho} />
      <Carrinho carrinho={carrinho} />
    </DivApp>
  );
}

export default App;
