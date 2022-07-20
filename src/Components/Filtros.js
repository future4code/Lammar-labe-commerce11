import React from "react";
import { InputFiltro } from "../Styled.js";
import { LabelFiltro } from "../Styled.js";
import { TituloFiltro } from "../Styled.js";
import { DivFilto } from "../Styled.js";

export function Filtros(props) {
    return (
        <DivFilto>
            <TituloFiltro>Filtros</TituloFiltro>

            <LabelFiltro>Valor mínimo</LabelFiltro>
            <InputFiltro placeholder="Digite um valor"
                type="number"
                value={props.minPreco}
                onChange={(ev) => { props.setMinPreco(ev.target.value) }}
            ></InputFiltro>

            <LabelFiltro>Valor máximo</LabelFiltro>
            <InputFiltro placeholder="Digite um valor"
                type="number"
                value={props.maxPreco}
                onChange={(ev) => { props.setMaxPreco(ev.target.value) }}
            ></InputFiltro>

            <LabelFiltro>Busca por nome</LabelFiltro>
            <InputFiltro placeholder="Digite o nome"
                value={props.consulta}
                onChange={(ev) => { props.setConsulta(ev.target.value) }}>
            </InputFiltro>

            <select
                value={props.ordernarSortido}
                onChange={(ev) => { props.setOrdenarSortido(ev.target.value) }}
            >
                <option value={"nomeDoProduto"}>Nome</option>
                <option value={"valor"}>Preço</option>
            </select>

            <LabelFiltro>
                Ordenar Por:
                <select
                    value={props.ordenar}
                    onChange={(ev) => { props.setOrdenar(ev.target.value) }}
                >
                    <option value={"cresc"}>Crescente</option>
                    <option value={"desc"}>Decrescente</option>
                </select>
            </LabelFiltro>

        </DivFilto>
    )
}