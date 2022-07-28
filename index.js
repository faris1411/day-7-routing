const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// Routes
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/add-project', (req, res) => {
  res.render('project-form')
})
app.post('/add-project', (req, res) => {
  let data = req.body
  console.log(data)
  res.redirect('/')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})