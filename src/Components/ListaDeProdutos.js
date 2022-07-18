import React from "react"
import { Imagem, ProdutosExibidos } from "../Styled.js"
import { ImagemExibida } from "../Styled.js"
import { DivProdutosExibidos } from "../Styled.js"
import { DivListaDeProdutos } from "../Styled.js"

export const ListaDeProdutos=(props)=>{

    function adicionatItensNoCarrinho(item){
        props.adicionarAoCarrinho([...props.carrinho, item])
    }

    const componentesTarefas=props.meusProdutos.map((item, index)=>{
        return(
            <DivListaDeProdutos key={index}>
                {<Imagem src={item.imagem} alt="" />}
                <ProdutosExibidos>{item.nomeDoProduto}</ProdutosExibidos>
                <ProdutosExibidos>{Number(item.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</ProdutosExibidos>
                <button onClick={()=>adicionatItensNoCarrinho(item)}>Adicionar ao carrinho</button>
            </DivListaDeProdutos>
        )
    })

    return(
        <DivProdutosExibidos>
            {componentesTarefas}
        </DivProdutosExibidos>
    )
}