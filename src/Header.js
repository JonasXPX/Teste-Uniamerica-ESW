import React, { Component } from 'react'
import './sass/styles.sass'
import {Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/">
                    <img className="logo" src={require('./assets/iconLar.png')} />
                </Link>
            </div>
        )
    }
}
