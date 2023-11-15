import Human from "./Human.js"
class Woman extends Human{
    constructor(name,age,weight,gender='F'){

        super(name,age,weight,gender)
    }
    greeting(){
        console.log(`Hi! I'm ${this.name}.`)
    }
}
export default Woman