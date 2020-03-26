document.getElementsByClassName('btn')[0].addEventListener('click', ()=>{
    document.querySelector('nav').classList.add('appear')
})

document.getElementsByClassName('btn')[1].addEventListener('click', ()=>{
    document.querySelector('nav').classList.remove('appear')
})