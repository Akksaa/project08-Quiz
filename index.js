#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let header = "\n<<<<<<< TYPESCRIPT QUIZ >>>>>>>\n";
console.log(chalk.magentaBright(header));
let score = 0;
let mcqs;
while (true) {
    mcqs = await inquirer.prompt([{
            name: "q1",
            type: "list",
            message: "Q1: What is Typescript?",
            choices: [
                "1. Typescript is a subset of JavaScript",
                "2. Typescript is a statically typed superset of JavaScript",
                "3. Typescript is a dynamically typed superset of JavaScript"
            ]
        },
        {
            name: "q2",
            type: "list",
            message: "Q2: Which of the following Statement is True?",
            choices: [
                "1. Typescript has static type checking as well as JavaScript",
                "2. Typescript and JavaScript, Both supports interfaces and classes",
                "3. Typescript has static type checking while JavaScript has dynamic type checking"
            ]
        },
        {
            name: "q3",
            type: "list",
            message: "Q3: How do you declare a variable in Typescript?",
            choices: [
                "1. By using `const` and `let` keywords",
                "2. By using `var` keyword ",
                "3. Both 1 and 2"
            ]
        },
        {
            name: "q4",
            type: "list",
            message: "Q4: What is the Syntax of Interfaces in Typescript?",
            choices: [
                "1. interface Person { name: string }",
                "2. interface Person = { name: string }",
                "3. interface Person : { name: string }"
            ]
        },
        {
            name: "q5",
            type: "list",
            message: "Q5: What are the anonymous type in Typescript?",
            choices: [
                "1. type with a name",
                "2. type with multiple names",
                "3. type with no name"
            ]
        },
        {
            name: "q6",
            type: "list",
            message: "Q6: Why do we use classes in Typescript?",
            choices: [
                "1. Classes allow us to create structure for Arrays and Objects",
                "2. Classes allow us to create blueprint for Objects",
                "3. Classes allow us to declare various variables"
            ]
        },
        {
            name: "q7",
            type: "list",
            message: "Q7: What does a interface mainly defines in Typescript?",
            choices: [
                "1. It defines arrays and tuples",
                "2. It defines object shapes and contracts",
                "3. It defines complex types"
            ]
        },
        {
            name: "q8",
            type: "list",
            message: "Q8: How can you access a particular element in an Array?",
            choices: [
                "1. By using square brackets `[]`",
                "2. By its length",
                "3. By its index number"
            ]
        },
        {
            name: "q9",
            type: "list",
            message: "Q9: Which of the following operator is not used to clone an Array?",
            choices: [
                "1. slice()",
                "2. shift()",
                "3. spread operator"
            ]
        },
        {
            name: "q10",
            type: "list",
            message: "Q10: For What, JSON is commonly used?",
            choices: [
                "1. For APIs and Config files",
                "2. For creating modules",
                "3. For Hoisting"
            ]
        }
    ]);
    if (mcqs.q1 == "2. Typescript is a statically typed superset of JavaScript") {
        score += 1;
    }
    if (mcqs.q2 == "3. Typescript has static type checking while JavaScript has dynamic type checking") {
        score += 1;
    }
    if (mcqs.q3 == "3. Both 1 and 2") {
        score += 1;
    }
    if (mcqs.q4 == "1. interface Person { name: string }") {
        score += 1;
    }
    if (mcqs.q5 == "3. type with no name") {
        score += 1;
    }
    if (mcqs.q6 == "2. Classes allow us to create blueprint for Objects") {
        score += 1;
    }
    if (mcqs.q7 == "2. It defines object shapes and contracts") {
        score += 1;
    }
    if (mcqs.q8 == "3. By its index number") {
        score += 1;
    }
    if (mcqs.q9 == "2. shift()") {
        score += 1;
    }
    if (mcqs.q10 == "1. For APIs and Config files") {
        score += 1;
    }
    console.log(chalk.greenBright(`\nYour Score is ${score}/10\n`));
    if (score <= 0) {
        console.log(chalk.redBright("Try Again!!\nYou Extremely Need To Learn Typescript!!"));
    }
    else if (score <= 3) {
        console.log(chalk.yellowBright("Poor Performance!\nKeep Learning Typescript!"));
    }
    else if (score <= 6) {
        console.log(chalk.blueBright(`Good Performance!\nKeep Practicing Typescript To Enhance Your Skills Further!`));
    }
    else if (score <= 9) {
        console.log(chalk.cyanBright(`Excellent Performance!!\nKeep Your Efforts Up To Get One Step Ahead!`));
    }
    else if (score == 10) {
        console.log(chalk.greenBright(`Congratulations! You Passed This Quiz Successfully!!`));
    }
    break;
}
