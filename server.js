require('dotenv').config();

const express=require('express')
const path=require('path')
const infoRouter=require('./src/routes/infoRoutes')

const app=express()
const port=process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.render('index', {title: 'project to show info'})
})

app.listen(PORT, () => {
    console.log(`Server is running on localhost{$PORT}`)
})
