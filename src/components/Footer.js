
import React, { Component } from 'react'
import './style.css'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    {/* eslint-disable-next-line */}
                    <p style={{fontSize:"1.1em"}}> <a>Home</a>|<a>Terms and Conditions</a>|<a>Privacy Policy</a>| <a>Collection Statement</a>| <a>Help</a>|<a>Manage Account </a></p>
                    <br />
                    <p>Copyright @ 2016 DEMO Streaming. All Rights Reserved.</p>
                    <div className="icons">

                    </div>
                </footer>
                
            </div>
        )
    }
}
