let $ = (element)=> document.querySelector(element);
let $all = (element)=> document.querySelectorAll(element);
let $create = (element)=> document.createElement(element);

let icons = {
    playS: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>',
    playM: '<svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>',
    playL: '<svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>'
}

let menuBtn = $all('.header-main .mobile button');

menuBtn[1].style.display = 'flex'
menuBtn[0].style.display = 'none'

let animeSelected
let episodeSelected

let html = {
    title: $('.anime-body .header .title h2'),
    type : $('.anime-body .header .title h5'),
    sypnosis:$('.anime-body .header p'),
    poster:  $('.anime-body .contain picture img'),
    episodeList: {
        ul: $('.anime-body .contain .episode-list ul')
    }
}

async function loadData (){
    let episodeN = 1
    const data = await JSON.parse(localStorage.getItem('animeSelected'));
    animeSelected = data

    html.title.innerText = animeSelected.name;
    html.type.innerText = 'ANIME';
    html.sypnosis.innerText = 'Descripción';
    html.poster.src = animeSelected.img;

    animeSelected.eps[0].forEach(element => {
        let li      = $create('li')
        let img     = $create('img')
        let div     = $create('div')
        let title   = $create('h4')
        let episode = $create('h5')
        let epN     = (episodeN-1)

        console.log(element.indexOf);
        li.innerHTML = icons.playM;
        img.src = animeSelected.img;
        title.innerText = animeSelected.name;
        episode.innerText = `episodio ${episodeN}`
        
        div.append(title,episode);
        li.append(img,div);

        li.addEventListener('click',()=>{
            episodeSelected = animeSelected.eps[0][epN];
            localStorage.setItem('animeSelected', JSON.stringify(animeSelected));
            /*
                agregar ventana de reproductor
                 cambiar 'anime.html'
                window.open('anime.html','_self');
            */
            console.log(episodeSelected);
        })




        html.episodeList.ul.append(li);
        episodeN++


    });



}


function ShowMenuMobile(){
    $('.header-main .container nav').classList.toggle('opacate');
    $('.main').classList.toggle('opacate');
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

loadData();

