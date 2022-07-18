import styled from "styled-components";

// APP:

export const DivApp=styled.div`
    display: flex;
    justify-content: space-between;
    height: 95vh;
`

// FILTROS:

export const DivFilto=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 2px solid black;
    margin: 10px 0 0 10px;
    width: 15vw;
`

export const TituloFiltro=styled.h1`
    color: blueviolet;
`

export const InputFiltro=styled.input`
    margin: 5px 0 10px 5px;
`

export const LabelFiltro=styled.label`
    margin: 0 0 0 5px;
`

// LISTA DE PRODUTOS:

export const DivListaDeProdutos=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    margin: 10px 0 0 10px;
    width: 15vw;
    height: 40vh;
`

export const ProdutosExibidos=styled.p`
    font-weight: bold;
    margin-top: 0;
`

export const ImagemExibida=styled.p`
    font-weight: bold;
    margin-top: 20px;
`

export const DivProdutosExibidos=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap; 
    width: 60vw;
`

// CARRINHO:

export const DivCarrinho=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 15vw;
    border: 2px solid black;
    margin: 10px 10px 0 0;

`
export const TituloCarrinho=styled.h1`
    color: blueviolet;
    height: 10vh;
    text-align: center;
`

export const DivItensAdicionados=styled.div`
    display: flex;
    justify-content: space-between;
`

export const TituloProdutos=styled.p`
    margin: 10px 15px;
`

// MOCK:

export const Imagem=styled.img`
    width: auto;
    height: 25vh;
`