import React from "react";


const Svg = ({size1,size2="",hash})=>{
    if(size2==="")size2=size1
    const svg = '/_img/i.svg'
    return(
        <>
            <svg className="svg" viewBox={`0 0 ${size1} ${size2}`}>
                <use xlinkHref={`${svg}#${hash}`}></use>
            </svg>
        </>
    )
}

export default Svg