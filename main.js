const Hapi = require('@hapi/hapi')
const routes  = require('./routes/routes')

const run = async () => {
    
    const server = Hapi.server({
        // host: 'localhost',
        host: '0.0.0.0',
        port: process.env.PORT || 3000
    })
    
    await server.register(require('@hapi/inert'))
    
    // server.route(routes(__dirname))
    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (req, h) => {
    //         return h.response('TEs ').code(200)
    //     }
    // })


    server.route([
        {
            method: 'GET', 
            path: '/',
            handler: getLandingPage(__dirname)
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
    ])


    await server.start()
    console.log(`Server started on ${server.info.uri}`)

    
}

run()