const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send("hello world")
})

app.get('/test1', (req, res) => {
  res.send("this is test1")
  console.log('request: ', req)
  console.log('response: ', res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})