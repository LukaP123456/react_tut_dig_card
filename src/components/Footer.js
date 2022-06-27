import React from "react";

export default function Footer(){
    return(
        <div>
            <div className={'footer'}>
                <img src={require('../img/Twitter Icon.png')} alt=""/>
                <img src={require('../img/Facebook Icon.png')} alt=""/>
                <img src={require('../img/Instagram Icon.png')} alt=""/>
                <img src={require('../img/GitHub Icon.png')} alt=""/>
            </div>
        </div>
    )
}