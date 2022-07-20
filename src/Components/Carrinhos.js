import React from "react";
import { ButtonDeletar, DivCarrinho, DivPrecoRemover, ValorFinalCarrinho } from "../Styled.js";
import { TituloCarrinho } from "../Styled.js";
import { TituloProdutos } from "../Styled.js";
import { DivItensAdicionados, ButtonCheckout } from "../Styled.js";

export function Carrinho(props){

    const componentsCarrinho=props.carrinho.map((item, index)=>{
        const deletarProdutos = () =>{
            const novoCarrinho = [...props.carrinho]
            const deletar = novoCarrinho.findIndex((produto)=>{
                return produto === item
            })
            novoCarrinho.splice(deletar,1)
            props.setCarrinho(novoCarrinho)
            localStorage.setItem("carrinho", novoCarrinho)
        }
        return(
            <>
                <DivItensAdicionados key={index}>
                    <TituloProdutos>{item.nomeDoProduto}</TituloProdutos>
                    <DivPrecoRemover>
                        <TituloProdutos>{Number(item.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TituloProdutos>
                        <ButtonDeletar onClick={deletarProdutos}>x</ButtonDeletar>
                    </DivPrecoRemover>
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