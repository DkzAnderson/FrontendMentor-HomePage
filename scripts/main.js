
let $ = (element)=> document.querySelector(element);


const menu = {
    open: $('#btn_open-menu'),
    close:$('#btn_close-menu')
}


const interfaces = {
    main      : $('.App'),
    section1  : $('.App .article_main'),
    section2  : $('.App .article_second'),
    section3  : $('.App .article_list'),
    menuMobile: $('.mobile_menu')
}


menu.open.addEventListener('click',()=>{
    interfaces.section2.style.display = 'none'
    interfaces.section3.style.display = 'none'
    interfaces.menuMobile.style.display = 'flex'
    interfaces.main.style.opacity = '0.3'
});

menu.close.addEventListener('click',()=>{
    interfaces.section2.style.display   = 'flex'
    interfaces.section3.style.display   = 'flex'
    interfaces.menuMobile.style.display = 'none'
    interfaces.main.style.opacity       = '1'
});