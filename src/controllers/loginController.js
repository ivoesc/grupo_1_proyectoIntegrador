const controller = {}

controller.login = (req, res) => {
    res.render('../views/login.ejs');
}

module.exports = controller