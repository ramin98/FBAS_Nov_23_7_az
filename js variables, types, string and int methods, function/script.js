// console.log(userName)

// let userName = 'Sam'
// userName = 'Tom'
// console.log(userName)


// var userName = 'Sam'
// var userName = 'Sam'
// console.log(userName)
// const PASSWORD = '1234'
// PASSWORD  = '4564'

// let stringValue = 'Hello'
// console.log(typeof stringValue, stringValue)

// let numberValue = 12
// console.log(typeof numberValue, numberValue)

// let booleanValue = true
// console.log(typeof booleanValue, booleanValue)

// let nullValue = null
// console.log(typeof nullValue, nullValue)

// let undefinedValue = undefined
// console.log(typeof undefinedValue, undefinedValue)

// let arrValue = [1,2,3]
// console.log(typeof arrValue, arrValue)

// let objValue = {a: 'a'}
// console.log(typeof objValue, objValue)

// let funcValue = function () {

// }

// console.log(typeof funcValue, funcValue)

// let bigValue = 234567n
// console.log(typeof bigValue, bigValue)

// let bigValueClass = BigInt(234214)
// console.log(typeof bigValueClass, bigValueClass)

// if(typeof bigValueClass === 'bigint'){
//     console.log(bigValueClass)
// }

// let symbolValue = Symbol('name')
// let symbolValueTwo = Symbol('name')
// console.log(symbolValue === symbolValueTwo)
// console.log(typeof symbolValue, symbolValue)

// console.log(!!!true)

// let active = null && undefined

// console.log(active)

// console.log(2 / 'a')
// console.log('2'.repeat(10))
// console.log('df' / 0)

// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean('sdf'))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean([]))
// console.log(Number(false))
// console.log(Number(null))
// console.log(Number(undefined))
// console.log(Number(''))
// console.log(Number('1'))

// let valueStringClass = new String('hello')
// let valueStringClassTwo = new String('hello')

// console.log(valueStringClass === valueStringClassTwo)

// let input = prompt()
// alert(input)
// let okay = confirm()
// alert(okay)

// hello = 2
// console.log(typeof hello)

// let obj = {
//     a:'A',
//     b:'B'
// }



// for (const key in obj) {
//     console.log(key, obj[key])
// }

// let arr = [1,2,3,4,5]


// for (const iterator of arr) {
//     console.log(iterator)
// }


// const regex = /^\+994(50|51|55|70|77|80|99)\d{7}$/;

// const testNumbers = [
//     "+994501234567", // валидный номер
//     "+994551234567", // валидный номер
//     "+994601234567", // невалидный номер
//     "+9947012345678" // невалидный номер
// ];

// testNumbers.forEach(number => {
//     console.log(`${number}: ${regex.test(number)}`);
// });

// let text = 'hello world'
// console.log(text.split(' '))
// console.log(text.includes('wor'))
// console.log(text.startsWith('wor'))
// console.log(text.endsWith('world'))

// loop1:
// for (let index = 0; index < 10; index++) {
//     loop2:
//     for (let j = 0; j < 10; j++) {
//         console.log(index, j)
//         if (index === 2) {
//             break loop1
//         }
//     }
// }

// let book = 'War and peace'
// let author = 'L.Tolstoy'
// let available = true


// console.log(`Do \\ yo have ${book} of ${author}. ${available ? 'Yes' : 'no'}`)
// console.log('Do yo have' + book + 'of' + author + '.'  + available ? 'Yes' : 'no')

// console.log(`gfd
// dfg
// dfgd
// fgdfg
// dfg
// dfg
// dfg
// dfg
// dfg`)

// document.getElementById('par').innerText = `gfd
// dfg
// dfgd
// fgdfg
// dfg
// dfg
// dfg
// dfg
// dfg`

// function sayHello() {
//     console.log(arguments[0])
//     console.log(arguments[1])
//     console.log(arguments[2])
//     console.log(arguments[3])
// }

// sayHello('sayHello1','sayHello2','sayHello3')

// let saySalam = function () {
//     console.log('saySalam')

// }

// saySalam()

// let helloFunc = (hello = 'saySalam') => {
//     console.log(hello)
// }

// helloFunc('fsdfs')

// let user = {
//     userName:'Ramin',
//     userEmail:'ramin@ramin.ru',
//     showInfo () {
//         console.log(this.userName)
//     }
// }

// user.showInfo()

// let arr = [12,3,4,5,6]

// arr.forEach(function(item){
//    console.log(item)
// })

// let showName = userName => userName
// console.log(showName('Ramin'))

// let text = 'h$e*&l.lo wor.l@d'

// function filterText(textFor) {
//     let filteredText = ''
//     for (let index = 0; index < textFor.length; index++) {
//         const element = textFor[index];
//         console.log(element.charCodeAt(0))

//         if(element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122){
//             filteredText += element
//         }
//     }

//     return filteredText
// }

// console.log(filterText(text))

