{
    // funtion with generic 
    const createArray = (param : string): string[]=>{
        return [param]
    }
    const res1 = createArray("bangladesh")

    const createArraywithGereric = <T>(param : T): T[]=>{
        return [param]
    }
    const res2 = createArraywithGereric <string> ("bangladesh");

    type user = {id: number; name : string;}

    const resGenericObj = createArraywithGereric<user>({
        id: 222,
        name : "dipu"
    })

    // tupple 
    const createArraywithTuple = <T,Q>(param1 : T,param2 : Q): [T,Q]=>{
        return [param1,param2]
    }

    const res10 = createArraywithTuple<string,number>('BanglaDesh',222)


    //
}