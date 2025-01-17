class Animal{
    constructor(name,sound,legs){
        this.name = name;
        this.sound = sound;
        this.legs=legs;
    }
    static myType(){
        console.log("Animal");
    }
    speak() {
        console.log(`${this.name} speaks`);
    }
}

let dog = new Animal("dog","bow-bow",4);
dog.speak();
Animal.myType(); 