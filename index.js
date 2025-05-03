// //start
// create the first Object
// instantiate name and balance with their values
// create deposit and withdrawal methods
// calling the function
// end

const accountOne={
    name:"Eyeru",
    balance:2000,
    deposit:function(amount){
        this.balance+=amount;
        console.log(`${this.name}:has deposited${amount}. The balance is now: ${this.balance} `);
    },
    withdraw:function(amount){
        if(amount<=this.balance){
            this.balance-=amount;
            console.log(`${this.name}: withdraw money with ${amount}. current balance is ${this.balance}`);
        }
        else{
            console.log(`${this.name}: cannot withdraw money with ${amount}. current balance is ${this.balance}`);
        
        }
    }
};
const accountTwo={
    name:"Semhal",
    balance:5000,
    deposit:function(amount){
        this.balance+=amount;
        console.log(`${this.name}:has deposited${amount}. The balance is now: ${this.balance} `);
    },
    withdraw:function(amount){
        if(amount<=this.balance){
            this.balance-=amount;
            console.log(`${this.name}: withdraw money with ${amount}. current balance is ${this.balance}`);
        }
        else{
            console.log(`${this.name}: cannot withdraw money with ${amount}. current balance is ${this.balance}`);
        
        }
    }
};
accountOne.deposit(300)
accountOne.withdraw(200)
accountTwo.deposit(100)
accountTwo.withdraw(1000)
//create an object call tasklist
// create addtask function and use add item by using push
// makingsure if the task is finished by comparing the ByteLength
// working the list by iterating

const taskList={
 tasks:[],
 addTask:function(task){
    this.tasks.push(task);
    console.log(`${task} added`)
 },
 completeTask:function(tasktoberemove){
   const firstlength=this.tasks.length;
   this.tasks=this.tasks.filter(task=>task !==tasktoberemove);
    if(this.tasks.length<firstlength){
        console.log(`${tasktoberemove}`)
    }
    else{
        console.log(`${tasktoberemove} not found`)
    }
 },
 listTask:function(){
    if(this.tasks.length===0){
        console.log("NO task")
    }
    else{
        this.tasks.forEach((task, index)=>{
            console.log(`${index +1}. $${task}`);
        });
    }

 }
};
taskList.addTask("reading articles");
taskList.addTask("play with friends");
taskList.addTask("writing novels");
taskList.addTask("coding");
taskList.addTask("swimming");
taskList.listTask();
taskList.completeTask("coding");
taskList.listTask();
taskList.completeTask("listen to music")
taskList.completeTask("writing novels");
taskList.listTask();
//create object called student1
// give properties name and Scores
// create method called getaverage and work the average first by finding the sum
// create the method called haspassed 
// finding the passed students using getaverage method
//call the functions
const student1={
    name:"Eyeru",
    Scores:[1,2,3],
    getaverage:function(){
        let sum=0;
      
        for(let i=0; i < student1.Scores.length; i++){
            sum+=this.Scores[i];
        }
        return sum/ this.Scores.length;
    },
    hasPassed:function(){
     if(this.getaverage()>50){
        return true;
     }
    }

}
console.log(student1.getaverage())
//create object called shoppingcart
// crate additem function and add item using push
//finding the total sum by iteraritng
// call the function

const shoppingCart={
    items:[],
    addItem:function(Item){
       this.items.push(Item);
       
    },
getTotal:function(){
     let sum=0;
    for(let i=0; i<this.items.length; i++){
    sum+=this.items[i].price;
    }
    return sum;
}
}
   
shoppingCart.addItem({name:"cart",price:21});
shoppingCart.addItem({name:"mango",price:10});
shoppingCart.addItem({name:"mango",price:11});
console.log(shoppingCart.getTotal())
//crate function constructor called Movie 
// give the attributies title, year and rating
// create is clasic and recommend functions
// create an objects
// call the functions
function Movie(title, year, rating) {
this.title = title;
this.year = year;
this.rating = rating;
this.isClassic = function(){
return this.year<2000;
};
this.recommend =function(){
if(this.rating > 8){
return "Highly recommended!";
}
else{
return "Consider other options";
 }
 };
}
const movieone = new Movie("Becoming",1990, 4);
const movietwo = new Movie("Feminist", 2001, 4);
const moviethree = new Movie("TrevorNoah", 1945, 9);
console.log(`${movieone.title} is classic movie: ${movieone.isClassic()} ${movieone.recommend()}`);

console.log(`${movietwo.title} is classic: ${movietwo.isClassic()} ${movietwo.recommend()}`);

console.log(` ${moviethree.title} is classic: ${moviethree.isClassic()} ${moviethree.recommend()}`);
