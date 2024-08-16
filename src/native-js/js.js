const js = ()=>{
    const d_=document,
          div=d_.createElement('div');
    div.classList.add('fx','ac','jc','cp','my2','imgYTPrev');
    setTimeout(() => {
        // <iframe width="560" height="360" title="#0 Welcome in Three js" loading="lazy" src="https://www.youtube.com/embed/" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        const allYT=d_.querySelectorAll('.loadYoutube'); // only 1 YT on page
        if(allYT instanceof NodeList){
            // https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg
            allYT.forEach(e=>{
                if(e.dataset&&e.dataset.id){
                    const divCln=div.cloneNode(true);
                    divCln.innerHTML=`<img width="1280" height="720" loading="lazy" src="https://i3.ytimg.com/vi/${e.dataset.id}/maxresdefault.jpg" alt="YouTube Image">`;
                    e.after(divCln);
                    e.remove();
                    divCln.addEventListener('click',()=>{
                        const divH=div.getBoundingClientRect().height
                            , ifr=d_.createElement('iframe')
                        ;
                        ifr.width=560;
                        ifr.height=divH||360;
                        ifr.src=`https://www.youtube.com/embed/${e.dataset.id}?autoplay=1`;
                        ifr.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        ifr.setAttribute('allowfullscreen','');
                        divCln.insertAdjacentElement('beforebegin', ifr/* `<iframe width="560" height="360" src="https://www.youtube.com/embed/${e.dataset.id}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <style>imgYTPrev:after{display:none}</style>` */);
                        divCln.remove();
                    },true)
                }
            })
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