import styled from "styled-components";

// HEADER:

export const DivHeader=styled.div`
    background-color: blueviolet;
    height: 4.5vh;
    display: flex;
    flex-direction: row;
`

// APP:

export const DivApp=styled.div`
    display: flex;
    justify-content: space-between;
    height: 95vh;
    background-color: #ece4f5;
`

// FILTROS:

export const DivFilto=styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 10px;
    width: 15vw;
    height: 94vh;
`

export const TituloFiltro=styled.h1`
    color: blueviolet;
    text-align: center;
    margin-bottom: 10px;
    font-family: 'Oswald', sans-serif;
    font-size:25px;

`

export const InputFiltro=styled.input`
    margin: 5px 0 10px 5px;
    font-family: 'Oswald', sans-serif;
    background-color: #ece4f5;
    border: 2px solid blueviolet;
    :hover{
        border: 2px solid purple;
        
    }
    ::placeholder{
        color: purple;
        padding-left: 5px;
    }


`

export const LabelFiltro=styled.label`
    margin: 0 0 0 5px;
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
`

export const Ordenacao=styled.select`
    background-color: #ece4f5;
    border: 2px solid #9a46f9;
    width: 5vw;
`
export const OrdenacaoSortido=styled.select`
    background-color: #ece4f5;
    border: 2px solid #9a46f9;
    margin-left: 5px;
    width: 5vw;
`

export const Option=styled.option`
    border-radius: none;
    text-align: center;
`

// LISTA DE PRODUTOS:

export const DivListaDeProdutos=styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    margin: 10px 20px 0 0;
    width: 15vw;
    height: 40vh;
`

export const TituloProdutosExibidos=styled.p`
    font-weight: bold;
    color: #404040;
    font-family: 'Oswald', sans-serif;
    font-size: 15px;
`

export const ValorProdutosExibidos=styled.p`
    font-weight: bold;
    color: purple;
    margin-top: 0;
    font-family: 'Oswald', sans-serif;
    font-size: 15px;
`

export const DivProdutosExibidos=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap; 
    width: 70vw;
`

export const Button=styled.button`
    border: none;
    width: 15vw;
    margin-top: 5px;
    border-radius: 5px;
    background-color: blueviolet;
    color: white;
    cursor: pointer;

`

// CARRINHO:

export const DivCarrinho=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 20vw;
    margin: 10px 10px 0 0;

`
export const TituloCarrinho=styled.h1`
    color: blueviolet;
    height: 10vh;
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size:25px;
`

export const DivItensAdicionados=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    color: #404040;
`

export const TituloProdutos=styled.p`
    margin: 10px 15px;
`

export const ValorFinalCarrinho=styled.p`
    text-align: end;
    margin: 10px;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    background-color: blueviolet;
    color:white;
`

export const ButtonCheckout=styled.button`
    margin: 10px;
    text-align: center;
    background-color: #ece4f5;
    border: 2px solid blueviolet;
    color: #404040;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    font-size: 15px;
    :hover{
        background-color: #6e06cf;
        color: white;
    }`

export const ButtonDeletar=styled.button`
    width: 1vw;
    height: 2vh;
    background-color: #ece4f5;
    border: none;
    font-family: sans-serif;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    margin-bottom: 5px;
    :hover{
        color: red;

    }

`

export const DivPrecoRemover=styled.div`
    display: flex;
    align-items: center;
`

// MOCK:

export const Imagem=styled.img`
    width: 15vw;
    height: 35vh;
    border-radius: 5px;
`