import React from "react";
import { DivCarrinho, ValorFinalCarrinho } from "../Styled.js";
import { TituloCarrinho } from "../Styled.js";
import { TituloProdutos } from "../Styled.js";
import { DivItensAdicionados, ButtonCheckout } from "../Styled.js";

export function Carrinho(props){

    const componentsCarrinho=props.carrinho.map((item, index)=>{
        
        return(
            <>
                <DivItensAdicionados key={index}>
                    <TituloProdutos>{item.nomeDoProduto}</TituloProdutos>
                    <TituloProdutos>{Number(item.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TituloProdutos>
                </DivItensAdicionados>
            </>
        )
    })
    let valorItens = props.carrinho.reduce((total, item)=> Number(total) + Number(item.valor), 0)

    return(
        <DivCarrinho>
            <TituloCarrinho>Carrinho</TituloCarrinho>
            {componentsCarrinho}
            <ValorFinalCarrinho>TOTAL: {valorItens.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</ValorFinalCarrinho>
            <ButtonCheckout>FINALIZAR COMPRA</ButtonCheckout> 
        </DivCarrinho>
    )

}