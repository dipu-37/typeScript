{
    //oop- class
   class Animal {

//    public name : string;
//    public species: string;
//    public sound: string;

    constructor ( public name: string, public species : string , public sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound(){
        console.log(`this ${this.name} says ${this.sound}` );
    }

   }

   const dog = new Animal("german dog", "dog", "ghaw ghaw");
   dog.makeSound();

}