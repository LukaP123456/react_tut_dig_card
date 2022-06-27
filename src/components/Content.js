import React from "react";

import About from "./About";
import Footer from "./Footer";

export default function Content() {
    return (
        <main className='content'>
            <div className={'bg-black'}>
                <img src={require('../img/rock.jpg')} alt="" className={'slika'}/>
                <h1 className={'Name'}>Laura Smith</h1>
                <p className={'job'}>Frontend Developer</p>
                <small className={'site'}>laurasmith.website</small>
                <br/><br/>
                <button className={'dugme'}>Email</button>

                <About/>
                <Footer/>

                </div>

        </main>
    )
}