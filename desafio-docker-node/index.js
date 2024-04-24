
const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql')

app.get('/hello', (_, res) => {
  res.send('<h1>Oi!</h2>')
})

app.get('/', (_, res) => {
  const connection = mysql.createConnection(config)
  var sql = `INSERT INTO people(name) values ('Claudio')`
  connection.query(sql)
  var texto = '<h1>Full Cycle Rocks!</h1>'

  sql = `SELECT * FROM people`
  connection.query(sql, function (err, result, _){
    if (err)throw err
    texto += '\n<ul>'
    for (let i = 0;i < result.length; i++){
      texto += `\n\t<li>${result[i]['name']}</li>`
    }
    texto += '\n</ul>'
    res.send(texto)
  })

  connection.end()
})

app.listen(port,() => {
  console.log('Rodando na porta ' + port)
})


