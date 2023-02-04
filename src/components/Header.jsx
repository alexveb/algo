import React from "react";
import Heading from "./Heading";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';


function Header() {

    const redirect = () => {
        window.location.href = "/";
    };
    return (
    
            <div className="row logo">
                <div className="col-lg-4 container d-flex justify-content-center align-items-center">
                    <img onClick={redirect} className="logo-img logo-img-mobile pointer"
                    src="images/algo-logo.ico"
                    alt="logo"
                    />
                </div>
                <div onClick={redirect} className="heading heading-mobile col-lg-4 pointer">
                    <h5 className="sizeHeaderh5 sizeHeaderh5m" style={{color: "white"}}>EΛΛHNIKH ETAIPEIA AΛΓΟΛΟΓΙΑΣ</h5>        
                    <h5 className="sizeHeaderh5 sizeHeaderh5m" style={{color: "#268ABD"}}>HELLENIC SOCIETY OF ALGOLOGY</h5>
                    <h6 className="sizeHeaderh6 sizeHeaderh6m" style={{color: "white"}}>ΕΛΛΗΝΙΚΟ TMHMA ΤΗΣ IASP & EFIC</h6>
                    <h6 className="sizeHeaderh6 sizeHeaderh6m" style={{color: "#268ABD"}}>GREEK CHAPTER OF IASP & EFIC</h6>
                </div> 
                <div className="col-lg-4">
                <Heading className=""/>
                <div className="d-flex justify-content-center align-items-center pointer spaceFromTop-mobile">
                <Button className="loginRegister loginRegister" variant="primary" href="#">Είσοδος</Button>
                <Button className="loginRegister loginRegister" variant="primary" href="#">Εγγραφή</Button>
                </div>
                
                </div>
            </div>
    );
}

export default Header;