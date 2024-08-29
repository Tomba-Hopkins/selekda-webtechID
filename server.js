const Hapi = require('@hapi/hapi')


const run = () => {



    const server = Hapi.server({
        host: 'localhost',
        port: 5000
    })


    server.route({
        path: '/',
        method: 'GET',
        handler: (req, h) => {
            return h.response('Hewwo').code(200)
        }
    })


    server.start()
    console.log(`Server started on http://localhost:5000`)

    
}

run()