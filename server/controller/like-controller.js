const pool = require ("../database/db");


const leerlike  = async (req , res, next) => {
    try {
        const leerlike = await pool.query('SELECT * FROM post')

        res.json(leerlike.rows)

    } catch (error) {

        next(error)
        
    }
}



const agregarlike  = async (req ,res, next) => {

     const{titulo,url,descripcion} =req.body
    try {
         
        const consulta  ="INSERT INTO post values (DEFAULT, $1, $2,$3,0)"
        const values =[titulo , url , descripcion]
        const resultado = await pool.query(consulta,values)
        console.log("post agregado")

       res.send("agregada informacion")

    } catch (error) {

        next(error)
        
    }
}

module.exports={leerlike,agregarlike}