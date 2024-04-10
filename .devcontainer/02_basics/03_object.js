// singleton 
//object.creat 
//object literal 

const mySym = Symbol("key1")

const JSuser = {
    name : "siya",
    "fullname" : "siya jadhao",
    [mySym] : "mykey1",
    age : 13,
    location : "amravati",
    email : "siyajadhao@gmail.com",
    isLoggedIn : false,
    lastLogInDays : ["monday" , "sunday" ]
}

//console.log(JSuser.email);
//console.log(JSuser["email"]);
//console.log(JSuser["fullname"]);
//console.log(JSuser[mySym]);

JSuser.email = "siyajadhao@chatgpt.com"
//Object.freeze(JSuser)
//JSuser.email = "siyajadhao@microsoft.com"
 
//console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user ");
}

JSuser.greeting2 = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greeting2());




console.log(JSuser.greeting);



