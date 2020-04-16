const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const SELECT_ALL_USER_QUERY = 'SELECT * FROM users'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'PickMe'
})

connection.connect(err => {
    if(err) {
        return err;
    }
})

app.use(cors())

app.get('/', (req, res) =>{
    res.send('to see users go to localhost:4000/user')
})

app.get('/user', (req, res) => {
    connection.query(SELECT_ALL_USER_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
})

app.get('/user/add', (req, res) => {
    const{ first, last, email } = req.query
    const INSERT_USER_QUERY = `INSERT INTO users(first, last, email) VALUES('${first}', '${last}', '${email}')`
    connection.query(INSERT_USER_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('User added successfully')
        }
    })
})


app.listen(4000, () => {
    console.log('Server is running on port 4000')
})