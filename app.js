require('dotenv').config()
const express = require('express')
const hbs = require('hbs');


const app = express()


// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'yeiner uran',
        titulo: 'aprendiendo node'
    })
})


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'yeiner uran',
        titulo: 'aprendiendo node'
    })
})


app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'yeiner uran',
        titulo: 'aprendiendo node'
    })
})

app.listen(process.env.PORT)
