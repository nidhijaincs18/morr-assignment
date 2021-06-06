import React, { Component } from 'react'
import './style.css'


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <p className="navLogo">DEMO Streaming</p>
                    <ul>
                        <li className="login">Log in</li>
                        <li className="trial">Start your free trial</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
