import React from "react";
import { InputFiltro } from "../Styled.js";
import { LabelFiltro } from "../Styled.js";
import { TituloFiltro } from "../Styled.js";
import { DivFilto } from "../Styled.js";

export function Filtros(props){
    return(
        <DivFilto>
            <TituloFiltro>Filtros</TituloFiltro>

            <LabelFiltro>Valor mínimo</LabelFiltro>
            <InputFiltro placeholder="Digite um valor"></InputFiltro>

            <LabelFiltro>Valor máximo</LabelFiltro>
            <InputFiltro placeholder="Digite um valor"></InputFiltro>

            <LabelFiltro>Busca por nome</LabelFiltro>
            <InputFiltro placeholder="Digite o nome"
            value={props.consulta}
            onChange={(ev)=>{props.setConsulta(ev.target.value) }}>
            </InputFiltro>
        
        </DivFilto>
    )
}