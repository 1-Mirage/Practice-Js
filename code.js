const God1={
    name:"Ram",
    age:42,
    yuga:"Treta"
};

const God2={
    name:"Krishna",
    age:31,
    yuga:"Dwapar"
};


function comp(obj1,obj2)
{
    if(obj1.age>obj2.age)
    return obj1.name;
    return obj2.name;
}

console.log(comp(God1,God2));


