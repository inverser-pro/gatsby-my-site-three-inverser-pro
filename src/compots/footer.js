import React from "react"

const date_now=new Date().getFullYear()

const Footer = ()=>{
    return<footer>
        copyleft {date_now}. we use: GatsbyJS, React, Google Analytics.
    </footer>;
}

export default Footer;