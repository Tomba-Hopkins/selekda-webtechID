const Hapi = require('@hapi/hapi')
const path = require('path')

const run = async () => {
    
    const server = Hapi.server({
        host: 'localhost',
        // host: '0.0.0.0',
        port: process.env.PORT || 3000
    })
    
    await server.register(require('@hapi/inert'))


    server.route([
        {
            method: 'GET', 
            path: '/',
            handler: (req, h) => {
                return h.file(path.join(__dirname, 'public' , 'views', 'index.html'))
            }
        },
        {
            method: 'GET',
            path: '/head-football',
            handler: (req, h) => {
                return h.file(path.join(__dirname, 'public', 'views', 'head.html'))
            }
        },
        {
            method: 'GET',
            path: '/dsgn',
            handler: (req, h) => {
                return h.file(path.join(__dirname, 'public', 'views', 'dsgn.html'))
            }
        },
        {
            method: 'GET',
            path: '/img/{file*}',
            handler: {
                directory: {
                    path: path.join(__dirname, 'public', 'assets', 'img')
                }
            }
        },
        {
            method: 'GET',
            path: '/style/{file*}',
            handler: {
                directory: {
                    path: path.join(__dirname, 'public', 'assets', 'style')
                }
            }
        },
        {
            method: 'GET',
            path: '/script/{file*}',
            handler: {
                directory: {
                    path: path.join(__dirname, 'public', 'assets', 'script')
    
                }
            }
        },
        {
            method: 'GET',
            path: '/blog',
            handler: (req, h) => {
                return h.response('Blog Page').code(200)
            }
        },
        {
            method: 'GET',
            path: '/portfolio',
            handler: (req, h) => {
                return h.response('Portfolio Page').code(200)
            }
        },
        {
            method: 'GET',
            path: '/admin',
            handler: (req, h) => {
                return h.response('Admin Page').code(200)
            }
        },
    ])


    await server.start()
    console.log(`Server started on ${server.info.uri}`)

    
}

run()