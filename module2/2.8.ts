
{
    // promised in ts

    type Todo = {
        id: number;
        userId: number;
        title : string;

    }

    const getTodo = async (): Promise<Todo>=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")

        const data =await response.json();
        // console.log(data)
        return data;
    }

    getTodo();

   type something = {something : string}

    const createPromise = (): Promise<something>=>{
        return new Promise<something> ((resolve, reject)=>{
            const data : something = {something:'something'}
            if(data){
                resolve(data);
            }else{
                reject("faild to load data")
            }
        });
    };

    // calling create promise function
    const showData = async () :Promise<something>=>{
        const data:something = await createPromise();
         return data; 
        // console.log(data);
    }






    //
}