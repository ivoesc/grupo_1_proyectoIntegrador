const controller = {}

controller.index = (req, res) => {
    res.render('../views/home.ejs');
}

module.exports = controller