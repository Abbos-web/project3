let person={
    name:"abbos",
    age:24,
    jobs:"programmer",

    hobbies:{
        hobbiOne:"music",
        hobbiTwo:"play football",
        hobbiThree:"listening music"
    }
};

const jsonFile=JSON.stringify(person);
const obj=JSON.parse(jsonFile);
obj.nick="pro";

console.log(person);
console.log(jsonFile);
console.log(obj);