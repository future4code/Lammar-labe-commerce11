import React from "react";
import { InputFiltro, DivFiltrosOrdenacao, Option, Ordenacao, OrdenacaoSortido, P, LabelFiltroOrdenacao } from "../Styled.js";
import { LabelFiltro } from "../Styled.js";
import { TituloFiltro } from "../Styled.js";
import { DivFilto } from "../Styled.js";

export function Filtros(props) {
    return (
        <DivFilto>
            <TituloFiltro>Filtros</TituloFiltro>

            <DivFiltrosOrdenacao>
                <LabelFiltro>Busca por nome</LabelFiltro>
                <InputFiltro placeholder="Digite o nome"
                    value={props.consulta}
                    onChange={(ev) => { props.setConsulta(ev.target.value) }}>
                </InputFiltro>
            </DivFiltrosOrdenacao>

            <DivFiltrosOrdenacao>
                <LabelFiltro>Valor mínimo</LabelFiltro>
                <InputFiltro placeholder="Digite um valor"
                    type="number"
                    value={props.minPreco}
                    onChange={(ev) => { props.setMinPreco(ev.target.value) }}>
                </InputFiltro>
            </DivFiltrosOrdenacao>

            <DivFiltrosOrdenacao>
                <LabelFiltro>Valor máximo</LabelFiltro>
                <InputFiltro placeholder="Digite um valor"
                    type="number"
                    value={props.maxPreco}
                    onChange={(ev) => { props.setMaxPreco(ev.target.value) }}>
                </InputFiltro>
            </DivFiltrosOrdenacao>

                



            <LabelFiltroOrdenacao>
                <P>Ordenar por:</P>
                <Ordenacao
                    value={props.ordenar}
                    onChange={(ev) => { props.setOrdenar(ev.target.value) }}
                >
                    <Option value={"cresc"}>Crescente</Option>
                    <Option value={"desc"}>Decrescente</Option>
                </Ordenacao>

                <OrdenacaoSortido
                value={props.ordernarSortido}
                onChange={(ev) => { props.setOrdenarSortido(ev.target.value) }}
            >
                <Option value={"nomeDoProduto"}>Nome</Option>
                <Option value={"valor"}>Preço</Option>
            </OrdenacaoSortido>
            </LabelFiltroOrdenacao>

        </DivFilto>
    )
}