{
    // interface :
    // tode :

    type user1 = {
        name: string,
        age : number;
    };

    interface user2 {
        name : string;
        age : number;
    }

    type usserwithRole1 = user1 & {role : string};

    interface usserwithRole2 extends user2 {
        role : string;
    }
    const user1 : usserwithRole2 = {
        name : "dipu",
        age : 200,
        role : "manager",
    }

    // type alis 
    type rollNumber = number

    

    // const user1 : user2 = {
    //     name : "persion",
    //     age : 200,
    // };

    type roll1 = number[];
    const rollNumber:roll1 = [1,4,6];


    //
}


// 1. we can use interface and alis for object
// 2. interface ---> extends
// 3. alis --------> &