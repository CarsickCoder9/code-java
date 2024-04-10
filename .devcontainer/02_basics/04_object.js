//const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regularuser = {
    email : "some@gmail.com",
    fullname :{
        userfullname :{
            firstname : "siya",
            lastname : "jadhao"
        }
    }
}


//console.log(regularuser.fullname);

const Obj1 = {1 : "a" , 2 : "b" }
const Obj2 = {3 : "a" , 4 : "b" }

// const Obj3 = {Obj1 , Obj2}

//const Obj3 = Object.assign( Obj1 , Obj2)
const Obj3 = {...Obj1 , ...Obj2}

//console.log(Obj3);

//const user = [
//    {...
//    },
//    {...
//    },
//    {...
//    },
//]

//user[1].email

console.log(tinderuser);

//console.log(Object.keys(tinderuser));
//console.log(Object.values(tinderuser));
//console.log(Object.entries(tinderuser));


console.log(tinderuser.hasOwnProperty('isLoggedIn'));



