

type courseNameType = string
const courseName: courseNameType = "next lavel web development"


type operationType = (x:number,y:number)=> number
const calculate = (number1: number, number2:number, operation:operationType)=>{
    return operation (number1, number2)
};

calculate(10,30, (x,y)=>x+y);