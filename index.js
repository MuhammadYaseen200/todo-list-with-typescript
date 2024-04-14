#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "What you want add in you Todos?",
            type: "input",
        },
        {
            name: "addMore",
            message: "Do you want to add more in your todos",
            type: "confirm",
            default: "false",
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
