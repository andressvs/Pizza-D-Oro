/*MOSTRAR MENÚ*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Mostrar menú */
if(navToggle){
   navToggle.addEventListener('click', () =>{
     navMenu.classList.add('mostrar-menu')
   })
}

/* Ocultar menú */
if(navClose){
   navClose.addEventListener('click', () =>{
     navMenu.classList.remove('mostrar-menu')
   })
}

/*ELIMINAR MENÚ MÓVIL*/
const navLink = document.querySelectorAll('.navegacion__enlace')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // Cuando hacemos clic en cada nav__link, eliminamos la clase mostrar-menu
   navMenu.classList.remove('mostrar-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*AÑADIR SOMBRA AL ENCABEZADO */
const shadowHeader = () =>{
   const header = document.getElementById('header')
   
   this.scrollY >= 50 ? header.classList.add('sombra-encabezado') 
                      : header.classList.remove('sombra-encabezado')
}
window.addEventListener('scroll', shadowHeader)

/*SWIPER POPULAR */
const swiperPopular = new Swiper('.popular__swiper', {
   loop: true,
   grabCursor: true,
   slidesPerView: 'auto',
   centeredSlides: 'auto',
  
})

/*MOSTRAR DESPLAZAMIENTO HACIA ARRIBA*/ 
const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')
   
   this.scrollY >= 350 ? scrollUp.classList.add('mostrar-desplazamiento')
                       : scrollUp.classList.remove('mostrar-desplazamiento')
}
window.addEventListener('scroll', scrollUp)

/*ENLACE ACTIVO DE SECCIONES DE DESPLAZAMIENTO*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
   const scrollDown = window.scrollY

   sections.forEach(current =>{
     const sectionHeight = current.offsetHeight,
           sectionTop = current.offsetTop - 58,
           sectionId = current.getAttribute('id'),
           sectionsClass = document.querySelector('.navegacion__menu a[href*=' + sectionId + ']')

     if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
         sectionsClass.classList.add('enlace-activo')
     }else{
         sectionsClass.classList.remove('enlace-activo')
     }                                                        
   })
}
window.addEventListener('scroll', scrollActive)

/*ANIMACIÓN SCROLL*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 300,
   
})

sr.reveal(`.inicio__datos, .popular__contenedor, .pie-pagina`)
sr.reveal(`.inicio__tabla`, {delay: 700, distance: '100px', origin: 'right'})
sr.reveal(`.inicio__pizza`, {delay: 1400, distance: '100px', origin: 'bottom', rotate:{z: -90}})
sr.reveal(`.inicio__ingrediente`, {delay: 2000, interval: 100})
sr.reveal(`.nosotros__datos, .receta__lista, .contacto__datos`, {origin: 'right'})
sr.reveal(`.nosotros__img, .receta__img, .contacto__imagen`, {origin: 'left'})
sr.reveal(`.productos__tarjeta`, {interval: 100})