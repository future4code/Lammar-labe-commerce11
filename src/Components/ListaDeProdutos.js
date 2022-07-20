import React from "react"
import { Button, Imagem, ProdutosExibidos, TituloProdutosExibidos, ValorProdutosExibidos } from "../Styled.js"
// import { ImagemExibida } from "../Styled.js"
import { DivListaDeProdutos } from "../Styled.js"

export const ListaDeProdutos = (props) => {

    function adicionatItensNoCarrinho(item) {
        props.setCarrinho([...props.carrinho, item])
    }
    return (
        <DivListaDeProdutos>
            <Imagem src={props.prod.imagem} alt="" />
            <Button onClick={() => adicionatItensNoCarrinho(props.prod)}>ADICIONE AO CARRINHO</Button>
            <TituloProdutosExibidos>{props.prod.nomeDoProduto}</TituloProdutosExibidos>
            <ValorProdutosExibidos>{Number(props.prod.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</ValorProdutosExibidos>
        </DivListaDeProdutos>
    )
}