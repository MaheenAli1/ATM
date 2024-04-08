#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 70000; //dollars
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
[
    {
       name: "pin",
       message: "enter your pin",
       type: "number"

    }
]
);
//  console.log(pinAnswer.pin);

if (pinAnswer.pin === myPin) {
    console.log("correct pin code");

   let operationAns= await inquirer.prompt(
    [
        {
            name:"operation",
            message:"please select an option",
            type:"list",
            choices:["withdraw","check balance"]
        }
    ]
    );
    console.log(operationAns);

    if(operationAns.operation==="withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount for withdraw",
                    type:"number"
                }
            ]
        );
        if (amountAns.amount > myBalance){
        console.log("Unfortunately! Insufficient balance");
 }
 else if (myBalance -= amountAns.amount){
    console.log("withdraw successfully!" + amountAns.amount);
        console.log("Your remaining balance is: "+ myBalance);
    }

 }else if (operationAns.operation==="check balance"){
        console.log("your balance is: " + myBalance);}
 }
else {
    console.log("incorrect pin code");
}
