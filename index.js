const express = require('express')
const { engine } = require('express-handlebars')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', './views');

app.use('/assets', express.static(__dirname + '/views/assets'));

app.get('/', (req, res) => res.render('index', {
    title: 'AKS Workload',
    url: process.env.REMOTE_API
}))

app.use('/api/values/', require('./api/values'))

app.listen(PORT, () => console.log(`Server running on port ${PORT} for ${process.env.NODE_ENV}`))