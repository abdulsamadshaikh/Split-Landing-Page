/*  
Project Name: Split Landing Page
Description:  I have made a minimal split landing page. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const splitLeft = document.querySelector('.left')
const splitRight = document.querySelector('.right')

splitLeft.addEventListener('mouseenter', () => {
    splitLeft.classList.add('hover')
    splitRight.classList.add('in-active')
})
splitLeft.addEventListener('mouseleave', () => {
    splitLeft.classList.remove('hover')
    splitRight.classList.remove('in-active')
})

splitRight.addEventListener('mouseenter', () => {
    splitRight.classList.add('hover')
    splitLeft.classList.add('in-active')
})
splitRight.addEventListener('mouseleave', () => {
    splitRight.classList.remove('hover')
    splitLeft.classList.remove('in-active')
})