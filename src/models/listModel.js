let tasks = []

const listModel = {
    getAllList(){
        return tasks
    },

    getTasksById(id){
        return tasks.find(task => task.id == id)
    },

    createTask(title, content){
        const task = {
            id: Math.round(Math.random() * 10000),
            title: title,
            content: content
        }
        return task
    },
    saveTask(task){
        tasks.push(task)
    },

    deleteTask(id){
        tasks = tasks.filter(task => task.id !== id)
    }
}

module.exports = listModel