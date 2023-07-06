let menu_type = 'close'

function menuFunc() {
    let nav = document.querySelector('header')
    switch (menu_type) {
        case 'close':
            nav.classList.add('header_active')
            menu_type = 'open'
            break
        case 'open':
            nav.classList.remove('header_active')
            menu_type = 'close'
            break
        }
}

window.onscroll = () => headerColor()

function headerColor() {
    let header = document.querySelector('.header')
    if (window.scrollY >= 320) {
        header.classList.add('header_scroll')
    }

    else if (window.screenY <= 319) {
        header.classList.remove('header_scroll')
    }
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    breakpoints: {
        990 : {
            slidesPerView : 3
        },
        700 : {
            slidesPerView : 2
        },
        200 : {
            slidesPerView : 1
        }
    }
  });


function sortItem(e) {
    let item_btn = document.querySelector('.active')
    let item = document.querySelector('.menu_content_active')
    item_btn.classList.remove('active')
    item.style.opacity = 0
    setTimeout(() => {
        
        item.classList.remove('menu_content_active')
        item.classList.add('menu_content')
        
        if (e.target.className == 'menu_sort_item') {
            e.target.classList.add('active')
            let active_item = document.getElementById(`${e.target.id}_content`)
            active_item.classList.add('menu_content_active')
        }
        else if (e.target.parentNode.className == 'menu_sort_item') {
            e.target.parentNode.classList.add('active')
            let active_item = document.getElementById(`${e.target.parentNode.id}_content`)
            active_item.classList.add('menu_content_active')
        }
        item.style.opacity = 1
    }, 400);
}