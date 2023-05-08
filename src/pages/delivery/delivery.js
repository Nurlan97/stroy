// $(documentt).ready(function(){
//     $('.accordion').click(function(){
//         $(this).toggleClass('active')
//     })
// })

const accArr = Array.from(document.getElementsByClassName('accordion'))

accArr.map((el) => {
    el.addEventListener('click', () => {
         el.classList.toggle('active')
    })
})