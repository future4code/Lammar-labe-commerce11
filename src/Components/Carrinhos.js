import React, {useState} from "react";
import { DivCarrinho } from "../Styled.js";
import { TituloCarrinho } from "../Styled.js";
import { TituloProdutos } from "../Styled.js";
import { DivItensAdicionados } from "../Styled.js";

export function Carrinho(props){

    const componentsCarrinho=props.carrinho.map((item, index)=>{
        
        return(
            <>
                <DivItensAdicionados key={index}>
                    <TituloProdutos>{item.nomeDoProduto}</TituloProdutos>
                    <TituloProdutos>{item.valor}</TituloProdutos>
                </DivItensAdicionados>
            </>
        )
    })

    return(
        <DivCarrinho>
            <TituloCarrinho>Carrinho</TituloCarrinho>
            {componentsCarrinho}
        </DivCarrinho>
    )

}