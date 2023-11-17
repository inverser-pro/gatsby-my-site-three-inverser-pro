const js = ()=>{
    const d_=document,
          div=d_.createElement('div');
    div.classList.add('fx','ac','jc','cp','my2','imgYTPrev');
    setTimeout(() => {
        // <iframe width="560" height="360" title="#0 Welcome in Three js" loading="lazy" src="https://www.youtube.com/embed/" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        const allYT=d_.querySelector('.loadYoutube'); // only 1 YT on page
        // console.log(allYT,'9999999999');
        if(allYT){
            // https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg
            if(allYT.dataset&&allYT.dataset.id){
                div.innerHTML=`<img width="1280" height="720" loading="lazy" src="https://i3.ytimg.com/vi/${allYT.dataset.id}/maxresdefault.jpg" alt>`;
                allYT.after(div);
                allYT.remove();
                div.addEventListener('click',()=>{
                    const divH=div.getBoundingClientRect().height;
                    const ifr=d_.createElement('iframe');
                    ifr.width=560;
                    ifr.height=divH||360;
                    ifr.src=`https://www.youtube.com/embed/${allYT.dataset.id}?autoplay=1`;
                    ifr.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    ifr.setAttribute('allowfullscreen','');
                    div.insertAdjacentElement('beforebegin', ifr/* `<iframe width="560" height="360" src="https://www.youtube.com/embed/${allYT.dataset.id}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <style>imgYTPrev:after{display:none}</style>` */);
                    div.remove();
                },true)
            }
            const liAll=document.querySelectorAll('aside ul li a');
            //console.log(divH);
            if(liAll.length>0){
                const liH=document.querySelector('aside ul li').getBoundingClientRect().height;
                liAll.forEach((e,i) => {
                    if(e.classList.contains('activeNav')){
                        document.querySelector('aside ul').scrollTop = i*liH;
                    }
                });
            }
        }
    }, 1200);
};

export default js