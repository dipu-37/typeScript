
function add(num1:number, num2:number){
    return num1 + num2;
}

add(2,4)

// TODO: 

const addArrow = (num1:number, num2:number) =>num1 + num2;



const arr = [1,3, 5, 6,7];

const newArray = arr.map((element:number)=>element * element);



const person :{
    name : string;
    balance: number;
    addbalance (money : number): number;
} = {
    name: "dipu",
    balance : 5,
    addbalance(money : number){
        return this.balance + money;
    },
}