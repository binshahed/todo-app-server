const express = require('express')

const app = express()
app.use(express.json())

app.use('/todos', require('./routes'))

app.get('/', (req, res) => {
  res.send(`<p>Hello Todo</p>`)
})

app.listen(4000, () => {
  console.log('server is running')
})
