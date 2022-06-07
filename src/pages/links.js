import React from "react";
//import { graphql,Link } from "gatsby";
import Container from "../compots/container";
import Seo from "../compots/Seo";

const dataStr=`Chapter 02. Your First Step with WebGL
ch02/HelloCanvas: //jsfiddle.net/8Observer8/2gky294r/
ch02/HelloPoint1: //jsfiddle.net/8Observer8/cc72u1u5/
ch02/HelloPoint2: //jsfiddle.net/8Observer8/uxw657ud/
ch02/ClickedPoints: //jsfiddle.net/8Observer8/xf4fnc0o/
ch02/ColoredPoints: //jsfiddle.net/8Observer8/gkkmnpga/
Chapter 03. Drawing and Transforming Triangles
ch03/MultiPoint: //jsfiddle.net/8Observer8/cty1120m/
ch03/HelloTriangle: //jsfiddle.net/8Observer8/wk4sksnw/
ch03/HelloQuad: //jsfiddle.net/8Observer8/g4ctyk7w/
ch03/HelloQuad_FAN: //jsfiddle.net/8Observer8/v119e8o6/
ch03/HelloTriangle_LINES: //jsfiddle.net/8Observer8/wwrkaxcf/
ch03/HelloTriangle_LINE_STRIP: //jsfiddle.net/8Observer8/3ggjz4rm/
ch03/HelloTriangle_LINE_LOOP: //jsfiddle.net/8Observer8/7vcyquro/
ch03/TranslatedTriangle: //jsfiddle.net/8Observer8/0dp4xvyt/
ch03/RotatedTriangle: //jsfiddle.net/8Observer8/gh9s6szm/
ch03/RotatedTriangle_Matrix: //jsfiddle.net/8Observer8/7ze7pgpu/
ch03/ScaledTriangle_Matrix: //jsfiddle.net/8Observer8/6xzoe63s/
Chapter 04. More Transformations and Basic Animation
ch04/RotatedTriangle_Matrix4: //jsfiddle.net/8Observer8/t4y7783v/
ch04/RotatedTranslatedTriangle: //jsfiddle.net/8Observer8/b5yfxojp/
ch04/TranslatedRotatedTriangle: //jsfiddle.net/8Observer8/o8voebc9/
ch04/RotatingTriangle: //jsfiddle.net/8Observer8/x9j5vdk7/
ch04/RotatingTranslatedTriangle: //jsfiddle.net/8Observer8/rkrv0322/
ch04/RotatingTriangle_withButtons: //jsfiddle.net/8Observer8/wzoLmdzd/
Chapter 05. Using Colors and Texture Images
ch05/MultiAttributeSize: //jsfiddle.net/8Observer8/dsfgezbj/
ch05/MultiAttributeSize_Interleaved: //jsfiddle.net/8Observer8/bshwnden/
ch05/MultiAttributeColor: //jsfiddle.net/8Observer8/bveykLdf/
ch05/ColoredTriangle: //jsfiddle.net/8Observer8/mrkpms7d/
ch05/HelloTriangle_FragCoord: //jsfiddle.net/8Observer8/ft33yo9s/
ch05/TexturedQuad: //jsfiddle.net/8Observer8/o3vakb3h/
ch05/TexturedQuad_Repeat: //jsfiddle.net/8Observer8/2s7q68cc/
ch05/TexturedQuad_Clamp_Mirror: //jsfiddle.net/8Observer8/mqu0wwma/
ch05/MultiTexture: //jsfiddle.net/8Observer8/ztew5u0p/
Chapter 07. Toward the 3D World
ch07/LookAtTriangles: //jsfiddle.net/8Observer8/6ab11xpg/
ch07/LookAtRotatedTriangles: //jsfiddle.net/8Observer8/944dd57h/
ch07/LookAtRotatedTriangles_modelViewMatrix: //jsfiddle.net/8Observer8/e5t6gj1w/
ch07/LookAtTrianglesWithKeys: //jsfiddle.net/8Observer8/38ewegg2/
ch07/OrthoView: //jsfiddle.net/8Observer8/zebt4u7t/
ch07/LookAtTrianglesWithKey_ViewVolume: //jsfiddle.net/8Observer8/vLcejtm1/
ch07/OrthoView_halfSize: //jsfiddle.net/8Observer8/uvcd9h4p/
ch07/OrthoView_halfWidth: //jsfiddle.net/8Observer8/vepodfb8/
ch07/PerspectiveView: //jsfiddle.net/8Observer8/640pv8qe/
ch07/PerspectiveView_mvp: //jsfiddle.net/8Observer8/w8yh4Lmj/
ch07/PerspectiveView_mvpMatrix: //jsfiddle.net/8Observer8/hhwnx145/
ch07/DepthBuffer: //jsfiddle.net/8Observer8/hyumw026/
ch07/Zfighting: //jsfiddle.net/8Observer8/foc0b45t/
ch07/HelloCube: //jsfiddle.net/8Observer8/rkpn5tyw/
ch07/ColoredCube: //jsfiddle.net/8Observer8/80x8cyom/
ch07/ColoredCube_singleColor: //jsfiddle.net/8Observer8/pespackq/
Chapter 08. Lighting Objects
ch08/LightedCube: //jsfiddle.net/8Observer8/4jchxo84/
ch08/LightedCube_animation: //jsfiddle.net/8Observer8/ekw3osj7/
ch08/LightedCube_ambient: //jsfiddle.net/8Observer8/y6qwnfe1/
ch08/LightedTranslatedRotatedCube: //jsfiddle.net/8Observer8/pa88ujjg/
ch08/PointLightedCube: //jsfiddle.net/8Observer8/vuq118ue/
ch08/PointLightedCube_animation: //jsfiddle.net/8Observer8/5bj39hb8/
ch08/PointLightedSphere: //jsfiddle.net/8Observer8/edz9Lz8f/
ch08/PointLightedSphere_perFragment: //jsfiddle.net/8Observer8/qzwyow4j/
ch08/PointLightedCube_perFragment: //jsfiddle.net/8Observer8/8t1umamf/
ch08/LightedCube_perFragment: //jsfiddle.net/8Observer8/471y2t84/
Chapter 09. Hierarchical Objects
ch09/JointModel: //jsfiddle.net/8Observer8/vqse5egz/
ch09/MultiJointModel: //jsfiddle.net/8Observer8/sL53wkn3/
ch09/MultiJointModel_segment: //jsfiddle.net/8Observer8/ygvk7odv/
Chapter 10. Advanced Techniques
ch10/RotateObject: //jsfiddle.net/8Observer8/1f5hLmff/
ch10/PickObject: //jsfiddle.net/8Observer8/owue624n/
ch10/PickFace: //jsfiddle.net/8Observer8/edvw6z90/
ch10/HUD: //jsfiddle.net/8Observer8/fLxxxs35/
ch10/3DoverWeb: //jsfiddle.net/8Observer8/tbowcc16/
ch10/Fog: //jsfiddle.net/8Observer8/6yf9L399/
ch10/Fog_w: //jsfiddle.net/8Observer8/8aLvthc3/
ch10/RoundedPoints: //jsfiddle.net/8Observer8/sjs5kmn4/
ch10/LookAtBlendedTriangles: //jsfiddle.net/8Observer8/apoz294n/
ch10/BlendedCube: //jsfiddle.net/8Observer8/xsrL2fs5/
ch10/ProgramObject: //jsfiddle.net/8Observer8/jnd0j6w0/
ch10/FramebufferObject: //jsfiddle.net/8Observer8/vaLq6d66/
ch10/Shadow: //jsfiddle.net/8Observer8/jsnfwcae/
ch10/Shadow_highp: //jsfiddle.net/8Observer8/brjzr00n/
ch10/Shadow_highp_sphere: //jsfiddle.net/8Observer8/4fmyLy5f/
ch10/OBJViewer: //jsfiddle.net/8Observer8/pws1x7uv/
ch10/RotatingTriangle_contextLost: //jsfiddle.net/8Observer8/vs01s8Lz/
Gifts
gifts/Particle: //jsfiddle.net/8Observer8/Ltzt31vk/
gifts/Printf: //jsfiddle.net/8Observer8/qsw7jtec/
gifts/SpecularCube: //jsfiddle.net/8Observer8/z4xj9rbv/
gifts/TextTexture: //jsfiddle.net/8Observer8/qt7q2kuf/
gifts/ThreeDUI: //jsfiddle.net/8Observer8/zdw1f2st/
gifts/Wave: //jsfiddle.net/8Observer8/eL9odthz/
gifts/WorldCoordinateSystem: //jsfiddle.net/8Observer8/6utj3hnk/
appendix/CoordinateSystem: //jsfiddle.net/8Observer8/dzz056jt/
Appendix
appendix/CoordinateSystem_viewVolume: //jsfiddle.net/8Observer8/apxLww1q/
appendix/LoadShaderFromFiles: //jsfiddle.net/8Observer8/wdn9ubhj/`

const dataAr=dataStr.split("\n")
const allLinks=dataAr.map(e=>{
  if(e.indexOf(":")!==-1){
    const ahref=e.split(':')
    return <>
      <li><a href={ahref[1]} rel="noreferrer noopener nofollow" target="_blank">{ahref[0]}</a></li>
    </>
  }else{
    return <>
      <li className="pl.75">{e}</li>
    </>
  }
})
//https://www.youtube.com/watch?v=uwzEqeMd7uQ&t=3s&pp=ugMICgJydRABGAE%3D
const youtubeLinks=`uwzEqeMd7uQ|Learn GLSL Shaders from Scratch - 1 (7 уроков по шейдерам)|4:12
c/NikLever/videos|Канал. Много чего есть, в т.ч. разработка WEBGL игр, VR, GLSL (шейдеры)
watch?v=HIvNePu7UEE&list=PL4neAtv21WOmIrTrkNO3xCyrxg4LKkrF7|shader tutorial series — много видео по шейдерам
DzsS7f6AeO0|GLSL Урок№1|11:34
uOErsQljpHs|Overview of GLSL, the OpenGL Shading Language|13:55
5VLs9nRqOAA|GLSL Shaders for Substance Painter with MaterialX|25:53
Lbb2ALWdrYA|GLSL Programming Basics / Functions|7:37
MeIJVg1z00A|Как мы ускоряли WebGL / Мстислав Живодков (2GIS)|30:27
yibGMQ7GGVo|Иван Попелышев — Чем мы платим за переход от div к WebGL и что получаем (профит!) / Более-менее полезный доклад по shader|59:27
HqczV3Gy_lE|ThreeJS inside of Webflow. #4 Webflow Cloneable's (+другие видео с канала)|15:26
luTOTT04bbQ|ThreeJS: Tips, Tricks and Techniques - GLSL Shaders|7:53
jmld3mIKBIo|Three.js Postprocessing Effect Tutorial|6:53
Slf1KhqOwks|Tween animation in Three JS with GSAP|7:41
d0C_bxzG850|Glowing Sun in Three JS|7:48
dwSNdIsRYNM|Three.js (Physics-Based domino)|18:44
xy_tbV4pC54|3D model configurator with React Three Fiber and gltfjsx|23:12
JdkHeQojLr0|avaScript Ocean cleaning game with Three.JS|40:30
DxCJmvUZJsc|three.js WebGL Shaders Tutorial - For Beginners|10:07
thVl4UOQSEM|three.js - Textures & Texture Mapping|11:56
KudDZuHC5-w|Add image textures to objects in ThreeJS - create a cool 360-degree view|29:20
BctqSsls2s0|Three js, React Three Fiber, React Three Drei Tutorial 2022 | Part 6 | Models and Textures|54:48
hiN75-q2Vvw|Introducción a Three.js con React en español – Conceptos Generales|1:19:57
mCzAGPCicjs|Three.js con React - 04 - Cargar modelos GTLF / DracoGLTF|30:21
1rP3nNY2hTo|Animation and 3D in react-three-fiber (with Paul Henschel) — Learn With Jason|1:34:08`

const youtubeAll=youtubeLinks.split("\n").map(e=>{
  const data=e.split("|")
  if(data[1]){
    if(data[2]){// if is time
      return <li>
        <a href={`https://www.youtube.com/watch?v=${data[0]}`} rel="noreferrer noopener nofollow" target="_blank">{data[1]}</a> / {data[2]}
      </li>
    }else{
      return <li>
      <a href={`https://www.youtube.com/${data[0]}`} rel="noreferrer noopener nofollow" target="_blank">{data[1]}</a>
    </li>
    }
  }
})

const LinksPage = () =>{
    return (
        <Container>
            <Seo
                title="Ссылки на полезные ресурсы по ThreeJS"
                description="Множество ссылок с пояснениями по теме THREEJS 3D WEBGL библиотеке трёхмерной графики в браузере (интернет-обозревателе)"
            />
            <main>
                <h1 className="tc">Ссылки на полезные ресурсы по ThreeJS.</h1>
                <blockquote>
                  Друзья, на данной странице, я постарался собрать все те ссылки на полезнейшие примеры, видео, статьи (и прочее), касаемо темы ThreeJS.
                  <br/>Данные ссылки могут бы полезны Вам тем, что Вы сможете почерпнуть из них массу информации, кода, примеров, пути совершенствования и обучения этим непростым темам: Three.JS, WEBGL, GLSL Shaders...
                </blockquote>
                <p><strong>Данный список будет периодически добавляться.</strong></p>
                <p>Чтобы быстро что-то найти на странице, нажмите <code>Ctrl+F</code> и ищите =))</p>
                <h2>Основные сайты, где можно (и нужно) искать примеры кода.</h2>
                <p>Это также список наиболее важных ресурсов, в основном огромные или большие сайты с массой примеров и исходными кодами.</p>
                <ul>
                  <li><a href="//threejs.org" rel="noreferrer noopener nofollow" target="_blank">threejs.org</a></li>
                  <li><a href="//webglfundamentals.org/webgl/lessons/ru/webgl-how-it-works.html" rel="noreferrer noopener nofollow" target="_blank">Как работает WebGL (на русском)</a></li>
                  <li><a href="//customizer.github.io/three.js-doc.ru/three.js-ru.htm" rel="noreferrer noopener nofollow" target="_blank">Документация THREE JS на русском (понятнее, конечно, вряд ли станет, но как вариант)</a></li>
                  <li><a href="//stepik.org/lesson/582219/step/1?unit=576953" rel="noreferrer noopener nofollow" target="_blank">stepik.org — Документация THREE JS на русском (более понятно [немного коммерческий])</a></li>
                  <li><a href="//threejs.org/docs/" rel="noreferrer noopener nofollow" target="_blank">Docs THREE JS на англичанском</a></li>
                  <li><a href="//threejs.org/editor/" rel="noreferrer noopener nofollow" target="_blank">Editor THREE JS (микро «Blender»)</a></li>
                  <li><a href="//threejs.org/examples/" rel="noreferrer noopener nofollow" target="_blank">THREE JS примеры кода (офиц. сайт)</a></li>
                  <li><a href="//sbcode.net/threjs" rel="noreferrer noopener nofollow" target="_blank">sbcode.net (хорошая альтернативная документация с примерами)</a></li>
                  <li><a href="//r105.threejsfundamentals.org" rel="noreferrer noopener nofollow" target="_blank">r105.threejsfundamentals.org (хорошая альтернативная документация с примерами)</a></li>
                  <li><a href="//learningthreejs.com" rel="noreferrer noopener nofollow" target="_blank">learningthreejs.com</a></li>
                  <li><a href="//discoverthreejs.com/book/first-steps/" rel="noreferrer noopener nofollow" target="_blank">discoverthreejs.com (тоже документация)</a></li>
                  <li><a href="//webglstudio.org" rel="noreferrer noopener nofollow" target="_blank">webglstudio.org</a></li>
                  <li><a href="//thebookofshaders.com" rel="noreferrer noopener nofollow" target="_blank">WEB-книга по GLSL Shaders (шейдеры наше всё... Оо)</a></li>
                  <li><a href="//www.shadertoy.com" rel="noreferrer noopener nofollow" target="_blank">shadertoy.com — сайт с примерами шейдеров и песочницей</a></li>
                  <li><a href="//codepen.io" rel="noreferrer noopener nofollow" target="_blank">codepen.io</a></li>
                  <li><a href="//github.com" rel="noreferrer noopener nofollow" target="_blank">github.com</a></li>
                  <li><a href="//codesandbox.io" rel="noreferrer noopener nofollow" target="_blank">codesandbox</a></li>
                  <li><a href="//jsfiddle.net" rel="noreferrer noopener nofollow" target="_blank">jsfiddle.net</a></li>
                  <li><a href="//stackoverflow.com" rel="noreferrer noopener nofollow" target="_blank">stackoverflow.com</a></li>
                  <li><a href="//www.youtube.com" rel="noreferrer noopener nofollow" target="_blank">youtube.com</a></li>
                  <li><a href="//www.adoclib.com/blog/" rel="noreferrer noopener nofollow" target="_blank">www.adoclib.com</a></li>
                  <li><a href="//alteredqualia.com" rel="noreferrer noopener nofollow" target="_blank">alteredqualia.com много колоссальных примеров (закрытый код, но красиво)</a></li>
                  <li><a href="//codepen.io/collection/AGZywR" rel="noreferrer noopener nofollow" target="_blank">codepen коллекция одго парня по теме.. (красиво всё..)</a></li>
                  <li><a href="//github.com/yandeu/ammo-worker-test" rel="noreferrer noopener nofollow" target="_blank">github — WASM!!! Three.js and ammo.js WebWorker Test</a></li>
                  <li><a href="//www.google.com/search?q=threejs+site%3Ahabr.com%2F&ie=UTF-8&oe=UTF-8" rel="noreferrer noopener nofollow" target="_blank">habr (на русском)</a></li>
                  <li><a href="//www.youtube.com/watch?v=p1iVl1p89SA" rel="noreferrer noopener nofollow" target="_blank">youtube — WASM!!! Three.js and ammo.js WebWorker Test</a></li>
                  <li><a href="//www.youtube.com/watch?v=p7DtoeuDT5Y" rel="noreferrer noopener nofollow" target="_blank">youtube — WASM!!! RUST 3D Graphics in the Browser: Boilerplate Setup and WASM Introduction</a> (39 минут)</li>
                  <li><a href="//www.youtube.com/watch?v=kjYCSySObDo" rel="noreferrer noopener nofollow" target="_blank">youtube — WASM!!! Rust 3D Graphics in the Browser: 2D Graphics</a> (~68 минут)</li>
                  <li><a href="//www.youtube.com/watch?v=A2FxeEl4nWw" rel="noreferrer noopener nofollow" target="_blank">youtube — WASM!!! From WebGL to WebGPU: A perspective from Babylon js by David Catuhe — доклад [EN] 20 минут</a></li>
                  <li><a href="//www.youtube.com/watch?v=Fd4hAL3mDkE" rel="noreferrer noopener nofollow" target="_blank">youtube — Qgis2threejs - QGIS 3D map to Three.js - объемная карта местности с пометками пути</a></li>
                  <li><a href="//www.youtube.com/watch?v=1S7ke6F8sV4&list=PLYAGer8eMUN8KtYqhqOB5CafuBsEkQDj0&index=1" rel="noreferrer noopener nofollow" target="_blank">youtube — Большой список воспроизведения по теме</a></li>
                  <li><a href="//github.com/zbryikt/awesome-webgl" rel="noreferrer noopener nofollow" target="_blank">github — WebGL море ссылок по категориям</a> | <a href="/fls/2022/awesome-webgl-master.zip">Скачать файлом (сами ссылки в файле README.md)</a></li>
                  <li><a href="//callumprentice.github.io" rel="noreferrer noopener nofollow" target="_blank">callumprentice.github.io — много разных примеров (кроме всего, есть планеты и данные передаются с точки А в Б по линиям)</a></li>
                  <li><a href="//stemkoski.github.io/Three.js/" rel="noreferrer noopener nofollow" target="_blank">stemkoski.github.io — очень много разных примеров</a></li>
                  <li><a href="//www.kyrie.pe/" rel="noreferrer noopener nofollow" target="_blank">kyrie.pe — много примеров с пояснением</a></li>
                  <li><a href="//gpuweb.github.io/gpuweb/explainer/" rel="noreferrer noopener nofollow" target="_blank">gpuweb.github.io — документация по WEBGPU</a></li>
                  <li><a href="//surma.dev/things/webgpu/" rel="noreferrer noopener nofollow" target="_blank">surma.dev — статеечка по WEBGPU/WEBGL</a></li>
                </ul>
                
                <h3>Тест браузера на наличие версии WEBGL/модели видео карты и очень многого другого</h3>
                <br/><a href="//browserleaks.com/webgl" rel="noreferrer noopener nofollow" target="_blank">browserleaks.com</a>
                <br/><a href="//webglreport.com" rel="noreferrer noopener nofollow" target="_blank">webglreport.com</a>

                <h3>Как искать то, что невозможно найти?</h3>
                <p>Первое, что очевидно, через Google или через внутренние системы поиска...</p>
                <p>Если они упорно выдают иные результаты, то берём и гуглим, к примеру, так:</p>
                <pre>
                  <a href="//www.google.com/search?q=some+site%3Acodesandbox.io&ie=UTF-8&oe=UTF-8" rel="noreferrer noopener nofollow" target="_blank">some site:codesandbox.io</a>
                </pre>
                <p>
                  Если Вы нашли какой-то непонятный код, то его можно разбить на основные функции (или методы), которые Вам непонятны и нагуглить таким образом примеры, что поможет понять смысл кода. Также на данных сайтах есть масса примеров уже готовых решений, которые можно брать и использовать для себя.<br/><br/>
                  Помните о том, что на этих сайтах есть системы тегов, которыми создатели кода (разработчики) помечают свои проекты. Теги часто дают возможность найти то, что скрыто из поисковой выдачи (нет возможности поисковикам внешним и внутренним понять, что за код внутри проекта и, соответственно, они не могут его дать Вам).<br/><br/>
                  Часто встречаются ситуации, когда проект, которые написал человек, имеет непонятный/неинформативный заголовок или вовсе его не имеет, что не позволяет поисковым системам (гуглику и внутренним поисковикам самих этих сайтов), дать Вам то, что Вы хотите получить.<br/><br/>
                  Поэтому, необходимо проявлять изощрённость и смекалку для того, чтобы что-то полезное найти, а также запастись вагоном времени и терпения.<br/><br/>
                  Обычно, те задачи, которые стоят перед Вам уже кто-то решал и даже выложил в инете. Их только необходимо найти...
                  <picture className="my1 db">
                      <source srcSet="/_img/2022/tags.avif" type="image/avif" />
                      <source srcSet="/_img/2022/tags.webp" type="image/webp" />
                      <img
                        decoding="async" loading="lazy" width="1229" heigth="912"
                        src="/_img/2022/tags.jpg" alt="система тегов на codepen.io"
                      />
                  </picture>
                </p>

                <h2>GLSL Shaders</h2>
                <ul>
                  <li><a href="//www.khronos.org" rel="noreferrer noopener nofollow" target="_blank">Разработчики шейдерного ПО (в браузерах [и в др. программах], по-идее, их интерпретатор шейдеров)</a></li>
                  <li><a href="//community.khronos.org" rel="noreferrer noopener nofollow" target="_blank">community.khronos.org — здесь можно спросить о шейдерах (EN)</a></li>
                  <li><a href="//webglfundamentals.org/webgl/lessons/ru/webgl-shaders-and-glsl.html" rel="noreferrer noopener nofollow" target="_blank">webglfundamentals.org — Шейдеры и GLSL в WebGL</a> (RU)</li>
                  <li><a href="//gamedev.stackexchange.com/questions/32543/glsl-if-else-statement-unexpected-behaviour" rel="noreferrer noopener nofollow" target="_blank">gamedev.stackexchange.com — и здесь</a></li>
                  <li><a href="//en.wikibooks.org/wiki/GLSL_Programming/" rel="noreferrer noopener nofollow" target="_blank">en.wikibooks.org</a></li>

                  <li><a href="//www.youtube.com/watch?v=9k9ExCKnkVQ" rel="noreferrer noopener nofollow" target="_blank">youtube — shader tutorial series - episode 004 - setup glsl viewer (6 минут)</a></li>
                  <li><a href="//www.youtube.com/watch?v=RP1MVD4hAJM" rel="noreferrer noopener nofollow" target="_blank">youtube — OpenGL - geometry shaders (13 минут)</a></li>
                  <li><a href="//www.youtube.com/watch?v=V0E5WH7JRLo" rel="noreferrer noopener nofollow" target="_blank">youtube — 01 - What is a shader? (Shaderdev.com) [7 минут + другие видео с канала]</a></li>
                  <li><a href="//www.kyrie.pe/rhythm_doctor_wave/" rel="noreferrer noopener nofollow" target="_blank">kyrie.pe — About waves and shaders</a></li>
                  <li><a href="//codesandbox.io/s/mnn8b?file=/src/shader/fragment.glsl" rel="noreferrer noopener nofollow" target="_blank">codesandbox — fragmentShader старинный светильник. Пример чёрно-белый и цветной шейдер по движению мыши (mousemove)</a></li>
                  <li><a href="//codesandbox.io/s/ecdzk?file=/src/components/WebGLFont/vertex/demo-01.glsl" rel="noreferrer noopener nofollow" target="_blank">codesandbox — vertexShader, анимация текста, как развивающийся флаг</a></li>
                  <li><a href="//codesandbox.io/s/lqn1q?file=/src/CarLights.js" rel="noreferrer noopener nofollow" target="_blank">codesandbox — анимация линий, как-будто движутся по дороге авто ночью, свет фар эмитирует</a></li>
                  <li>
                    <p>Начните знакомиться с шейдерами по этой книге: WebGL. Программирование трехмерной графики<br />Оригинал: WebGL Programming Guide: Interactive 3D Graphics Programming with WebGL (OpenGL)<br />Все примеры книги на JSFiddle
                    <a href="/fls/2022/shaders-examples.zip">Скачать файлы из книги</a>
                    </p>
                    <ul>{allLinks}</ul>
                  </li>
                  
                </ul>

                <h3>Форумы threejs.</h3>
                <p>
                  Немаловажную роль в решении тех или иных задач может сыграть <a href="//discourse.threejs.org" rel="noreferrer noopener nofollow" target="_blank">форум ThreeJS</a>
                  <br/>Важно задавать вопросы или отвечать на EN, так как сообщество плёхо понимать по-русский.
                  <br/>Если Вы знаете только один язык, то <a href="//translate.google.com" rel="noreferrer noopener nofollow" target="_blank">используйте переводчик</a>.
                  <br/><a href="//html5gamedevs.com" rel="noreferrer noopener nofollow" target="_blank">html5gamedevs.com — можно спросить по разработке игр (HTML5 | EN)</a>
                </p>

                <h3>YouTube.</h3>
                <p>
                  На этом ресурсе довольно много внятных и понятных видео по теме. Возможно, стоит искать на EN языке, тогда будет больше вероятности найти, что требуется.
                  <br/>Особенно необходимо выделить видосики Юры. Он даже когда-то на RU языке их пилил, <a href="//www.youtube.com/user/flintyara" rel="noreferrer noopener nofollow" target="_blank">ссылка на канал Юры</a>.
                </p>

                <h3>Перечень ссылок с пояснениями.</h3>
                <ul>
                  <li><a href="//www.youtube.com/user/canastodepandora/videos" rel="noreferrer noopener nofollow" target="_blank">youtube — CLEAR WEBGL - чистый WEBGL</a></li>
                  <li><a href="//jsfiddle.net/h4oytk1a/1/" rel="noreferrer noopener nofollow" target="_blank">jsfiddle — модификаторы для ThreeJS (типа как в 3D MAX)</a></li>
                  <li><a href="//codesandbox.io/s/three-mesh-modifiers-website-b55p6?file=/src/components/Photo.js%20example%20modifiers" rel="noreferrer noopener nofollow" target="_blank">codesandbox — очень красивый пример слайдера на Three JS</a>. Также здесь показаны модификаторы (4 штуки), которые Вы можете применить к любому объекту</li>
                  <li><a href="//github.com/drawcall/threejs-mesh-modifiers" rel="noreferrer noopener nofollow" target="_blank">github — сами модификаторы</a> | <a href="/fls/2022/threejs-mesh-modifiers-master.zip">Скачать файл</a></li>
                  <li><a href="//www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA" rel="noreferrer noopener nofollow" target="_blank">youtube [канал] — много инфы + продаёт свои уроки</a></li>
                  <li><a href="//www.youtube.com/watch?v=OarHR-CmJnI" rel="noreferrer noopener nofollow" target="_blank">youtube — вступительная информация (доклад, 46 минут) по теме</a></li>
                  <li><a href="//codepen.io/prisoner849" rel="noreferrer noopener nofollow" target="_blank">codepen (профиль Паши)</a></li>
                  <li><a href="//github.com/cywarr" rel="noreferrer noopener nofollow" target="_blank">github (профиль Паши)</a></li>
                  <li><a href="//jsfiddle.net/user/prisoner849/fiddles/" rel="noreferrer noopener nofollow" target="_blank">jsfiddle (профиль Паши)</a></li>
                  <li><a href="//cywarr.github.io/tetraflow/dist/" rel="noreferrer noopener nofollow" target="_blank">cywarr.github.io — свежее от Паши. tetraFlow</a> | <a href="//github.com/cywarr/tetraflow" rel="noreferrer noopener nofollow" target="_blank">исходники</a></li>
                  <li><a href="//codepen.io/inverser" rel="noreferrer noopener nofollow" target="_blank">codepen (профиль мой)</a></li>
                  <li><a href="//erichlof.github.io/THREE.js-PathTracing-Renderer/" rel="noreferrer noopener nofollow" target="_blank">THREE Rays (лучи)</a></li>
                  <li><a href="//sbcode.net/threejs/meshbasicmaterial/" rel="noreferrer noopener nofollow" target="_blank">Three scroll animation (скролл / прокрутка — анимация)</a></li>
                  <li><a href="//1stwebdesigner.com/15-mind-bending-three-js-javascript-experiments/" rel="noreferrer noopener nofollow" target="_blank">THREE JS Sound visual (визуализация звука)</a></li>
                  <li>
                    Three заполняющий свет
                    <ul>
                      <li><a href="//codepen.io/abberg/pen/pbWZjg" rel="noreferrer noopener nofollow" target="_blank">Volumetric Light Scattering in three.js</a></li>
                      <li><a href="//demo.bkcore.com/threejs/webgl_tron_godrays.html" rel="noreferrer noopener nofollow" target="_blank">Tron disk, Volumetric Light Approximation (Three.js)</a></li>
                      <li><a href="//www.youtube.com/watch?v=UoSUX1KNiIU" rel="noreferrer noopener nofollow" target="_blank">Three.js - Volumetric Light Approximation (Godrays) - WebGL</a></li>
                      <li><a href="//threejs.org/examples/#webgl_postprocessing_godrays" rel="noreferrer noopener nofollow" target="_blank">Заполняющий свет (Fog), туман | threejs.org</a></li>
                      <li><a href="//github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_godrays.html" rel="noreferrer noopener nofollow" target="_blank">Заполняющий свет (Fog), туман | github.com</a></li>
                    </ul>
                  </li>
                  <li><a href="//jsfiddle.net/prisoner849/4xbukyg3/" rel="noreferrer noopener nofollow" target="_blank">Шейдерный огонь/пар/дым</a></li>
                  <li><a href="//tympanus.net/Tutorials/SurfaceSampling/" rel="noreferrer noopener nofollow" target="_blank">tympanus.net</a></li>
                  <li><a href="//sbcode.net/threejs/reflector/" rel="noreferrer noopener nofollow" target="_blank">DRAG перемещение объектов + отражение объектов</a></li>
                  <li><a href="//www.youtube.com/watch?v=KudDZuHC5-w" rel="noreferrer noopener nofollow" target="_blank">youtube — Helpers, map texture | Many material много материалов — in end Sphere Atmosphere</a></li>
                  <li><a href="//discourse.threejs.org/t/giving-a-glb-a-texture-in-code/15071/6" rel="noreferrer noopener nofollow" target="_blank">discourse.threejs.org — Three запуск анимации модели (obj, glb)</a></li>
                  <li><a href="//codepen.io/Mombasa/pen/nKEwNo" rel="noreferrer noopener nofollow" target="_blank">codepen — BUMP - выдавливание с помощью карты (чёрно-белого изображения) для 3D объектов (3D модели, простые примитивы)</a></li>
                  <li><a href="//www.youtube.com/watch?v=T6PhV4Hz0u4" rel="noreferrer noopener nofollow" target="_blank">youtube — Light tutorial - свет в ThreeJS</a></li>
                  <li><a href="//discoverthreejs.com/book/first-steps/ambient-lighting/" rel="noreferrer noopener nofollow" target="_blank">discoverthreejs.com — Light tutorial - свет в ThreeJS</a></li>
                  <li><a href="//tympanus.net/codrops/2021/10/27/creating-the-effect-of-transparent-glass-and-plastic-in-three-js/" rel="noreferrer noopener nofollow" target="_blank">youtube — Glass стекло в ThreeJS</a></li>
                  <li>
                    Свечение (внутренне, внешнее, без PNG картинок)
                    <ul>
                      <li><a href="//www.youtube.com/watch?v=d0C_bxzG850" rel="noreferrer noopener nofollow" target="_blank">youtube — Glow - свечение в ThreeJS</a></li>
                      <li><a href="//www.youtube.com/watch?v=vM8M4QloVL0" rel="noreferrer noopener nofollow" target="_blank">youtube — Glow - свечение в ThreeJS</a></li>
                      <li><a href="//stringkun.github.io/DemoShow/example/index.html#glow" rel="noreferrer noopener nofollow" target="_blank">stringkun.github.io — Glow - внутреннее свечение в ThreeJS</a></li>
                      <li><a href="//stemkoski.github.io/Three.js/Atmosphere.html" rel="noreferrer noopener nofollow" target="_blank">stemkoski.github.io — Glow - внешнее свечение в ThreeJS</a></li>
                      <li><a href="//alexandrugris.github.io/graphics/3d/2020/04/15/intro-webgl.html" rel="noreferrer noopener nofollow" target="_blank">alexandrugris.github.io — внешнее свечение планеты (подробная статья)</a></li>
                    </ul>
                  </li>
                  <li><a href="//www.youtube.com/watch?v=Qhij2ThP344" rel="noreferrer noopener nofollow" target="_blank">youtube — Custom Camera Paths in Three.js - пользовательский путь камеры</a></li>
                  <li><a href="//dev.to/pahund/animating-camera-movement-in-three-js-17e9" rel="noreferrer noopener nofollow" target="_blank">dev.to — Animating Camera Movement in Three.js</a></li>
                  <li><a href="//www.youtube.com/watch?v=0IokvBSGixc" rel="noreferrer noopener nofollow" target="_blank">youtube — Alexander Korotaev | Теплый ламповый геймдев на React и WebGL | RSCONF 2019 (54 минуты)</a></li>
                  <li><a href="//github.com/mrdoob/three.js/blob/master/examples/webgl_materials_video.html" rel="noreferrer noopener nofollow" target="_blank">github — Threejs mouse events - события мыши</a></li>
                  <li><a href="//leclub.github.io/2016/06/ThreeJS-Glitch-Shader/" rel="noreferrer noopener nofollow" target="_blank">github — Threejs Shader Glitch</a></li>
                  <li><a href="//chowdera.com/2021/08/20210812183208459p.html" rel="noreferrer noopener nofollow" target="_blank">chowdera.com !!! — 3D performance optimization | talk about gltf file compression оптимизация импортируемых glb / gltf моделей</a></li>
                  <li><a href="//www.npmjs.com/package/gltf-pipeline" rel="noreferrer noopener nofollow" target="_blank">npmjs !!! — glTF Pipeline - инструмент оптимизации glTF моделей</a></li>
                  <li><a href="//threejs.org/examples/#webgl_lights_spotlights" rel="noreferrer noopener nofollow" target="_blank">threejs.org мягкий источник света, тени, анимируется</a> / <a href="//github.com/mrdoob/three.js/blob/master/examples/webgl_lights_spotlights.html" rel="noreferrer noopener nofollow" target="_blank">тоже на гите (код)</a></li>
                  <li><a href="//stackoverflow.com/questions/56865240/three-js-horrible-performance" rel="noreferrer noopener nofollow" target="_blank">stackoverflow — По поводу видео карты three js</a></li>
                  <li><a href="//stackoverflow.com/questions/27217388/use-multiple-materials-for-merged-geometries-in-three-js" rel="noreferrer noopener nofollow" target="_blank">stackoverflow — Use multiple materials for merged geometries in Three.js — объединение геометрий и разных материалов в одну</a></li>
                  <li><a href="//stackoverflow.com/questions/54986860/animated-wireframe-lines" rel="noreferrer noopener nofollow" target="_blank">Animated wireframe lines — анимация линий решетки (внизу видео по этому поводу)</a></li>
                  <li><a href="//stringkun.github.io/DemoShow/example/index.html#potcloud3" rel="noreferrer noopener nofollow" target="_blank">Немного интересных примеров, в том числе анимация перехода объекта А в объект Б</a> | <a href="//inverser.pro/_three-pages/2022/three.js-webgl-geometry-shapes.html" rel="noreferrer noopener nofollow" target="_blank">сохранил у себя на всякий</a></li>
                  <li><a href="//stringkun.github.io/DemoShow/example/webgl-mirror.html" rel="noreferrer noopener nofollow" target="_blank">Отражение</a> | <a href="//inverser.pro/_three-pages/2022/mirror.html" rel="noreferrer noopener nofollow" target="_blank">сохранил у себя на всякий</a></li>
                  <li><a href="//stringkun.github.io/DemoShow/example/index.html#blur" rel="noreferrer noopener nofollow" target="_blank">stringkun.github.io — Blur / размытие</a></li>
                  <li><a href="//www.youtube.com/watch?v=aJun0Q0CG_A" rel="noreferrer noopener nofollow" target="_blank">youtube — Three.js Realistic Material Reflection Tutorial in 8 Minutes (реалистичное отражение)</a></li>
                  <li><a href="//github.com/cboots/WebGL-Waves-and-Globe" rel="noreferrer noopener nofollow" target="_blank">github — WebGL Shaders (Simple Waves and Globe Rendering) - волны на поверхности, разные..</a></li>
                  <li><a href="//callumprentice.github.io/apps/flight_stream/index.html" rel="noreferrer noopener nofollow" target="_blank">github — планета с анимированными линиями (данные о полётах), путями от точки А до Б, красиво, возможна подгрузка своих данных (надо копать чужой код)</a></li>
                  <li><a href="//www.desultoryquest.com/blog/drawing-anti-aliased-circular-points-using-opengl-slash-webgl/" rel="noreferrer noopener nofollow" target="_blank">desultoryquest.com — ШЕЙДЕРЫ. Drawing Anti-aliased Circular Points Using OpenGL/WebGL (делаем линии плавные, подробная статья)</a></li>
                  <li><a href="//callumprentice.github.io/apps/shader_spline/index.html" rel="noreferrer noopener nofollow" target="_blank">callumprentice.github.io — ШЕЙДЕРЫ. Губы (похоже), анимированный градиент на шейдере</a></li>
                  <li><a href="//codesandbox.io/examples/package/gsap" rel="noreferrer noopener nofollow" target="_blank">codesandbox — много анимированны с gsap примеров</a></li>
                  <li><a href="//codepen.io/Staak/pen/XowdeE" rel="noreferrer noopener nofollow" target="_blank">codepen — Animated Boxes (three.js + anime.js) [сам пример у меня не работает, но ка код подойдёт]</a></li>
                  <li><a href="//stackoverflow.com/questions/43762691/antialiasing-in-fragment-shader-three-js" rel="noreferrer noopener nofollow" target="_blank">stackoverflow — Antialiasing in Fragment Shader Three js</a></li>
                  <li><a href="//github.com/mrdoob/three.js/blob/master/examples/webgl_instancing_dynamic.html" rel="noreferrer noopener nofollow" target="_blank">stackoverflow — instance - улучшение производительности, за счёт использования видео карты (объекты закидываем на неё)</a></li>
                  <li><a href="//threejs.org/examples/#webgl_instancing_dynamic" rel="noreferrer noopener nofollow" target="_blank">threejs.org — instance - dummyObj/dummy (обезьянка)</a></li>
                  <li><a href="//github.com/zadvorsky/three.bas" rel="noreferrer noopener nofollow" target="_blank">github.com — THREE.BAS — большая и красивая добавка к Three — можно заанимировать частицы из точки а в б</a>. Много частиц шейдерных будет летать, как угодно, можно создать кривую и пустить по ней <a href="/fls/2022/three.bas-master.zip">Скачать файл</a></li>
                  <li><a href="//www.rudebox.org.ua/animation-of-lines-by-three-meshline-webgl/" rel="noreferrer noopener nofollow" target="_blank">rudebox.org.ua — Линейная анимация при помощи Three.MeshLine (RU)</a></li>
                  <li><a href="//openframe.io/stream" rel="noreferrer noopener nofollow" target="_blank">openframe.io — много примеров</a></li>
                  <li><a href="//mrdoob.com/lab/javascript/webgl/voxels_liquid/index2.html" rel="noreferrer noopener nofollow" target="_blank">mrdoob.com — Voxels Liquid | анимация кубов </a>. Один возле другого стоят на плоскости, подпрыгивают вверх центральный под мышью, когда проводишь ею. Та функция, которая в них используется выпилена из более новых версий в Three. Сморится очень красиво даже на этом примере.</li>
                  <li><a href="//codepen.io/inverser/pen/poEGQEW" rel="noreferrer noopener nofollow" target="_blank">codepen — нечто похожее на предыдущий пример</a>. Применяются шейдеры и анимация волной | <a href="//inverser.pro/_three-pages/2022/Voxels-liquid-2.html" rel="noreferrer noopener nofollow" target="_blank">inverser.pro — сохранил у себя</a></li>
                  <li><a href="//codesandbox.io/s/icy-meadow-62uvy" rel="noreferrer noopener nofollow" target="_blank">codesandbox — React+ThreeJS</a>. Планета с красивой картой, не интерактивная, карта подобие фракталов (подсолнух)</li>
                  <li><a href="//codesandbox.io/s/r3f-sparks-sbf2i" rel="noreferrer noopener nofollow" target="_blank">codesandbox — React+ThreeJS, шейдеры, очень красивая цифра 4 с частицами вокруг неё летающими</a></li>
                  <li><a href="//codesandbox.io/s/small-water-kky7yk087v" rel="noreferrer noopener nofollow" target="_blank">codesandbox — здесь были ленты, но их кто-то сломал (возможно этот кто-то — typescript)</a></li>
                  <li><a href="//codesandbox.io/search?refinementList%5Btemplate%5D=&refinementList%5Bnpm_dependencies.dependency%5D%5B0%5D=react-three-fiber&page=3&configure%5BhitsPerPage%5D=12" rel="noreferrer noopener nofollow" target="_blank">codesandbox — много всего</a></li>
                  <li><a href="//codesandbox.io/s/breathing-dots-checkpoint-6-lp81i" rel="noreferrer noopener nofollow" target="_blank">codesandbox — "дашащие" точки</a>. Объекты на сцене (точки) расходятся из центра к краям, как-будто дышут</li>
                  <li><a href="//tympanus.net/codrops/2021/10/27/creating-the-effect-of-transparent-glass-and-plastic-in-three-js/" rel="noreferrer noopener nofollow" target="_blank">tympanus.net — пластик, стекло</a></li>
                  <li><a href="//github.com/kellymilligan/codrops-oct-2021-final" rel="noreferrer noopener nofollow" target="_blank">github.com — пластик, стекло (тоже, что и выше)</a></li>
                </ul>

                <p>
                  Разные ссылки:
                  <br/>https://codepen.io/PierfrancescoSoffritti/pen/wobPVJ
                  <br/>http://www.ro.me/tech/demos/8/index.html
                  <br/>http://www.ro.me/tech/demos/1/index.html
                  <br/>http://jsfiddle.net/bvonkonsky/72g8bny7/ locations
                  <br/>https://jsfiddle.net/xg1o4ekr/378/
                  <br/>https://openprocessing.org/sketch/659736
                  <br/>slider https://jsfiddle.net/j5huqxpd/15/
                  <br/>https://codepen.io/TRodriguez/full/oNjyqJY manual
                  <br/>https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-4-animation manual
                  <br/>https://codepen.io/ScavengerFrontend examples
                  <br/>https://codepen.io/collection/gcilD/?cursor=ZD0wJm89MCZwPTEmdj0yMA== examples
                  <br/>https://codepen.io/devildrey33/pen/jrkppB sphere vertex shader
                  <br/>https://jsfiddle.net/t3ye7ga9/7/ slider
                  <br/>https://alteredqualia.com/three/examples/webgl_custom_attributes_lines.html
                  <br/>https://github.com/mattdesl/three-line-2d
                  <br/>GSAP tweenmax three js
                  <br/>https://codepen.io/aaroniker/pen/bGGMNPd
                </p>

                <h3>YouTube</h3>
                {youtubeAll}

                <p>
                  <a href="//www.orano.group/experience/innovation/en/slider" rel="noreferrer noopener nofollow" target="_blank">один интересный сайтик</a>
                  <video loading="lazy" src="/_video/2022/orano.group.mp4" controls playsinline preload="auto"></video>
                </p>
            </main>
        </Container>
    )
}

export default LinksPage;
