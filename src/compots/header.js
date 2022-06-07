import React from "react";
import {Link} from "gatsby"
import Svg from '../compots/svgIcon'

const Header = ()=>{
    return <nav role="navigation" aria-label="Навигация по сайту">
        <ul className="fx jc p0">
            <li><Link to="/">
                <Svg
                    size1="457.478"
                    hash="d3"
                />Главная</Link>
            </li>
            <li><Link to="/about">
                <Svg
                    size1="24"
                    hash="about"
                />О сайте</Link>
            </li>
            <li><Link to="/links">
                <Svg
                    size1="283.8"
                    hash="links"
                />Ссылки</Link>
            </li>
        </ul>
    </nav>;
}

export default Header;