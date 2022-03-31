const express = require('express')
const app = express()
// const { append } = require('express/lib/response')
const path = require('path')
const PORT = process.env.PORT || 5000

// Serving Static Assets
/* https://expressjs.com/en/starter/static-files.html */
app.use(express.static('public'))
app.use(express.static('views'))
app.use('/static', express.static(path.join(__dirname, '/public/stylesheets')))
app.use('/static', express.static(path.join(__dirname, '/public/src')))
app.use('/static', express.static(path.join(__dirname, '/views')))



app.get('/', (req, res) => {
    // res.send('Hello World!')
    // res.sendFile('./views/pages/index.html')
    res.sendFile('./views/pages/index.html', { root: __dirname });
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))