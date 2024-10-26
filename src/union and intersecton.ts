type noobdeveloper = {
    name: string;
}

type juniorDeveloper = noobdeveloper & {
    //name: string;
    expertise: string;
    experience: number;
}

const newdeveloper: noobdeveloper | juniorDeveloper = {
    name: "dipu",
    experience: 1,
    expertise: "js"

};