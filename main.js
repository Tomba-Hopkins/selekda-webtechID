const Hapi = require('@hapi/hapi')
const routes  = require('./routes/routes')

const run = async () => {
    
    const server = Hapi.server({
        // host: 'localhost',
        host: '0.0.0.0',
        port: process.env.PORT || 3000
    })
    
    await server.register(require('@hapi/inert'))


    server.route(routes(__dirname))


    await server.start()
    console.log(`Server started on ${server.info.uri}`)

    
}

run()