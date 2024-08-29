const {
    getLandingPage
} = require('../handler/handler')

const routes = (dir) => [
    {
        path: '/',
        method: 'GET',
        handler: getLandingPage(dir)
    }
]


module.exports = routes