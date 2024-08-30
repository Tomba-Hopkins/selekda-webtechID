const {
    getLandingPage
} = require('../handler/handler')
const path = require('path')

const routes = (dir) => [
    {
        method: 'GET', 
        path: '/',
        handler: getLandingPage(dir)
    },
    {
        method: 'GET',
        path: '/img/{file*}',
        handler: {
            directory: {
                path: path.join(dir, 'public', 'assets', 'img')
            }
        }
    },
    {
        method: 'GET',
        path: '/style/{file*}',
        handler: {
            directory: {
                path: path.join(dir, 'public', 'assets', 'style')
            }
        }
    },
    {
        method: 'GET',
        path: '/script/{file*}',
        handler: {
            directory: {
                path: path.join(dir, 'public', 'assets', 'script')

            }
        }
    },
]


module.exports = routes