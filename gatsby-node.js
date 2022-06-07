const path = require("path")
// const data = require("./data")
const {createFilePath} = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const blogPostTpl = path.resolve("./src/templates/blogPosts.js")

    return graphql(`
    {
            allMdx(
                sort: {order: DESC, fields: frontmatter___date}
                filter:{frontmatter:{published:{eq:true}}}
            ){
                nodes{
                    fields{
                        slug
                    }
                    frontmatter{
                        title
                    }
                }
            }
        }
    `).then(result=>{
        if(result.errors){
            throw result.errors
        }
        const posts = result.data.allMdx.nodes

        posts.forEach((post,index)=>{
            const previous = index === posts.length-1?null: posts[index+1]
            const next = index===0?null:posts[index-1];
            createPage({
                path: post.fields.slug,
                component: blogPostTpl,
                context:{
                    slug: post.fields.slug,
                    previous,
                    next
                }
            })
        })
    })

}

exports.onCreateNode = ({node,actions,getNode})=>{
    const {createNodeField}=actions;
    if(node.internal.type==='Mdx'){
        const value = createFilePath({node,getNode})
        createNodeField({
            name:'slug',
            node,
            value
        })
    }
}
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    if (getConfig().mode === 'production') {
      actions.setWebpackConfig({
        devtool: false
      });
    }
  };
/*
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if ( node.internal.type === 'MarkdownRemark' ) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: 'slug',
            node,
            value
        })
    }
}*/
