import gsap from "gsap/all"

let title = document.querySelector('.homeHeader__title')
let subtitle = document.querySelector('.homeHeader__subtitle')
let menu = document.querySelector('.headerNav__menu')

gsap.from(title, {
    duration: 1.5,
    delay: 3.3,
    yPercent: 100,
    y: 100,
    ease: "power4",
    stagger: 0.1
})
gsap.from(subtitle, {
    duration: 1.5,
    delay: 3.6,
    yPercent: 100,
    y: 100,
    ease: "power4",
    stagger: 0.1
})
gsap.from(menu, {
    duration: 1,
    delay: 4.5,
    opacity: 0,
    ease: "power4",
})