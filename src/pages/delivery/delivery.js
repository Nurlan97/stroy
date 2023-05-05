// $(documentt).ready(function(){
//     $('.accordion').click(function(){
//         $('accordion').addClass('active')
//     })
// })

const accArr = Array.from(document.getElementsByClassName('accordion'))

accArr.map((el) => {
    el.addEventListener('click', () => {
         el.classList.toggle('active')
    })
})