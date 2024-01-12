const $ = (element)=> document.querySelector(element);
const $all = (element)=> document.querySelectorAll(element);
const $create = (element)=> document.createElement(element);
let animeSelected
let episodeSelected
    // boton del menu mobile
let menuBtn = $all('.header-main .mobile button');
menuBtn[1].style.display = 'flex'
menuBtn[0].style.display = 'none'
    // iconos svg
let icons = {
    playS: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>',
    playM: '<svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>',
    playL: '<svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>'
}
    // contenedores generales del html
let html = {
    title: $('.anime-body .header .title h2'),
    type : $('.anime-body .header .title h5'),
    sypnosis:$('.anime-body .header p'),
    poster:  $('.anime-body .contain picture img'),
    episodeList: {
        ul: $('.anime-body .contain .episode-list ul')
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
        let article = Complement({e:'article'})
        let div     = Complement({e:'div'})
        let h4      = Complement({e:'h4', text:'Episode 1'});
        let h5      = Complement({e:'h5', text:item.name}); 
        let picture = Complement({e:'picture'})
        let img     = Complement({e:'img', src: item.img, alt: item.name});
        
        div.append(h4,h5);
        picture.append(img);
        article.append(div,picture);
    
        article.addEventListener('click', ()=>{
            animeSelected = item;
            localStorage.setItem('animeSelected', JSON.stringify(animeSelected));
            window.open('anime.html','_self');
        })
    
        return article;
    }
    
    let itemBox2 = (item)=>{
        let article = Complement({e:'article'});
        let h4      = Complement({e:'h4',text: item.name});
        let h5      = Complement({e:'h5',text:'ANIME'});
        let picture = Complement({e:'picture'});
        let img     = Complement({e:'img', src:item.img, alt:item.name});
    
        picture.append(img,h5);
        article.append(picture,h4);
    
        article.addEventListener('click', ()=>{
            animeSelected = item;
            localStorage.setItem('animeSelected', JSON.stringify(animeSelected));
            window.open('anime.html','_self');
        })
        return article;
    }
    
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
            animeSelected = item;
            localStorage.setItem('animeSelected', JSON.stringify(animeSelected));
            window.open('anime.html','_self');
        })
    
        return li;
    }

    animes.forEach(element => {
        $('.first .cards-container').append(itemBox1(element));
        $('.second .cards-container').append(itemBox2(element));
        $('.side ul').append(listItem1(element));
    });
}
    // cargar datos de serie seleccionada
async function loadData (){
    let episodeN = 1
    const data = await JSON.parse(localStorage.getItem('animeSelected'));
    episodeSelected = parseInt(localStorage.getItem('episodeSelected'))
    animeSelected = data

    // ejecutable para la página de descripcón
    if(html.title!= undefined){

        html.title.innerText = animeSelected.name;
        html.type.innerText = 'ANIME';
        html.sypnosis.innerText = '';
        html.poster.src = animeSelected.img;
    
        animeSelected.eps[0].forEach(element => {
            let li      = $create('li')
            let img     = $create('img')
            let div     = $create('div')
            let title   = $create('h4')
            let episode = $create('h5')
            let epN     = (episodeN-1)
    
            //console.log(element.indexOf);
            li.innerHTML = icons.playM;
            img.src = animeSelected.img;
            title.innerText = animeSelected.name;
            episode.innerText = `episodio ${episodeN}`
            
            div.append(title,episode);
            li.append(img,div);
    
            li.addEventListener('click',()=>{
                episodeSelected = animeSelected.eps[0][epN];
                localStorage.setItem('animeSelected', JSON.stringify(animeSelected));
                localStorage.setItem('episodeSelected', epN);
                
                window.open('media-player.html','_self');
                
            });
            
            html.episodeList.ul.append(li);
            episodeN++
        });
    }
    // ejecutable para la página media-player
    if(mediaPlayer.iframe != undefined){
        mediaPlayer.title.innerText = `${data.name} episodio ${episodeSelected+1}`;
        mediaPlayer.iframe.src = data.eps[0][episodeSelected]

        if(episodeSelected == 0) mediaPlayer.btnAfter.style.display = 'none'
        else mediaPlayer.btnAfter.style.display = 'flex'

        if(episodeSelected+1 == data.eps[0].length) mediaPlayer.btnNext.style.display = 'none'
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
        episodeSelected--
        localStorage.setItem('episodeSelected', JSON.stringify(episodeSelected));
        loadData()
    } else {
        episodeSelected++
        localStorage.setItem('episodeSelected', JSON.stringify(episodeSelected));
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