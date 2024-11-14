// type assertion :

let anythig : any;
anythig = "next level web development";

// anythig = 222;
// (anythig as number).

const kgToGm = (value : string | number): string | number | undefined => {
    if(typeof value === "string"){
        const covertedValue = parseFloat(value)*1000;
        return` The converted value is:  ${covertedValue}`;
    }
    if(typeof value ==="number"){
        return value*1000;
    }
}


const res1 = kgToGm(1000) as number
const res2 = kgToGm("1000") as string
console.log(res1);


type customError = {
    message : string;
}
try{

}catch(error){
    console.log(error)
};
