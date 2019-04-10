class Cat{
    constructor(name,age=.1,sex){
        this.name = name;
        this.age = age;
        this.health = health;
    }
    
    growUp(){
        if(this.age < 1){
             this.age+= .1;
         }
        else {
           this.age+= 1;
        }
    }
    static getRandomSex(){
            let randomNumber = Math.floor(Math.random() * 2 ) + 1;
            if(randomNumber === 1){
                return "female";
           }
            else {
                return "male";
            }
        }
        
        
    giveBirth(){
        if(this.age > .4){
            console.log("sorry " + this.name + " is " + " too young");
        }
        else{
            let kitten = new Cat(null, .1 , Cat.getRandomSex());
            kitten.parent=this;
            
            return kitten;
            }
    }
    
        scratch(target){
            target.heath--;
            
            console.log(this.name + " attacked " + target.name " and " + target.name + "'s "  + "current health is " + target.health);
        }
    }
