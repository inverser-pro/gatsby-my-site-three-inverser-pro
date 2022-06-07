import React from "react";
import Svg from "./svgIcon";

const Download = ({ children }) => (
    <a class="dwn" href={children}>
        <Svg
            size1="24"
            hash="zip"
        />
        123
    </a>
)

export default Download