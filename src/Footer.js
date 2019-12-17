import React, { Component } from 'react'
import './sass/styles.sass';
import {NavLink} from 'react-router-dom'

export default class Footer extends Component {
    

    render() {
        return (
            <footer className="footer">
                <ul>
                    <li>
                        <NavLink to="/">
                            <p>O Projeto</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <p>Sobre</p>
                        </NavLink>
                    </li>
                </ul>
            </footer>
        )
    }
}
