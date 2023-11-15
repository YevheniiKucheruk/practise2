//TASK 3
class Human{
    constructor(name ='Alex', age = 20, weight = 70, gender){
        this.name = name
        this.age = age
        this.weight = weight
        this.gender = gender
    }
    getinfo(str){
        return str === null ? {name: this.name} : this[str]
    }
    greeting(){
        console.log("Hi!")
    }
}
// let chel = new Human('Eugene',18,100,'M')
// chel.greeting()
// console.log(chel.getinfo('name'))


//TASK 4
class Man extends Human{
    constructor(name,age,weight,gender = 'M'){

        super(name,age,weight,gender)
    }
    greeting(){
        console.log(`Hi! I'm ${this.name}. I'm ${this.age} yo.`)
    }
}
class Woman extends Human{
    constructor(name,age,weight,gender='F'){

        super(name,age,weight,gender)
    }
    greeting(){
        console.log(`Hi! I'm ${this.name}.`)
    }
}

// let man = new Man("Eugene",18,100)
// man.greeting()
// let woman = new Woman("Hope",18,50)
// woman.greeting()

//TASK 5
let array = []
for (let i = 1; i <= 15; i++) {
  let variableName = 'var' + i;
  if (i%2==1) array.push(this[variableName] = new Woman())
  else array.push(this[variableName] = new Man())
}
array[1] = new Man('John',30,75)
console.log(array)



//TASK 6
function searchInArray(list, searchField, searchValue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const results = list.filter(item => item[searchField] == searchValue)
  
        if (results.length > 0) {
          resolve(results)
        } else {
          reject(`За пошуком по ${searchField}: ${searchValue} не знайдено.`)
        }
      }, 1000)
    })
}
searchInArray(array, 'name', 'John').then(results => {
    console.log('Результати пошуку:', results)
  })
  .catch(error => {
    console.log(error)
  })