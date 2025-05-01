const { command } = require("yargs");

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



// const shoppingCart={
//     name:"Eyeru",
//     price:1000,
//     items:[],
//     addItem:function(Item){
//        this.items.push(Item);
//        console.log(`${Item} added`)
//     },

    
//     getTotal:function(item){
//         let sum=0;
//        item.forEach(numberitem=>{
//         numberitem+=sum})
//         return numberitem
//     }
//    };
   
//    shoppingCart.addItem("cart");
//    shoppingCart.getTotal();