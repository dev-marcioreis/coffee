gsap.from('.home__content', {opacity: 0, duration: 1, delay: 1, x: 30})
gsap.from('.home__image', {opacity: 0, duration: 1, delay: 1, x: -30})

gsap.from('.about__title', {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: 1})
gsap.from('.about__description', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1})

const timeline = gsap.timeline({default: {duration: 0.75}})

timeline.fromTo('.about__container', {scale: 0}, {scale: 1})
timeline.fromTo('.about__image', {scale: 0, rotation: '-45deg'}, {scale: 1, rotation: '0deg'})