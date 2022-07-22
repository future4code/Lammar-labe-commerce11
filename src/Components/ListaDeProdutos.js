import React, { useState } from "react"
import { Button, Imagem, ProdutosExibidos, TituloProdutosExibidos, ValorProdutosExibidos } from "../Styled.js"
// import { ImagemExibida } from "../Styled.js"
import { DivListaDeProdutos } from "../Styled.js"

export const ListaDeProdutos = (props) => {

    function adicionatItensNoCarrinho(item) {

        const procurarItemNoCarrinho = props.carrinho.findIndex(produto=>produto === item)
        
        if(props.carrinho[procurarItemNoCarrinho]){
            props.carrinho[procurarItemNoCarrinho].Quantidade+=1
            localStorage.setItem("carrinho",JSON.stringify(props.carrinho))
            props.setCarrinho([...props.carrinho])
        }else{
            localStorage.setItem("carrinho", JSON.stringify([...props.carrinho, item]))
            props.setCarrinho([...props.carrinho, item])
        }

    }


    return (
        <DivListaDeProdutos>
            <Imagem src={props.prod.imagem} alt="" />
            <Button onClick={() => adicionatItensNoCarrinho(props.prod) }>ADICIONE AO CARRINHO</Button>
            <TituloProdutosExibidos>{props.prod.nomeDoProduto}</TituloProdutosExibidos>
            <ValorProdutosExibidos>{Number(props.prod.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</ValorProdutosExibidos>
        </DivListaDeProdutos>
    )
}