// let par = document.getElementById('par')
// console.log(par)
// console.log(par.id)
// console.log(par.className)
// let par2 = document.querySelector('.item')
// console.log(par2)
// let par3 = document.getElementsByClassName('item')
// console.log(par3.par)
// let par4 = document.querySelectorAll('.item')
// console.log(par4)

// let arr = []
// for (let index = 0; index < par3.length; index++) {
//     arr.push(par3[index])
// }

// console.log(arr)

// let normalArray = Array.from(par3)
// console.log(normalArray)

let list = document.getElementById('list')
console.log(list.parentElement)
console.log(list.previousElementSibling)
console.log(list.nextElementSibling)
console.log(list.firstElementChild)
console.log(list.lastElementChild)
console.log(list.children)
console.log(list.querySelector('li:nth-child(3)').textContent)
console.log(list.innerText)
console.log(list.textContent)
console.log(document.getElementById('pre').innerText)
console.log(document.getElementById('pre').textContent)
console.log(list.innerHTML)


let li1 = 'a'
let li2 = 'b'
let li3 = 'c'
let li4 = 'd'
let li5 = 'e'

list.innerHTML = `
<li>${li1}</li>
<li>${li2}</li>
<li>${li3}</li>
<li>${li4}</li>
<li>${li5}</li>
`

list.children[0].innerText = 'sfsdftdfsd'
list.children[1].innerText = 'sfsdftdfsd'

let li = document.createElement('li')
li.innerText = 'hello'
console.log(li)
list.appendChild(li)

let a = document.createElement('a')
a.innerText = 'about'
a.href = './about.html'
a.id = 'about'
a.className = 'link'
a.style.backgroundColor = 'red'
console.log(a)
document.getElementById('con').appendChild(a)












