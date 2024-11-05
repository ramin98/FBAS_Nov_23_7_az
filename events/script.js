// let show = document.getElementById('show')
// let hide = document.getElementById('hide')
// let con = document.getElementById('con')

// show.addEventListener('click', () => {
//     if(con.style.display === 'block'){
//         con.style.display = 'none'
//     }else{
//         con.style.display = 'block'
//     }
// })

// let flag = false
// show.addEventListener('click', () => {
//     if(flag){
//         con.style.display = 'none'
//         flag = false
//     }else{
//         con.style.display = 'block'
//         flag = true
//     }
// })


// show.addEventListener('click', () => {
//     if(con.classList.contains('hide')){
//         con.classList.remove('hide')
//         show.innerText = 'HIDE'
//     }else{
//         con.classList.add('hide')
//         show.innerText = 'SHOW'
//     }
// })

// function showHide(ev) {
//     console.log(ev)
//     con.classList.toggle('hide')
//     if(con.classList.contains('hide')){
//         ev.target.innerText = 'HIDE'
//     }else{
//         ev.target.innerText = 'SHOW'
//     }
// }

// show.addEventListener('click', showHide)
// console.log(show)

// con.addEventListener('mousemove', (ev) => {
//     console.log(ev.offsetX, ev.offsetY)
//     document.querySelector('#con div').style = `width: ${ev.offsetX}px`
// })

let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quia nemo dolor, culpa eos eius minus quibusdam cum id illum aliquam officiis ratione nulla est voluptatem, quam laborum numquam dolorum. Dolores, deleniti quo beatae quae, nobis corporis mollitia voluptate vitae culpa qui neque, quasi dolor vero exercitationem aut ut voluptatibus voluptas laboriosam enim explicabo alias at ipsam! Vero optio soluta, nulla neque laboriosam culpa dolorem mollitia officiis omnis expedita sint, iste ipsam autem. At doloremque adipisci aperiam itaque, iure a tempore, vel quis enim quos fugiat voluptate ratione perferendis eius doloribus! Quisquam libero eos, magni quae a tempore ea in!'
let arr = text.split(' ')
console.log(arr)

// only scale spans

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
//     let span = document.createElement('span')
//     span.innerHTML = ` ${element} `
//     span.addEventListener('mouseover', (ev) => {
//          ev.target.style.fontSize = '30px'
//     })
//     span.addEventListener('mouseout', (ev) => {
//         ev.target.style.fontSize = '20px'
//    })
//     document.getElementById('par').appendChild(span)
// }

// SCALE WITH LUPA

// let el
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
//     let span = document.createElement('span')
//     span.innerHTML = ` ${element} `
//     span.addEventListener('mouseover', (ev) => {
//          el = document.createElement('span')
//          el.innerText = ev.target.innerText
//          el.style.fontSize = '30px'
//     })

   
//     document.getElementById('par').appendChild(span)
// }

// document.getElementById('par').addEventListener('mouseover', () => {
//     document.getElementById('text-window').style.display = 'block'
// })

// document.getElementById('par').addEventListener('mouseout', () => {
//     document.getElementById('text-window').style.display = 'none'
// })

// document.getElementById('par').addEventListener('mousemove', (ev) => {
//        console.log(ev.clientY, ev.clientX)
//        document.getElementById('text-window').style.top = `${ev.clientY}px`
//        document.getElementById('text-window').style.left = `${ev.clientX}px`
//        document.getElementById('text-window').innerHTML = ''
//        document.getElementById('text-window').appendChild(el)
// })



// setTimeout(() => {
//     show.removeEventListener('click', showHide)
// }, 10000)




// show.onclick = function () {
//     con.classList.toggle('hide')
//     if(con.classList.contains('hide')){
//         show.innerText = 'HIDE'
//     }else{
//         show.innerText = 'SHOW'
//     }
// }


// hide.addEventListener('click', () => {
//     con.style.display = 'none'
// })

let search = document.getElementById('search')
let send = document.getElementById('send')

// document.addEventListener('keyup', (ev) => {
//         console.log(ev.key)
// })
search.addEventListener('input', (ev) => {
})

search.addEventListener('keydown', (ev) => {
    if(ev.key === 'Enter'){
        console.log(search.value)
    }
})

send.addEventListener('click', (ev) => {
    console.log(search.value)
})