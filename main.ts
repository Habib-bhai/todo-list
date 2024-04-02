import inquirer from "inquirer";

let todos = []
let condition = true
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
    ])
    todos.push(task.addTask)
    console.log(todos)
    condition = task.addMore
}

const remove = await inquirer.prompt([{
    type:"confirm",
    name:"toRemove",
    message:"Do you wanna remove tasks from list"
}])

if(remove.toRemove == true) {
    const index = await inquirer.prompt({
        type:"number",
        name:"taskIndex",
        message:"Give the index number of the task you wanna REMOVE:"
    })
    let removed = todos.splice(index.taskIndex,1)
console.log(`${removed} is been removed from the list, NEW list is [ ${todos}]`)
}
// if(remove.toRemove == true) {
//     let removedTask =todos.pop()
//     console.log(`${removedTask} is been removed, New list is ${todos}`)
    
// }