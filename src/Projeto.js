import React, { Component } from 'react'
import './sass/styles.sass';

const projetoInfo = [
    {
        name: 'O Problema',
        descricao: `
                Produtos informação fraca ou pouca visibilidade, dificuldade de compreender suas informações
            de rótulo, como proteinas, e seus igredientes que possam ser nocivos para alérgicos.`    
    },
    {
        name: 'O Objetivo',
        descricao: `
                Melhorar a visibilidade de seus produtos, aplicar formas mais vísuais e interativas
            de mostrar os produtos, com clareza e objetividade, em busca por um 
            significativo almento das vendas, divulgação da marca e ampliação do poder.`
    },
    {
        name: 'A Solução',
        descricao: `
                Desenvolver um aplicativo, com base nos problemas apontados.....
            `
    }
];

export class Projeto extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itens: []
        }
    }
    
    render() {
        this.state.itens = [];
        projetoInfo.map((v, i) => {
            this.state.itens.push(
                <div>
                    <h4>{v.name}</h4>
                    <p>{v.descricao}</p>
                </div>
            )
        })
        return (
            <div className="project">
                {this.state.itens}
            </div>
        )
    }
}
