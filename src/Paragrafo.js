import React, { Component } from 'react'

export default class Paragrafo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    render() {
        return (
            <p style={style.paragrafo}>
                { this.props.children }
            </p>
        )
    }
}

const style = {
    paragrafo: {
        color: 'gray',
        fontSize: 12,
        textShadow: '0px 0px 5px #AA110055'
    }
};
