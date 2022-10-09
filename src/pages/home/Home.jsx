import React from "react";
import {Navbr} from "../../components/navbar/Navbar.jsx";
import { Containr } from "../../components/container/Container.jsx";
import { Footer } from "../../components/footer/Footer.jsx";

export const Home=()=>{
    return(
        <div>
            <Navbr/>
            <Containr/>
            <Footer/>
        </div>
    )
}