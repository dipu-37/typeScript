{
    //

// const rollNumbers : number[] = [3,6,8];

// type genericArray = Array<string>

type genericArray<T> = Array<T>

const rollNumbers : Array<number>= [3,6,8];

const mentor : genericArray<string> = ["mr.x","mr.y"];
const boolArray : boolean[]=[true,false];

// array of object using generic 
const user: genericArray<{name:string, age:number}> = [
    {
        name: "dipu",
        age: 100,
    },
    {
        name: "dipu",
        age: 100,
    },
]

// generics tuple 

type GenericTuple<X,Y> = [X,Y]
const userWithId : GenericTuple<number, {name:string, email: string} >= [ 134, {name: "dipu", email : "jdkfj@djf"}
]


    //

}