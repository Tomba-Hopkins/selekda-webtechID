const {
    getLandingPage
} = require('../handler/handler')

const routes = (dir) => [
    {
        path: '/',
        method: 'GET',
        handler: getLandingPage(dir)
    },
    {
        method: 'GET',
        path: '/img/{file*}',
        handler: {
            directory: {
                path: './public/assets/img'
            }
        }
    },
    {
        method: 'GET',
        path: '/style/{file*}',
        handler: {
            directory: {
                path: './public/assets/style'
            }
        }
    },
    {
        method: 'GET',
        path: '/script/{file*}',
        handler: {
            directory: {
                path: './public/assets/script'
            }
        }
    },
]


module.exports = routes