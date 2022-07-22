import styled from "styled-components";

// HEADER:

export const DivHeader=styled.div`
    background-color: blueviolet;
    height: 9vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ImagemLogo=styled.img`
    width: auto;
    height: 8vh;
    margin: 0 10px;
`

export const TituloLogo=styled.h3`
    font-family: 'Oswald', sans-serif;
    color: pink;
    font-size: 20px;

`

export const DivLogo=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const DivLogin=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 `

export const ImagemLogin =styled.img`
    height: 30px;
    width: 30px;
    margin: 0;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        width: 20px;
        height: 20px;
    }
`

export const ButtonLogin=styled.button`
    font-family: 'Oswald', sans-serif;
    width: 5vw;
    height: 3vh;
    margin: 0 10px;
    border: none;
    background-color:blueviolet;
    font-size: 18px;
    color: pink;
    cursor: pointer;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        font-size: 14px;
        width: 20vw;
        margin: 0;
    }

`

// APP:

export const DivApp=styled.div`
    display: flex;
    justify-content: space-between;
    height: 91vh;
    background-color: #ece4f5;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        flex-direction: column;
        height: auto;
        width: 100vw;
    }
`

// FILTROS:

export const DivFilto=styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 10px;
    width: 15vw;
    height: 88vh;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        flex-direction: row;
        height: auto;
        width: auto;
    }

`

export const TituloFiltro=styled.h1`
    color: blueviolet;
    text-align: center;
    margin-bottom: 10px;
    font-family: 'Oswald', sans-serif;
    font-size:25px;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        display: none;
    }

`

export const DivFiltrosOrdenacao=styled.div`
    display: flex;
    flex-direction: column;
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
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        width: 22vw;
    }
`

export const LabelFiltro=styled.label`
    margin: 0 0 0 5px;
    font-family: 'Oswald', sans-serif;
    font-size: 18px;

    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        font-size: 15px;
    }
`

export const LabelFiltroOrdenacao=styled.label`
    margin: 0 0 0 5px;
    font-family: 'Oswald', sans-serif;
    font-size: 18px;

    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        font-size: 15px;
        display: flex;
        flex-direction: column;
    }
`

export const P=styled.p`
        font-family: 'Oswald', sans-serif;
        @media screen and (min-device-width: 330px) and (max-device-width: 480px){
            display: none;
        }
`

export const Ordenacao=styled.select`
    background-color: #ece4f5;
    border: 2px solid #9a46f9;
    width: 5vw;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        width: 22vw;
        margin-top: 8px;

    }
`
export const OrdenacaoSortido=styled.select`
    background-color: #ece4f5;
    border: 2px solid #9a46f9;
    width: 5vw;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        width: 22vw;
        margin-top: 2px;

    }
`

export const Option=styled.option`
    border-radius: none;
    text-align: center;

`

// LISTA - CARRINHO (DIV)

export const DivListaCarrinho=styled.div`
    display: flex;
    flex-direction: row;
    width: 85vw;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        width: 100vw;
    }
`

// LISTA DE PRODUTOS:

export const DivListaDeProdutos=styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    margin: 10px 20px 0 0;
    width: 15vw;
    height: 40vh;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        width: 28vw;

    }
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
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        width: 40vw;
        font-size: 10px;
        border-radius: 2px;
        }

`


// CARRINHO:

export const DivCarrinho=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 20vw;
    margin: 10px 10px 0 0;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        width: 60vw;
        margin: 0;
    }

`
export const TituloCarrinho=styled.h1`
    color: blueviolet;
    height: 10vh;
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size:25px;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        font-size: 20px;
    }
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
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
    }
`

export const ValorFinalCarrinho=styled.p`
    text-align: end;
    margin: 10px;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    background-color: blueviolet;
    color:white;
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        font-size: 15px;
    }
    
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
    }
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        width: 35vw;
    }
    `

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
    @media screen and (min-device-width: 330px) and (max-device-width: 480px){
        width: 40vw;
        height: 25vh;
    }

`