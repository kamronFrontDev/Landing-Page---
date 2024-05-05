let light = document.querySelector('.light')
let quyosh = document.querySelector('.quyosh')

light.onclick = function() {
       quyosh.classList.toggle('oy')
       light.classList.toggle('dark')
}