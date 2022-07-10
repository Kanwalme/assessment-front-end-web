const section = document.querySelector('section')
const btns = document.querySelectorAll('.text-changer')
for (let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', e=>{
        alert(section.textContent =e.target.id)
    })
}