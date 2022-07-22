import React, { useState } from 'react';
import './App.css';
import { Carrinho } from './Components/Carrinhos';
import { Filtros } from './Components/Filtros';
import { ListaDeProdutos } from './Components/ListaDeProdutos';
import { DivApp, DivListaCarrinho, DivProdutosExibidos } from './Styled.js';
import { Produtos } from './mockDeDados'
import { Header } from './Components/Header';
import Card from './Components/Cards';

function App() {
  const [carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem("carrinho"))||[])
  const [produtoAtual] = useState(Produtos)
  const [consulta, setConsulta] = useState("")
  const [minPreco, setMinPreco] = useState(-Infinity)
  const [maxPreco, setMaxPreco] = useState(Infinity)
  const [ordenar, setOrdenar] = useState("cresc")
  const [ordernarSortido, setOrdenarSortido] = useState("nomeDoProduto")
  const [checkout, setCheckout]=useState(false)

  return (
    <>
    <Header 
    setCheckout={setCheckout}
    />
    {checkout? <Card/> : 
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
      <DivListaCarrinho>
        <DivProdutosExibidos>
          {
            produtoAtual
              .filter(prod => prod.nomeDoProduto.includes(consulta))
              .filter(prod => Number(prod.valor) >= Number(minPreco) || minPreco === "")
              .filter(prod => Number(prod.valor) <= Number(maxPreco) || maxPreco === "")
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
        <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} 
        setCheckout={setCheckout}/>
      </DivListaCarrinho>
  
    </DivApp>}
    
    
    </>
  );
}

export default App;
