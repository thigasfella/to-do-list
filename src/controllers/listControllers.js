const { getAllList } = require("../models/listModel")

const listController = {
    //GET /
    index: (req, res) => {
        const tasks = getAllList()
        res.render('index', {tasks})
    },
    
}

module.exports = listController