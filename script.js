 const t1=gsap.timeline({default:{ease:'power4'}})
 const t2=gsap.timeline({default:{duration:1.5,delay:0.5}})

 AOS.init();

 t1.to('.navbar',{y:'-100%',duration:0})
 t1.to('.banner',{opacity:0,duration:0})
 t1.to('.label', { x: '0%', duration:1.5,delay:0.5,ease:'power1'})
 t1.to('.text', { y: '0%',opacity:1, duration:1.5,delay:0.8 })
 t1.to('.appintro', {opacity:1, duration:1.5,delay:0.5 })
 t1.to('.text', { y: '0%',opacity:0, duration:1.5 })
 t1.to('.appintro', { y: '-300%',opacity:1, duration:1,delay:0.5 })
 t1.to('.appname', { y: '-50%',opacity:1, rotation:360,ease:'back',duration:1.7,delay:0.5 })
 t1.to('.intro2', { x: '0%', duration: 1, delay: 0.5 })
 t1.to('.hidden2 p', {opacity:1, duration:2.5,delay:0.2})
 t1.to('.hidden2 p', {opacity:0, duration:1,delay:0.7})
t1.to('.text2', { y: '0%', duration: 0.9,opacity:1})
t1.to('.intro', { y: '-100%', duration: 0.5,delay:0.5})
t1.to('.intro2', { y: '-100%', duration: 0.5})
t1.to('.navbar',{y:'0%',duration:3,ease:'bounce',delay:0.5})
t1.to('.banner',{opacity:1,duration:4,ease:'SlowMo',delay:0.3})
t1.from('.down-arrow',{y:'6%',opacity:0,duration:1})

t2.from('.down-arrow',{y:20,repeat:-1,yoyo:true,duration:2})

const btn=document.querySelector('.navbar-toggler');
btn.addEventListener('click',()=>{
    btn.classList.toggle('toggle')
})