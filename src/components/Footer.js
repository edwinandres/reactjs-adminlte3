import React from "react";
import logo_siata from '../images/logo_siata.png'
import '../components/styles/Footer.css'

export default function Footer() {
    return (
        /* <footer className="main-footer"> */
        <footer className="">
            <div className="Footer">
                <div className="w33">
                    <img src={logo_siata} alt="Logo Siata"></img>
                </div>
                <div className="w33">
                    <img src={logo_siata} ></img>
                </div>
                <div className="w33">
                    <img src={logo_siata} ></img>
                </div>
            </div>
            
            
        </footer>
    );
}
