import React from "react";
import { graphql, Link } from "gatsby";
import Container from "../compots/container";
import Seo from "../compots/Seo";
import js from "../native-js/js"

const Home = ({data}) =>{

    const siteTitle=data.site.siteMetadata.title;
    const siteDescription=data.site.siteMetadata.description;

    const js_ = js;

    return (
        <Container>
            <Seo
                title={siteTitle}
                description={siteDescription}
            />
            <main>
                <h1>Добро пожаловать, бро, на сайтик, который поможет тебе быстро и легко стартануть с ThreeJS!</h1>

                <h2>Здравствуй, странник, пришло время познать истину!</h2>
                <p><strong>С помощью ThreeJS ты сможешь создать небывалые доселе эффекты на своём сайте или на сайте заказчика.</strong></p>
                <p><strong>ThreeJS</strong>&nbsp;&mdash; это&nbsp;<strong>JS</strong>&nbsp;библиотека. способная сотворить чудо, а именно перевести, так сказать, низкоуровневый язык&nbsp;<strong>WEBGL</strong>&nbsp;на более человекопонятный. В какой-то момент времени, ты осознаешь всю мощь&nbsp;<strong>Three JS</strong>&nbsp;и научишься владеть этой библиотекой на высочайшем уровне, укладывая даже твоего сансея на лопатки.</p>
                <p>Но а пока&hellip; Попробуй начать сначала.</p>

                <a rel="nofollow noreferrer noopener" target="_blank" href="//www.youtube.com/watch?v=UNvoDucprRE&list=PL0XYm8bdyeFDGJmFeHDiEXsmLfq3vWBaj">Список воспроизведения со всеми видео по ThreeJS)</a>
                <p></p>
                <a rel="nofollow noreferrer noopener" href="//threejs.org/docs/" target="_blank">Официальная справка по ThreeJS</a>

                <span className="loadYoutube" data-id="UNvoDucprRE"></span>

                <h3>Статеечки:</h3>

                <div className="fx fw mainArt">
                {data.allMdx.nodes.map((post,ind)=>{
                    if(post.frontmatter.category==='article'){
                        return (
                        <Link to={post.slug} className="blog fx" key={ind}>
                            <article className="fx ac w1">
                                <picture>
                                    <source srcSet={`${post.frontmatter.artPre}.avif`} type="image/avif" />
                                    <source srcSet={`${post.frontmatter.artPre}.webp`} type="image/webp" />
                                    <img
                                    decoding="async" loading="lazy" width="480" height="270"
                                    src={`${post.frontmatter.artPre}.jpg`} alt={post.frontmatter.title} />
                                </picture>
                                <div className="w1">
                                    <h3><a href="#">{post.frontmatter.title}</a></h3>
                                    <div className="fx fsb ac">
                                        <time>{post.frontmatter.date}</time>
                                        <button className="br AreadMore">Подробнее...</button>
                                    </div>
                                </div>
                            </article>
                        </Link>
                        )
                    }
                    return
                })}
                </div>
            </main>
            <script>{js_}</script>
        </Container>
    )
}

export default Home;

export const pageQuery=graphql`
    {
        site {
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
        allMdx(sort: {fields: [frontmatter___date], order: ASC}) {
            nodes {
            slug
            frontmatter {
                date(locale: "ru-ru", formatString: "D.MM.YYYY")
                description
                published
                title
                category
                artPre
            }
            }
        }
    }
`;