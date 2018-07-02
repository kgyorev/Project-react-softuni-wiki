const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
    app.get('/', controllers.home.index)
    // app.get('/about', auth.isAuthenticated, controllers.home.about)

    app.get('/user/register', controllers.users.registerGet)
    app.post('/user/register', controllers.users.registerPost)
    app.get('/user/login', controllers.users.loginGet)
    app.post('/user/login', controllers.users.loginPost)
    app.get('/user/logout', controllers.users.logout)


    app.get('/article/create', controllers.article.createGet);
    app.post('/article/create', controllers.article.createPost);

    app.get('/article/details/:id', controllers.article.details);

    app.get('/article/edit/:id', controllers.article.editGet);
    app.post('/article/edit/:id', controllers.article.editPost);


    app.get('/article/lock/:id', controllers.article.lockGet);
    app.get('/article/unlock/:id', controllers.article.unLockGet);

    app.get('/article/all', controllers.article.allGet);
    app.get('/article/history/:id', controllers.article.history);


    app.all('*', (req, res) => {
        res.status(404)
        res.send('404 Not Found!')
        res.end()
    })
}
