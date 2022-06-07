module.exports={
    siteMetadata:{
        title: 'Three JS от основ до профессионального использования',
        author:{
            name:'inverser',
            summary:'Профессиональный уровень владения ThreeJS'
        },
        description:'Овладейте ThreeJS — многофункциональной библиотекой для создания WEBGL сцены в браузере',
        siteUrl:'https://three.inverser.pro/'
    },
    plugins:[
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-mdx',
            options:{
              extensions:['.mdx','md']
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options:{
              name:'articles',
              path: `${__dirname}/articles`
            },
        },
        /* {
            resolve: `gatsby-source-filesystem`,
            options:{
              name:'img',
              path: `${__dirname}/src/img/_img`
            },
        }, */
        /*'gatsby-plugin-sharp',
        'gatsby-remark-images',*/
        {
            resolve:'gatsby-plugin-mdx',
            options:{
                gatsbyRemarkPlugins:[
                    {
                        resolve:'gatsby-remark-images',
                        options:{
                            maxWidth:2400
                        }
                    },
                    //'gatsby-remark-embed-video',
                    //'gatsby-remark-responsive-iframe',
                    //'gatsby-remark-embed-youtube'
                    {
                        resolve: "gatsby-remark-embed-video",
                        options: {
                          width: 800,
                          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                          height: 400, // Optional: Overrides optional.ratio
                          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                          noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                          loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
                          urlOverrides: [
                            {
                              id: "youtube",
                              embedURL: videoId =>
                                `https://www.youtube.com/embed/${videoId}`,
                            },
                          ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                          containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
                          iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
                        },
                      },
                      {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                          classPrefix: "language-",
                          showLineNumbers: true,
                        },
                      },
                      `gatsby-plugin-image`,
                ]
            }
        },
        /*'gatsby-transformer-remark',*/
        /* {
         resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              
            ],
          },
        },*/
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "G-VYPB99FKCT", // Google Analytics / GA
                //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
                //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
                //optimize_id: "OPT_CONTAINER_ID",
                anonymize_ip: false,
                cookie_expires: 0,
              },
              // This object is used for configuration specific to this plugin
              /*pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
              },*/
            },
          },
          
          /* {
            resolve: `gatsby-plugin-compile-es6-packages`,
            options: {
              modules: [`query-string`]
            }
          } */
    ]
}
