import React from "react";
import {Link} from "gatsby"
import Svg from '../compots/svgIcon'

const Intro = ({link})=>{
    if(link!=='intro'&&link!=='about'){
        return(
        <span className="fx jc">
        <Link
            className="hedLnk my2"
            to="/intro">
                <Svg
                    size1="45.333"
                    hash="help"
                />Перейти ко вступительной информации
            </Link>
        </span>
        )
    }
    return <></>
}

export default Intro