 const {Router} = require ("express");
const { agregarlike , leerlike, actualizarlike, borrarPost  } = require("../controller/like-controller");



 const router = Router() 


 //ver like

 router.get("/posts",leerlike)



 //agregar

 router.post("/posts", agregarlike)


 //actualizar

 router.put("/posts/like/:id", async(req , res)=>{
const{id} = req.params

      
    try {
    await actualizarlike (id)
     res.status(200).json({
        message:"like agregado"
     })
     } catch (error) {
        res.status(500).json({
            message:error.message
        
     })
 }
 
 })



 router.delete("/posts/:id", async(req , res)=>{

    const{id} = req.params
    
          
        try {
        await borrarPost (id)
         res.status(200).json({
            message:"post eliminado"
         })
         } catch (error) {
            res.status(500).json({
                message:error.message
            
         })
        }
     })
    
 module.exports = router ;


 