import React, { Component } from 'react'
import microsoft  from "../Assets/images/microsoft.png";
import appStore from "../Assets/images/appStore.png";
import googlePlay from "../Assets/images/googlePlay.png";
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
                        <div className="social">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-instagram"></i>
                        </div>
                        <div className="dwnld">
                <img src={appStore} alt="" className="appStore"/>
                <img src={googlePlay} alt="" className="googlePlay"/>
                <img src={microsoft} alt="" className="microsoft"/>
            </div>
                    </div>
                </footer>
                
            </div>
        )
    }
}
