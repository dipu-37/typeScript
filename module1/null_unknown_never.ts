

const getcarSpreed = (speed : unknown) =>{
    if(typeof  speed== "number"){
        const convertedSpeed = (speed*1000)/3600;
        console.log(convertedSpeed)
    }
    if(typeof  speed== "string"){
        const [value, unit]= speed.split(" ");
        const convertedSpeed = (parseFloat( speed)*1000)/3600;
        console.log(convertedSpeed)
    }else{
        console.log('there is wrong type')
    }
}

getcarSpreed(10);
getcarSpreed("10 kmh-1");