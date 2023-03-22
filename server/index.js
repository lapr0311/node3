const express = require ('express')
const morgan = require ('morgan')
const cors = require ('cors')
const traerlike = require ("./router/like-router")
const pool = require ("../server/database/db")


const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(traerlike)

app.use((err, req, res, next) => {
	return res.json({
		message:err.message
	})
})


app.listen(3000,()=>{console.log('iniciando servidor')})