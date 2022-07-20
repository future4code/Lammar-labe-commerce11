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
  const [minPreco, setMinPreco] = useState(-Infinity)
  const [maxPreco, setMaxPreco] = useState(Infinity)
  const [ordenar, setOrdenar] = useState("cresc")
  const [ordernarSortido, setOrdenarSortido] = useState("nomeDoProduto")
  return (
    <DivApp>

      <Filtros
        consulta={consulta}
        minPreco={minPreco}
        maxPreco={maxPreco}
        ordenar={ordenar}
        ordernarSortido={ordernarSortido}
        setConsulta={setConsulta}
        setMinPreco={setMinPreco}
        setMaxPreco={setMaxPreco}
        setOrdenar={setOrdenar}
        setOrdenarSortido={setOrdenarSortido}
      />

      <DivProdutosExibidos>
        {
          produtoAtual
            .filter(prod => prod.nomeDoProduto.includes(consulta))
            .filter(prod => prod.valor >= minPreco || minPreco === "")
            .filter(prod => prod.valor <= maxPreco || maxPreco === "")
            .sort((atualProduto, proximoProduto) => {
              switch (ordernarSortido) {
                case "valor":
                  return atualProduto.valor - proximoProduto.valor
                case "nomeDoProduto":
                  return atualProduto.nomeDoProduto.localeCompare(proximoProduto.nomeDoProduto)
                default:
              }
            })
            .sort(() => {
              if (ordenar === "cresc") {
                return 0
              } else {
                return -1
              }
            })
            .map(prod => <ListaDeProdutos key={prod.id} prod={prod} setCarrinho={setCarrinho} carrinho={carrinho}></ListaDeProdutos>)
        }
      </DivProdutosExibidos>
      <Carrinho carrinho={carrinho} />

  
    </DivApp>
  );
}

export default App;
