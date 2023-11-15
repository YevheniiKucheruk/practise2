import Human from "./Human.js"
class Man extends Human{
    constructor(name,age,weight,gender = 'M'){

        super(name,age,weight,gender)
    }
    greeting(){
        console.log(`Hi! I'm ${this.name}. I'm ${this.age} yo.`)
    }
}

export default Man