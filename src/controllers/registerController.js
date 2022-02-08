const controller = {}

controller.register = (req, res) => {
    res.render('../views/register.ejs');
}

module.exports = controller