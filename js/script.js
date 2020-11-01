// ------------skills-----------

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const rorBar = document.querySelector('.bar-ror')
const bsBar = document.querySelector('.bar-bootstrap')
const rubyBar = document.querySelector('.bar-ruby')
const oopBar = document.querySelector('.bar-oop')
const mvcBar = document.querySelector('.bar-mvc')
const ggBar = document.querySelector('.bar-gg')
const figmaBar = document.querySelector('.bar-figma')
const herokuBar = document.querySelector('.bar-heroku')
const saBar = document.querySelector('.bar-sa')

let t1 = new TimelineLite();

t1.fromTo(htmlBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
  .fromTo(cssBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(85% - 6px)`, ease: Power4.easeOut})
  .fromTo(jsBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.easeOut})
  .fromTo(bsBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeOut})
  .fromTo(rubyBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(85% - 6px)`, ease: Power4.easeOut})
  .fromTo(rorBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(85% - 6px)`, ease: Power4.easeOut})
  .fromTo(oopBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut})
  .fromTo(mvcBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
  .fromTo(ggBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(85% - 6px)`, ease: Power4.easeOut})
  .fromTo(figmaBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(75% - 6px)`, ease: Power4.easeOut})
  .fromTo(herokuBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
  .fromTo(saBar, .35, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})

const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
  triggerElement: '.skills',
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

