class Human{
    constructor(name ='Alex', age = 20, weight = 70, gender){
        this.name = name
        this.age = age
        this.weight = weight
        this.gender = gender
    }
    getinfo(str = null){
        if(str == null) return this
        else if(str == 'name'){
            return this.name
        }
        else if(str == 'age'){
            return this.name
        }
        else if(str == 'weight'){
            return this.weight
        }
        else if(str=='gender'){
            return this.gender
        }
        else return null
    }
    greeting(){
        console.log("Hi!")
    }
}
export default Human