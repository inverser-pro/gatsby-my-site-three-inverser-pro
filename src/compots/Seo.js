import React from "react";
import {useStaticQuery,graphql} from "gatsby"
import {Helmet} from "react-helmet"

const Seo = ({description,lang,meta,title})=>{
    const {site}=useStaticQuery(graphql`
        query{
            site{
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    description
                    siteUrl
                    title
                }
            }
            
        }
    `)
    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata.title

    return(
        <Helmet
            htmlAttributes={{lang}}
            title={title}
            titleTemplate={ defaultTitle ? `%s | ${defaultTitle}` : null}
            link={[
                {"rel": "shortcut icon", 
                 "type": "image/vnd.microsoft.icon", 
                 "href": "/favicon.ico"
                },
                {"rel": "icon", 
                 "type": "image/svg+xml", 
                 "href": "/favicon.svg"
                },
               ]}
            meta={[
                {
                    property:'og:title',
                    content:defaultTitle
                },
                {
                    name:'description',
                    content:metaDescription
                },
                {
                    property:'og:description',
                    content:metaDescription
                },
                {
                    property:'og:type',
                    content:'website'
                },
                {
                    name:'author',
                    content:site.siteMetadata.author.name
                },
            ].concat(meta)}
        />
    )
}
Seo.defaultProps={
    lang:'ru',
    meta:[],
    description:''
}

export default Seo