// let a  =42
// let b =a
// b++
// console.log('a', a)
// console.log('b', b)

// let a = [1,2,3]
// let b = a.concat() // isolation from reference to a without  this method it come mutation
// b.push(4)
// console.log('a', a)
// console.log('b', b)

// ==== clouser child could see variable on top level

// function sumFun(a, b) {
//     const sum = a + b

//     return function () {

//         console.log(sum)
//     }

// }

// const showRes1 = sumFun(2, 3)
// const showRes2 = sumFun(null, 1)
// showRes1()
// showRes2()

/// =======  private variable and scope

// function createFrameWork() {
//     const fw = ['Angular', 'React']

//     return {
//         print: function () {
//             console.log(fw.join(' '))
//         },
//         add: function (framework) {
//             fw.push(framework)
//             //console.log(framework)      == VueJS
//         }
//     }

// }

// const manager = createFrameWork()
// manager.print()
// manager.add('VueJS')
// manager.print()

//============ 

// const fib = [1, 2, 3, 5, 8, 13, 21]
// for (let i = 0; i < fib.length; i++) {
//     setTimeout(function () {
//         console.log(`fib[${i}] = ${fib[i]}`)
//     }, 1500)
// }

// context

// const person = {
//     surname: 'Week',
//     knows: function (what, name) {
//         console.log(`You ${what} know, ${name} ${this.surname}`)

//     }

// }
// const person_2 = { surname: 'Zoo' }

// person.knows('all', 'John')

// person.knows.call(person_2, 'nothing', 'Ella') // call function 1 parammetr is context
// person.knows.apply(person_2, ['nothing', 'Ella']) // call function 1 parammetr is context
// person.knows.bind(person_2, 'nothing', 'Ella') // bind don't call fun but he return new function ,eans if
// bound = person.knows.bind(person_2, 'nothing', 'Ella'); // assign fun to variable 
// bound();// call new fun
//Res
// You all know, John Week
// You nothing know, Ella Zoo
// You nothing know, Ella Zoo
// You nothing know, Ella Zoo

// ============== context class/function
// function Person (name, age){
//     this.name = name,
//     this.age = age
//     console.log(this)
// }

// const person_1 = new Person('Elina',20) // person 1 = this (context)
// res: Person { name: 'Elina', age: 20 }

// // ========implict context 
// function logThis() {
//     console.log(this)
// }

// const obj = { num: 40 }
// logThis.apply(obj)
// logThis.call(obj)
// //======= un implicide context

// const animal = {
//     legs :4,
//     logThis: function(){
//         console.log(this)
//     }

// }

// animal.logThis()

/// ===== new instance of Cat (if class then copnstructor)
// function Cat (color, name) {
//     this.color = color
//     this.name = name
// }

// const cat_1 = new Cat ('red','Tom')
// console.log(cat_1)

/// ======= prototype there are 2 context

// 1 - object access to parent on top
// __proto__   ES-6
//Object.getPrototypeOf() ES-5 
// 2 - extend prototyp parent class

function Cat(name, color){
    this.name = name
    this.color = color
}

Cat.prototype.voice = function(){
    console.log(`Cat ${this.name} says Myau!!!` )
}

const cat = new Cat ('Tom','wite')

cat. weight = 54;

cat.voice(); //Res Cat Tom says Myau!!!

console.log(cat.hasOwnProperty('voice')) 
//false coz it is property prototyp





