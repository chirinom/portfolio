// ------------skills-----------

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const bsBar = document.querySelector('.bar-bootstrap')
const designBar = document.querySelector('.bar-design')
const rorBar = document.querySelector('.bar-ror')
const oopBar = document.querySelector('.bar-oop')
const mvcBar = document.querySelector('.bar-mvc')
const sqlBar = document.querySelector('.bar-sql')
const arBar = document.querySelector('.bar-ar')
const ggBar = document.querySelector('.bar-gg')
const ghBar = document.querySelector('.bar-gh')
const figmaBar = document.querySelector('.bar-figma')
const herokuBar = document.querySelector('.bar-heroku')
const asBar = document.querySelector('.bar-as')


let t1 = new TimelineLite();

t1.fromTo(htmlBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
  .fromTo(cssBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(85% - 6px)`, ease: Power4.easeOut})
  .fromTo(jsBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.easeOut})
  .fromTo(bsBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeOut})
  .fromTo(designBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
  .fromTo(rorBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(85% - 6px)`, ease: Power4.easeOut})
  .fromTo(oopBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut})
  .fromTo(mvcBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
  .fromTo(sqlBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeOut})
  .fromTo(arBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(85% - 6px)`, ease: Power4.easeOut})
  .fromTo(ggBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(85% - 6px)`, ease: Power4.easeOut})
  .fromTo(ghBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeOut})
  .fromTo(figmaBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut})
  .fromTo(herokuBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
  .fromTo(asBar, .15, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})

const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
  triggerElement: '.back-and-front-skills',
  triggerHook: 1
})
.setTween(t1)
.addTo(contoller)



// ------------nav tabs-----------

const showRequiredCategory = event => {
  const getId = event.id
  const links = document.querySelectorAll('.work-category button')
  for(i=0; i<links.length; i++) {
    if(links[i].hasAttribute('class')) {
      links[i].classList.remove('active')
    }
  }

  event.classList.add('active')
  const getCategory = document.querySelector(`.category-${getId}`)
  const categories = document.querySelectorAll('div[class^="category-"]')
  for(i=0;i<categories.length; i++) {
    if(categories[i].hasAttribute('class')) {
      categories[i].classList.remove('showCategory')
      categories[i].classList.add('hideCategory')
    }
  }

  getCategory.classList.remove('hideCategory')
  getCategory.classList.add('showCategory')
}

