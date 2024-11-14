{
    // interface :
    // tode :

    type user1 = {
        name: string,
        age: number;
    };

    interface user2 {
        name: string;
        age: number;
    }

    type usserwithRole1 = user1 & { role: string };

    interface usserwithRole2 extends user2 {
        role: string;
    }
    const user1: usserwithRole2 = {
        name: "dipu",
        age: 200,
        role: "manager",
    }

    // type alis 
    type rollNumber = number



    // const user1 : user2 = {
    //     name : "persion",
    //     age : 200,
    // };

    type roll1 = number[];

    interface roll2 {
        [index: number]: number
    }

    const rollNumber: roll1 = [1, 4, 6];

    type add1 = (num1: number, num2: number)=> number;

    interface add2{
        (num1: number, num2 : number): number
    }

    const add: add1 = (num1, num2) => num1 + num2


    //
}


// 1. we can use interface and alis for object
// 2. interface ---> extends
// 3. alis --------> &