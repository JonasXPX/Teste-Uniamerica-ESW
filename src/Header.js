import React, { Component } from 'react'
import './sass/styles.sass'
import {NavLink } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink activeClassName="active" to="/">
                    <img className="logo" src={require('./assets/iconLar.png')} />
                </NavLink>

                <div className="left">
                    <ul>
                        <li>Sobre</li>
                    </ul>
                </div>
            </div>
        )
    }
}
