const { deleteTask, saveTask, createTask } = require("../models/listModel")

const adminController = {
    
    delete: (req, res) => {
        const id = Number(req.params.id)
        deleteTask(id)
        res.redirect('/');
    },

    admin: (req, res) => {
        res.render('admin')
    },

    save: (req, res) =>{
        const {title, content} = req.body

        const newTask = createTask(title, content)
        saveTask(newTask)

        res.redirect('/')
    }
}

module.exports = adminController