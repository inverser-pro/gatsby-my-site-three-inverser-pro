import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Container from "../compots/container";
import Seo from "../compots/Seo";
import Intro from "../compots/intro";
import Svg from '../compots/svgIcon'


//import Download from './compots/download';

//const components = { Download }

const blogPosts = (data) =>{
    const {frontmatter,body}=data.data.mdx;
    const {previous, next}=data.pageContext;
    const {nodes}=data.data.allMdx;

    if(typeof window !== `undefined`){
        let mse=false;
        const d = document
        const s=e=>d.querySelector(e)
        //const a=e=>d.querySelectorAll(e)
        d.addEventListener("mouseout",()=>{
            mse=false;
        });
        d.addEventListener("mouseenter",()=>{
            mse=true;
        });
        d.addEventListener("mousemove",()=>{
            mse=true;
        });
        function alt(text){
            const el=s('.alt');
            if(el===null){
                const eq=d.createElement('div');
                eq.classList.add('alt','ovh');
                d.body.append(eq);
            }else{
                el.remove();
                const eq=d.createElement('div');
                eq.classList.add('alt','ovh');
                d.body.append(eq);
            };
            const ew=s('.alt');
            //if(closePopup!==null){
            //    ew.classList.add('altCl');
            //    ew.innerHTML=`<i class=i-inf></i>${text}<div class="pa pclose"><div class="pr fx ac jc br cp i-plcd"></div></div>`
            //}else{
                ew.innerHTML=text;
            //};
            const o_={}
            o_.c=0;
            o_.i=setInterval(()=>{
                if(!mse){/*pause*/
                    ew.classList.add('altClPus');
                }else{/*play*/
                    setTimeout(()=>{o_.c++},1000)
                    ew.classList.remove('altClPus');
                    if(o_.c===18){ew.remove()}
                }
            },500);
        };
        setTimeout(()=>{
            const codes=document.querySelectorAll('pre');
            if(codes.length>0){
                codes.forEach(e=>{
                    console.log(e.classList.contains('language-javascript')||e.classList.contains('language-html'));
                    if(e.classList.contains('language-javascript')||e.classList.contains('language-html')){
                        const btn=document.createElement('button');
                        btn.classList.add('btn','copyMe')
                        btn.innerHTML='<i class="cp br i-copy"></i> Скопировать'
                        e.insertAdjacentElement('beforebegin', btn);
                        btn.addEventListener('click',()=>{
                            const el = document.createElement('textarea');
                            el.value = e.textContent;
                            el.setAttribute('readonly', '');
                            el.style.position = 'absolute';
                            el.style.left = '-9999px';
                            el.style.zIndex = '-9';
                            document.body.appendChild(el);
                            el.select();
                            document.execCommand('copy');
                            document.body.removeChild(el);
                            alt('Скопировано')
                        })
                    }
                })
            }
        },1200)
    }

    return (
        <Container>
            <Seo
                title={frontmatter.title}
                description={frontmatter.description}
            />
            
            <div className="fx art">
            <main className="mArt">
                <Intro
                    link={data.data.mdx.slug}
                />
                <article className="aSnglPage">
                    <header className="pr">
                        <h1 title="Дата создания материала">{frontmatter.title}</h1>
                        <span>
                            <Svg
                                size1="465"
                                hash="date"
                            /><small>Статья создана: <time>{frontmatter.date}</time></small>
                        </span>
                        {frontmatter.artPre&&frontmatter.artPre!==""
                            ? <picture className="pa picIn">
                                    <source srcSet={`${frontmatter.artPre}.avif`} type="image/avif" />
                                    <source srcSet={`${frontmatter.artPre}.webp`} type="image/webp" />
                                    <img
                                    decoding="async" loading="lazy"
                                    src={`${frontmatter.artPre}.jpg`} alt={frontmatter.title} />
                                </picture>
                            : <picture className="pa">
                                <img
                                decoding="async" loading="lazy"
                                src="/favicon.svg" alt={frontmatter.title} />
                            </picture>
                        }
                    </header>
                    <MDXRenderer
                        //components={components}
                    >{body}</MDXRenderer>
                </article>
                <nav className="fx fw fsb" aria-label="Навигация по статьям">
                    {previous === false ? null : (
                        <div className="nextPre">
                            {previous && (
                                <Link
                                    to={previous.fields.slug}
                                    title={`Предыдущая статья: «${previous.frontmatter.title}»`}
                                >
                                    <span className="arrw"></span> {previous.frontmatter.title}
                                </Link>
                            )}
                        </div>
                    )}
                    {next === false ? null : (
                        <div className="nextPre">
                            {next && (
                                <Link
                                    to={next.fields.slug}
                                    title={`Следующая статья: «${next.frontmatter.title}»`}
                                >
                                    <span className="arrw arrwR"></span> {next.frontmatter.title}
                                </Link>
                            )}
                        </div>
                    )}
                </nav>
            </main>
            <aside>
                <h3 className="ml1">
                    <Svg
                            size1="489.7"
                            hash="list"
                    />Все статьи:</h3>
                <ul>
                    {nodes.map((node,ind)=>{
                        let clNm='';
                        let short='';
                        if(node.frontmatter.short_to_menu)short=node.frontmatter.short_to_menu.split('|');
                        if(data.data.mdx.slug===node.slug)clNm='activeNav';
                        if(node.frontmatter.short_to_menu&&node.frontmatter.published&&node.frontmatter.category==='article'){
                            return (
                            <li key={ind}>
                                <Link
                                    to={`/${node.slug}`}
                                    className={clNm}
                                >
                                    {short[0]}
                                    <small className='db'>{short[1]}</small>
                                </Link>
                            </li>
                            )
                        }
                        return
                    })}
                </ul>
            </aside>
            </div>
        </Container>
    )
}

export default blogPosts

export const queryToPost = graphql`

query PostsBySlug($slug: String!){
    mdx(fields:{slug: {eq: $slug}}){
        body
        slug
        frontmatter{
            title
            description
            date(formatString: "D.MM.YYYY", locale: "ru-ru")
            artPre
        }
    }
    allMdx(sort: {fields: [frontmatter___date], order: ASC}) {
            nodes {
            slug
            frontmatter {
                short_to_menu
                published
                category
            }
            }
        }
}

`