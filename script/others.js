

// 1.- jikan api
// 2.- kitsu API
let icons = {
    playS: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>',
    playM: '<svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>',
    playL: '<svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99224 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38304 12.692 9.25932 12.555 9.168L9.555 7.168Z" fill="white"/></svg>'
}

let dt 
let animeInfo
let box = []
let animeSelected
    // jikan


async function getData () {

    dt = await fetch('https://api.jikan.moe/v4/anime/37349?locale=es')
    .then(response => response.json())
        .then(data => dt = data.data);

    animeInfo = {
        title: dt.title,
        rating: dt.rating,
        description: dt.background,
        img: dt.images.webp.image_url
    }
    console.log(animeInfo)
}

async function getPopular(){
    let i = 5
    let element
    while (i <= 20) {
        element = await fetch(`https://api.jikan.moe/v4/anime/${i}`)
        .then(response => response.json())
            .then(data => {
                element = data;
                box.push(element)
            });

        i++
    }

    console.log(box);
}

// elementos del html

let itemBox1 = (item)=> {

    let article = $create('article')
    let div     = $create('div')
    let h4      = $create('h4')
    let h5      = $create('h5')
    let picture = $create('picture')
    let img     = $create('img')

    div.append(h4,h5);
    picture.append(img);
    article.append(div,picture);

    h5.innerText = item.name;
    h4.innerText = 'episode 1'
    img.src      = item.img;

    article.addEventListener('click', ()=>{
        animeSelected = item;
        localStorage.setItem('animeSelected', JSON.stringify(animeSelected));
        window.open('anime.html','_self');
    })

    return article;
}

let itemBox2 = (item)=>{
    let article = $create('article')
    let h4      = $create('h4')
    let h5      = $create('h5')
    let picture = $create('picture')
    let img     = $create('img')

    picture.append(img,h5);
    article.append(picture,h4);

    h4.innerText = item.name;
    h5.innerText = 'anime'
    img.src      = item.img;

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

/*
guardar objetos en la local storage
localStorage.setItem('obj1', JSON.stringify(Player));

let objObtenido = JSON.parse(localStorage.getItem('obj1'));
*/

let menuBtn = $all('.header-main .mobile button');

menuBtn[1].style.display = 'flex'
menuBtn[0].style.display = 'none'

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

animes.forEach(element => {
    $('.first .cards-container').append(itemBox1(element));
    $('.second .cards-container').append(itemBox2(element));
    $('.side ul').append(listItem1(element));
});

