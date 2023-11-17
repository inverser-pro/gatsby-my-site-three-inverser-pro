import React from "react"

const date_now=new Date().getFullYear()

const Footer = ()=>{
    return<footer>
        copyleft {date_now}. we use: GatsbyJS, React, Google Analytics. <a href="https://github.com/inverser-pro/gatsby-my-site-three-inverser-pro" rel="noopener" target="_blank">Source code</a>
    </footer>;
}

export default Footer;