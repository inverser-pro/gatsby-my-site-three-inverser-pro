import './src/css/css.css'
import './src/css/prism-funky.css'
/* 
import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Highlight, { defaultProps } from "prism-react-renderer";

const sayHello = (props) => {
console.dir(props)
};

const copyToClipboard = str => {
if (navigator.clipboard) {
    // Most modern browsers support the Navigator API
    navigator.clipboard.writeText(str).then(
    function () {
        console.log("Copying to clipboard was successful!");
    },
    function (err) {
        console.error("Could not copy text: ", err);
    }
    );
} else if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData("Text", str);
}
};

const components = {
  pre: props => <div {...props} />,
  code: props => <>
  <button
    className='copyCode'
    onClick={() => {
        copyToClipboard(props);
      }}
    >
      Скопировать код
    </button>
    <pre>
        <code {...props}>
        </code>
    </pre></>,
};
export const wrapRootElement = ({ element }) => {
return <MDXProvider components={components}>{element}</MDXProvider>;
};
 */

//import { wrapRootElement as wrap } from "./src/compots/wrap-root-element"
 
//export const wrapRootElement = wrap