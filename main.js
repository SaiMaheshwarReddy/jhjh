const dots = document.querySelectorAll('.dot')

const testmonials = document.querySelectorAll('.testmonial')

const hamburger = document.querySelector('.hamburger i')
const navList = document.querySelector('.nav__list')

dots.forEach((dot, index)=> {

    dot.addEventListener('click', ()=> {
        singleSlide()
    })

})




function singleSlide() {
    testmonials.forEach((testmonial)=> {
        testmonial.classList.remove('slide__single')

        // testmonial.classList.add('slide')
        testmonial.classList.toggle('slide__single')
    })
}

hamburger.addEventListener('click', (e)=> {
    e.preventDefault();
    navList.classList.toggle('active')
    console.log('clicked')
})