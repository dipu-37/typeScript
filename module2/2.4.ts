// Generic with interface 

{
    //
    interface Developer<T,X=null> {
        name : string;
        computer : {
            brand : string;
            model : string;
            releseYerar : number
        }
        smartWatch : T;
        bike ?: X
    }
  type EmilabWatch = {
    brand : string;
    model : string;
    display:string;
  }
    const poorDeveloper : Developer<EmilabWatch,null> ={
        name : "dipu",
        computer : {
            brand : "ASUS",
            model : "x -3442x",
            releseYerar : 2013,
        },
        smartWatch : {
            brand : "emilab",
            model: "kw66",
            display :"OLED"
        }
    }

    interface AppleWatch {
        brand : string;
        model : string;
        heartTrack: boolean;
    }

    interface bike {
        model : string;
        engeen : string
    }
    const richDeveloper : Developer<AppleWatch,bike> ={
        name : "dipu",
        computer : {
            brand : "ASUS",
            model : "x -3442x",
            releseYerar : 2013,
        },
        smartWatch : {
            brand : "apple",
            model: "kw66",
            heartTrack : true
        },
        bike:{
            model : "Yamaha",
            engeen :' 100cc'
        }
    }


    //
}