const list = []
const addTask = () => {
   newTask = process.argv[2]
   list.push(newTask)
}
addTask()
console.log(list)
