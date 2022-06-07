import React from "react";
import Header from './header';
import Footer from "../compots/footer";

const Container = ({children}) =>{
    return <>
        <div className="container">
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    </>
}

export default Container