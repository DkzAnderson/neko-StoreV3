const $ = (element)=> document.querySelector(element);
const $all = (element)=> document.querySelectorAll(element);
const $create = (element)=> document.createElement(element);
let selected = {
    anime: '',
    season: '',
    episode:''
}
    // boton del menu mobile
let menuBtn = $all('.header-main .mobile button');
menuBtn[1].style.display = 'flex'
menuBtn[0].style.display = 'none'
    // iconos svg
let icons = {
    playS: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>',
    playM: '<svg width="30" height="30" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>',
    playL: '<svg width="40" height="40" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>',
    arrowRight:'<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#44b9f0" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/></svg>',
    arrowDown :'<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#44b9f0" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>',
    arrowUp   :'<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e6571e" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>',

}

const random = (min,max)=>{
    return Math.floor(Math.random() * (max - min+1) + min)
}
    // contenedores generales del html
let html = {
    title: $('.anime-body .header .title h2'),
    type : $('.anime-body .header .title h5'),
    sypnosis:$('.anime-body .header p'),
    poster:  $('.anime-body .contain picture img'),
    episodeList: {
        seasons:$('.anime-body .contain .episode-list .seasons')
    }
}
    // contenedores de reproductor y otros
let mediaPlayer = {
    title     :$('.media-player_contain h3'),
    iframe    :$('#iframe'),
    btnAfter  :$('#after-cap'),
    btnNext   :$('#next-cap'),
    btnCapList:$('#cap-list')
}
    // creación de elementos de html
let Complement = (values)=>{
    let x 
    /*
        values = {
            complement  : elemento a crear
            text        : texto que se agregara al elemento
            alt         : propiedad alt (usada en img)
            classList   : clase que se le agregara al elemento
            src         : src de la imagen
            display     : display que tendra por defecto
        }
    */
    
    switch (values.e) {
        case 'picture':
            x = $create('picture');
            break;
        case 'svg':
            x = $create('svg');
            x.innerHTML = values.text;
            break;

        case 'div':
            x = $create('div');
            break;

        case 'li':
            x = $create('li');
            break;

        case 'article':
            x = $create('article');
            break;

        case 'ul':
            x = $create('ul');
            break;

        case 'img':
            x = $create('img');
            x.src = values.src;
            x.setAttribute('alt',values.alt);
            break;

        case 'h1':
            x = $create('h1');
            x.innerText = values.text;
            break;

        case 'h2':
            x = $create('h2');
            x.innerText = values.text;
            break;

        case 'h3':
            x = $create('h3');
            x.innerText = values.text;
            x.classList = (values.classList);
            break;

        case 'h4':
            x = $create('h4');
            x.innerText = values.text;
            break;
        case 'h5':
            x = $create('h5');
            x.innerText = values.text;
            break;
        case 'span':
            x = $create('span');
            break;
    
        default:
            console.log('Debes establecer cual elemenot se debe crear.')
            break;
    }

    if (values.text == undefined) values.text = ''
    //if (values.display == undefined) values.display = 'block'
    if (values.classList != undefined ) x.classList.add(values.classList)
    
    //x.style.display = values.display;
    return x
}
    // Inicializar Página
function startRender(){
    let itemBox1 = (item)=> {
        let seasonRdm = item.Seasons.length-1;
        let episodeRdm = item.Seasons[seasonRdm].episodes.length;

        let article = Complement({e:'article'});
        let div     = Complement({e:'div'});
        let div2    = Complement({e:'div'});
        let season  = Complement({e:'h4', text:item.Seasons[seasonRdm].name})
        let h4      = Complement({e:'h4', text:`Episodio ${episodeRdm}`});
        let h5      = Complement({e:'h5', text:item.name}); 
        let picture = Complement({e:'picture'})
        let img     = Complement({e:'img', src: item.img, alt: item.name});
        
        div2.append(season,h4);
        div.append(h5,div2);
        picture.append(img);
        article.append(div,picture);
    
        article.addEventListener('click', ()=>{
            selected.anime = item;
            selected.season = seasonRdm;
            selected.episode = episodeRdm;
            localStorage.setItem('selected', JSON.stringify(selected));
            window.open('media-player.html','_self');
        })
    
        return article;
    };
    
    let itemBox2 = (item)=>{
        let article = Complement({e:'article'});
        let h4      = Complement({e:'h4',text: item.name});
        let h5      = Complement({e:'h5',text:'ANIME'});
        let picture = Complement({e:'picture'});
        let img     = Complement({e:'img', src:item.img, alt:item.name});
    
        picture.append(img,h5);
        article.append(picture,h4);
    
        article.addEventListener('click', ()=>{
            selected.anime = item;
            localStorage.setItem('selected', JSON.stringify(selected));
            window.open('anime.html','_self');
        })
        return article;
    };
    
    let listItem1 = (item)=>{
        let li      = $create('li')
        let h4      = $create('h4')
        let h5      = $create('h5')
        let icon    = $create('svg')
    
        li.append(icon,h4,h5);
    
        icon.innerHTML = icons.playM;
        h4.innerText = item.name;
        h5.innerText = 'ANIME'
    
        li.addEventListener('click', ()=>{
            selected.anime = item;
            localStorage.setItem('selected', JSON.stringify(selected));
            window.open('anime.html','_self');
        })
    
        return li;
    };

    animes.forEach(element=>{
        $('.first .cards-container').append(itemBox1(element));
        $('.second .cards-container').append(itemBox2(element));
        $('.side ul').append(listItem1(element));
    });
}
    // cargar datos de serie seleccionada
async function loadData (){
    const data = await JSON.parse(localStorage.getItem('selected'));
    selected = data;
    // ejecutable para la página de descripcón
    if(html.title!= undefined){
        let iEp = 1
        html.title.innerText = selected.anime.name;
        html.type.innerText = 'ANIME';
        html.sypnosis.innerText = '';
        html.poster.src = selected.anime.img;

        selected.anime.Seasons.forEach(s =>{
            // creación de temporadas y contenedores de eps
            let li   = Complement({e:'li'});
            let h4   = Complement({e:'h4',text:s.name});
            let icon = Complement({e:'svg', text: icons.arrowDown});
            let span = Complement({e:'span'});
            let ul   = Complement({e:'ul'});
            ul.style.display = 'none';
            
            // creación de eps
            s.episodes.forEach(element =>{
                let contEp = Complement({e:'li'});
                let title = Complement({e:'h4',text:selected.anime.name});
                let txt = Complement({e:'h5',text:`Episodio ${iEp}`});
                let img = Complement({e:'img', src:s.img});
                let div = Complement({e:'div'});
                let icon= Complement({e:'svg'});
                icon.innerHTML = icons.playM;

                div.append(title,txt);
                contEp.append(icon,img,div);
                ul.append(contEp);

                contEp.addEventListener('click', ()=>{
                    selected.episode = s.episodes.lastIndexOf(element);
                    localStorage.setItem('selected', JSON.stringify(selected));

                    window.open('media-player.html','_self');
                });
                iEp++
            });
            // evento de click
            span.addEventListener('click',()=>{
                selected.season = selected.anime.Seasons.lastIndexOf(s);
                icon.innerHTML = ""
                if(ul.style.display != 'none'){
                    ul.style.display = 'none'
                    h4.style.color = '#44b9f0'
                    icon.innerHTML = icons.arrowDown;
                }else {
                    ul.style.display = 'flex'
                    h4.style.color = '#e6571e'
                    icon.innerHTML = icons.arrowUp;
                }
                    
            })
            
            iEp = 1;
            span.append(h4,icon)
            li.append(span,ul);
            html.episodeList.seasons.append(li);
        });
        i = 1;

    }
    // ejecutable para la página media-player
    if(mediaPlayer.iframe != undefined){
        // Agregado de datos
        mediaPlayer.title.innerText = `${selected.anime.name} episodio ${selected.episode}`;
        mediaPlayer.iframe.src = selected.anime.Seasons[selected.season].episodes[selected.episode-1];
            // boton de regresar se elimina si no es necesario
        if(selected.episode == 0) mediaPlayer.btnAfter.style.display = 'none'
        else mediaPlayer.btnAfter.style.display = 'flex'
            // boton de siguiente se elimina si no es necesario
        if(selected.episode+1 == selected.anime.Seasons[selected.season].episodes.length) mediaPlayer.btnNext.style.display = 'none'
        else mediaPlayer.btnNext.style.display = 'flex'

    }
}
    // menu dezplegable para mobiles
function ShowMenuMobile(){

    if($('.main') != null) $('.main').classList.toggle('opacate');
    if($('.media-player_contain') != null) $('.media-player_contain').classList.toggle('opacate');
    $('.header-main .container nav').classList.toggle('opacate');
    $('.footer').classList.toggle('opacate');


    menuBtn[0].classList.toggle('inactive');
    menuBtn[1].classList.toggle('inactive');
    
    if($('.Mobile-menu').style.display == 'flex' ) {
        $('.Mobile-menu').style.display = 'none'
        menuBtn[1].style.display = 'flex'
        menuBtn[0].style.display = 'none'
    } else {
        $('.Mobile-menu').style.display = 'flex'
        menuBtn[0].style.display = 'flex'
        menuBtn[1].style.display = 'none'
        menuBtn[0].style.opacity = 1
    }

    if($('.Mobile-menu').style.display == '' ){
        $('.Mobile-menu').style.display = 'flex'
    } 
   

}

function showNextAfterEp(value){
    /*
        evita que se muestre el boton para pasar al siguiente episodio
        si ya es el ultimo o regresar al anterior si es el primero.
    */
    if(value == 'after'){
        selected.episode--
        localStorage.setItem('selected', JSON.stringify(selected));
        loadData()
    } else {
        selected.episode++
        localStorage.setItem('selected', JSON.stringify(selected));
        loadData()
    }
}

if(mediaPlayer.btnAfter != null){
    mediaPlayer.btnAfter.style.display = 'flex'
    mediaPlayer.btnNext.style.display = 'flex'
}
    // Usar funcion solo si se esta en el index
if($('.main .contain') != null) startRender();
    // Usar funcion solo si no se esta en el index
if($('.anime-body') != null || $('.media-player') != null) loadData();