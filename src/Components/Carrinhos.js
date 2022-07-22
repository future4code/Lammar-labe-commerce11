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
            localStorage.setItem("carrinho", JSON.stringify(novoCarrinho))
        }
        return(
                <DivItensAdicionados key={index}>
                    <p>{item.Quantidade}</p>
                    <TituloProdutos>{item.nomeDoProduto}</TituloProdutos>
                    <DivPrecoRemover>
                        <TituloProdutos>{Number((item.valor) * (item.Quantidade)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TituloProdutos>
                        <ButtonDeletar onClick={deletarProdutos}>x</ButtonDeletar>
                    </DivPrecoRemover>
                </DivItensAdicionados>
        )
    })
    let valorItens = props.carrinho.reduce((total, item)=> Number(total) + (Number(item.valor)* (item.Quantidade)), 0)

    return(
        <DivCarrinho>
            <TituloCarrinho>Carrinho</TituloCarrinho>
            {componentsCarrinho}
            <ValorFinalCarrinho>TOTAL: {valorItens.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</ValorFinalCarrinho>
            <ButtonCheckout onClick={()=>props.setCheckout(true)}>FINALIZAR PEDIDO</ButtonCheckout>



        </DivCarrinho>
    )

}