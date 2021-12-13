

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'));



app.get('/', (req, res)=>{
    res.render('index')
}) 

const userRouter = require('./routes/users')

app.use('/users', userRouter)
app.listen(3000)
