const Hapi = require('@hapi/hapi')


const run = async () => {



    const server = Hapi.server({
        host: '0.0.0.0',
        port: process.env.PORT || 3000
    })


    server.route([
        {
            path: '/',
            method: 'GET',
            handler: (req, h) => {
                return h.response('Hewwo').code(200)
            }
        },
        {
            path: '/bakwan',
            method: 'GET',
            handler: (req, h) => {
                return h.response('bakwan jagung').code(200)
            }
        }
    ])


    await server.start()
    console.log(`Server started on http://localhost:3000`)

    
}

run()