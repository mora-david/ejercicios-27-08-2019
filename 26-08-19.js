const ages = [32,33,16,40];


function sumAges(){
    const sum = ages.reduce(function(total, age){
        return total + age 
    },0)
    return sum
}


function sumAdultAges(){
    const total = ages.reduce(function(sum,age){
        if(age >= 18){
            return sum + age
        }else{
            return sum
        }
    }, 0)
    return total
}

function doubleAges (){
    const doubleAges = ages.map((age)=>{
        return age * 2
    })
    return doubleAges
}




function findFirstAdult(){
    const findAdult = ages.find((age) => {
        return age  >= 18
    })
    return findAdult
}


const users = [
    {name: "erik", age: 15},
    {name: "raul", age: 55},
    {name: "jose", age: 28}
]

function getObjectsAdults(){
    const adultUsers = users.filter((user)=>{
        return user.age >= 18
    })
    return adultUsers
}


function doubleUsersAges(){
    const double = users.map(user =>{
        tempUser = Object.assign({}, user);
        tempUser.age =user.age*2
        return tempUser
    })
    console.log(double)
    console.log(users)
}




//console.log(sumAges())
console.log(sumAdultAges())
console.log(doubleAges())
console.log(findFirstAdult())
console.log(getObjectsAdults())
doubleUsersAges()