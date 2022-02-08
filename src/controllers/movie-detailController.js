const controller = {}

controller.moviedetail = (req, res) => {
    res.render('../views/movie-detail.ejs');
}

module.exports = controller