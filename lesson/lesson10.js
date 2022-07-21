const user = {
    name: 'Shaxzod',
    surName: 'Adams',
    age: 15,
    isMarried: false,
    scores: [2,2,2,2,3],
    passport: {
        serries: 'AC',
        number: 232134124
    },
    fullName: () => {
        return user.name + ' ' + user.surName
    } 
}

let user_school = {
    number: 35,
    adress: 'dinamo',
    director: 'umida shodiyevna' 
}

let a = Object.assign(user, user_school)
let b = Object.values(a)
let c = Object.keys(a)
let d = b.concat(c)

let types = {
    number: [d.filter(item => typeof(item) == "number")],
    string: [d.filter(item => typeof(item) == "string")],
    object: [d.filter(item => typeof(item) == "object")],
    boolean: [d.filter(item => typeof(item) == "boolean")]
}