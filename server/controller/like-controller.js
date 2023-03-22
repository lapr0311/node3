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

     const{titulo,url,descripcion,likes} =req.body
    try {
         
        const consulta  ="INSERT INTO post values (DEFAULT, $1, $2,$3,$4)"
        const values =[titulo , url , descripcion,likes]
        const resultado = await pool.query(consulta,values)
        console.log("post agregado")

       res.send("agregada informacion")

    } catch (error) {

        next(error)
        
    }
}



const actualizarlike  = async (id) => {

        
       const consulta  ="UPDATE post SET likes = likes +1 WHERE id = $1"
       const values =[id]
       const resultado = await pool.query(consulta,values)
       console.log("post  actualizado")
        console.log({resultado})
      

}



const borrarPost  = async (id) => {

        
    const consulta  ="DELETE FROM post WHERE id = $1"
    const values =[id]
    const resultado = await pool.query(consulta,values)
    console.log("post eliminado")
  
   

}


module.exports={leerlike,agregarlike, actualizarlike, borrarPost}