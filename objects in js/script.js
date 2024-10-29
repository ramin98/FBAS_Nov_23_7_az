// let obj = {
//     'user-Name': 'Sam',
//     address: 'New-york',
//     get showInfo() {
//         return this.address
//     },
//     set showInfo(newAddress) {
//         this.address = newAddress
//     },
//     id:1
// }

// obj.id = 'dsdgf'
// console.log(obj)
// console.log(obj.showInfo)
// obj.showInfo = 'Losangeles'
// console.log(obj.showInfo)

// const goods = [
//     { year: 2022, name: "Laptop", price: 1200 },
//     { year: 2021, name: "Smartphone", price: 800 },
//     { year: 2023, name: "Tablet", price: 600 },
//     { year: 2020, name: "Smartwatch", price: 300 },
//     { year: 2022, name: "Headphones", price: 150 }
// ];

// let input = prompt()

// goods.sort((a, b) => a[input] - b[input])
// console.log(goods)

// let Person = {
//     company:'City-net',
//     address:'Baku',
//     showInfo(){
//         console.log(this.company, this.address)
//     }
// }

// let Admin = {
//     __proto__: Person,
//     status:'junior',
//     showInfo(){
//         console.log(this.status)
//     }
// }

// console.log(Admin)
// Admin.showInfo()
// Admin.method = function (params) {
//     console.log('dasdeawdasd')
// }

// Admin.method()
// console.log(Admin.status)

// Array.prototype.myMethod = function () {
    
// }

function cart(goodsArr, arr, name) { 
    arr.push(goodsArr.find((item) => item.product_name === name)) 
} 
let arr = [] 
let prodname = 'Kişi şalı' 
cart(goods,arr,prodname) 
console.log(arr)