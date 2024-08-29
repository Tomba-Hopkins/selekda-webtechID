const path = require('path')

const getLandingPage = (dir) => (req, h) => {
    return h.file(path.join(dir, 'public' , 'views', 'index.html'))
}


module.exports = {
    getLandingPage,
}