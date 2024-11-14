
class Person {
    name: string;
    age : number;

    constructor(name : string , age: number){
        this.name = name;
        this.age = age;

    }

    introduce(){
        console.log(` hello ${this.name}`);
    }
}

class child extends Person {
    toy : string;

    constructor( name : string, age : number, toy: string){
        super(name, age); // call the person constructor 
        this.toy = toy;

    }

    introduce(): void {
        super.introduce();
        console.log(`i love ${this.toy}`)
    }
}

const childobj = new child ('dipu', 6, 'doll');
childobj.introduce();