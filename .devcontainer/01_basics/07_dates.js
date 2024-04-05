let MyDate = new Date("2024-04-5")
//onsole.log(MyDate.toDateString());
//console.log(MyDate.toLocaleString());

let MyTimeStamp = Date.now()
//console.log(MyTimeStamp);
//console.log(MyDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

//console.log(newDate.getHours());
//console.log(newDate.getMonth());
//console.log(newDate.getDay());


//`${(newDate.getDay)and the time }`

newDate.toLocaleDateString('default',{
    weekday: "long"
})










