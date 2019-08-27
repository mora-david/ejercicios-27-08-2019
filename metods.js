import { users } from "./users.js"


function fillTable(array){
    var tabla =  document.getElementById("table-body")
    var data = "";
    array.forEach(element =>{
        data+=
        `<thead>
                <tr>
                    <th scope="col">${element.name}</th>
                    <th scope="col">${element.age}</th>
                    <th scope="col">${element.gender}</th>
                </tr>
            </thead>`
    })
tabla.innerHTML = data
}


function getGender (genero){
    var gMale = users.filter(valor =>{
        return valor.gender == genero
    })
    fillTable(gMale)
}


function getAges (age1){

    if (age1 == "adult") {
        var agest = users.filter(valor=>{
            return valor.age >=18
        })
    }
    else{var agest = users.filter(valor=>{
        return valor.age < 18
    })
}
fillTable(agest);
}


function filter(){
    const filtr = document.getElementById("filterSelect").value
    switch (filtr){
    case "all":
        fillTable(users)
        break;
        case "men":
        getGender("Male")
        break;
        case "women":
        getGender("Female")
        break;
        case "adult":
        getAges("adult")
        break;
        case "minor":
        getAges("minor")
        break;
}
}


// // Mandamos a llamar el método filter cuando el select con el id filterSelect cambia de valor
document.getElementById("filterSelect").addEventListener("change", filter);