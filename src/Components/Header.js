import React from "react";
import { ButtonLogin, DivHeader, DivLogin, DivLogo, ImagemLogin, ImagemLogo, TituloLogo } from "../Styled";
import LoginIcone from '../img/IconePink.png'
import Logo from '../img/logo.png'

export function Header(){
    return(
        <DivHeader>
            <DivLogo>
                <ImagemLogo src={Logo}/>
                <TituloLogo>Universo das camisetas</TituloLogo>
            </DivLogo>

            <DivLogin>
                <ImagemLogin src={LoginIcone} alt="icone-login"/>
                <ButtonLogin>Minha conta</ButtonLogin>
            </DivLogin>
        
        </DivHeader>
    )
}