import React from "react"
import { Imagem, ProdutosExibidos } from "../Styled.js"
// import { ImagemExibida } from "../Styled.js"
import { DivListaDeProdutos } from "../Styled.js"

export const ListaDeProdutos = (props) => {

    function adicionatItensNoCarrinho(item) {
        props.setCarrinho([...props.carrinho, item])
    }
    return (
        <DivListaDeProdutos>
            <Imagem src={props.prod.imagem} alt="" />
            <ProdutosExibidos>{props.prod.nomeDoProduto}</ProdutosExibidos>
            <ProdutosExibidos>{Number(props.prod.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</ProdutosExibidos>
            <button onClick={() => adicionatItensNoCarrinho(props.prod)}>Adicionar ao carrinho</button>
        </DivListaDeProdutos>
    )
}