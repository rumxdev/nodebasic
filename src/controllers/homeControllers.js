import connection from '../configs/connectDB';

const getHomePage = (req, res) => {

    return res.render('index.ejs');

}

const getAbout = (req, res) => {
    return res.render('about.ejs');
}

module.exports = {
    getHomePage,
    getAbout
}
