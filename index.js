const express = require('express')
const app = express()
const fs = require('fs/promises')

const port = 8000

// # Routes
app.get('/', async (req, res) => {
    let html = await fs.readFile('./pages/index.html', { encoding: 'utf8' })
    
    res.send(html)
})

app.get('/about', async (req, res) => {
    let html = await fs.readFile('./pages/about.html', { encoding: 'utf8' })
    
    res.send(html)
})

app.get('/contactme', async (req, res) => {
    let html = await fs.readFile('./pages/contact-me.html', { encoding: 'utf8' })
    
    res.send(html)
})

// 404 route
app.use(async (req, res, next) => {
    let html = await fs.readFile('./pages/404.html', { encoding: 'utf8' })

    res.status(404).send(html)
})

app.listen(port, () => {
    console.log(`Express app running on port ${port}`)
})