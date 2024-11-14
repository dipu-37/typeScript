{
    // generic constrant with keyof operator

    type vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    type owner2 = keyof vehicle;
    // const person2 : owner2 = ""


const getpropertyvalue =< X,Y extends keyof X> (obj: X , key: Y)=>{
    return obj[key]
}

const user = {
    name: "",
    age:"",
    address:''
}
const car = {
    model: " ",
    year: 200,
}
getpropertyvalue (user,"age");
getpropertyvalue (user,"age");



    //
}