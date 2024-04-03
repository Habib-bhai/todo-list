#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    const task = await inquirer.prompt([{
            name: "addTask",
            message: "What you want to do, Enter your task",
            type: "input"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you wanna add more todos",
            default: "false"
        }
    ]);
    todos.push(task.addTask);
    console.log(todos);
    condition = task.addMore;
}
console.log("\n");
const otherMethods = await inquirer.prompt([{
        type: "list",
        name: "methods",
        message: "Do you wanna perform other tasks",
        choices: ["Delete", "Read_Todo_list", "Update_task"]
    }]);
if (otherMethods.methods === "Delete") {
    console.log("\n");
    const index = await inquirer.prompt({
        type: "number",
        name: "taskIndex",
        message: "Give the index number of the task you wanna DELETE:"
    });
    let removed = todos.splice(index.taskIndex, 1);
    console.log(`\n"${removed}" is been removed from the list, NEW list is [ ${todos} ]`);
}
else if (otherMethods.methods === "Read_Todo_list") {
    console.log("\n");
    todos.forEach(elem => console.log(elem));
}
else if (otherMethods.methods === "Update_task") {
    console.log("\n");
    const index = await inquirer.prompt([{
            type: "number",
            name: "taskNumToUpdate",
            message: "Give the index number of the task you wanna Update:"
        },
        {
            type: "input",
            name: "updatedTask",
            message: "Enter the updated Task"
        }
    ]);
    todos.splice(index.taskNumToUpdate, 1);
    todos.splice(index.taskNumToUpdate, 0, index.updatedTask);
    console.log(`\nThe new list is:`);
    todos.forEach(e => console.log(e));
}
else {
    console.log("This task is not listed in app");
}
