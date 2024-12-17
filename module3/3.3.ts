{
// type guard 
type Alphaneumeric = string | number;
const add =(
params1:Alphaneumeric,
params2: Alphaneumeric
): Alphaneumeric =>{
    if(typeof params1 === "number" && typeof params2 ==="number"){
        return params1+params2;
    }else{
        return params1.toString()+params2.toString();
    }
}

const result = add("2","3");
console.log(result);

// in guard
type NormalUser = {
    name : string;
}
type AdminUser = {
    name: string;
    role: "admin"
}

const getUser = (user: NormalUser|AdminUser)=>{
    if('role' in user ){
        console.log(`my name is ${user.name} my role is ${user.role}`)
    }else{
        console.log(`my name is ${user.name} `)
    }
}

const normalUser : NormalUser ={
    name : "dipu"
}
const adminUser: AdminUser ={
    name: "razibul",
    role: "admin",
};

getUser(normalUser);

}


// const function_name = (parameters):return_type=>{
// // function body
// }