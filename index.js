const http = require('http')
const fs = require('fs/promises')

const port = 8000

const requestListener = async (req, res) => {
    let path = req.url.slice((req.url.lastIndexOf('/')))

    try {
        switch(path) {
            case '/':
                fetchAndSend('./pages/index.html')
                break;
            case '/about':
                fetchAndSend('./pages/about.html')
                break;
            case '/contactme':
                fetchAndSend('./pages/contact-me.html')
                break;
            default:
                fetchAndSend('./pages/404.html')
                break;
        }
    } catch (e) {
        res
          .writeHead(404, {'Content-Type': 'text/html'})
          .end('<p><strong>Something went wrong...</strong></p>')
    }

    async function fetchAndSend(filePath) {
        data = await fs.readFile(filePath, { encoding: 'utf8' })
        res
          .writeHead(200, {'Content-Type': 'text/html'})
          .end(data)
    }
}
const server = http.createServer(requestListener)

server.listen(port, () => 
    console.log(`Server running on port ${port}`)
)