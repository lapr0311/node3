 const {Router} = require ("express");
const { agregarlike , leerlike } = require("../controller/like-controller");



 const router = Router() 


 //ver like

 router.get("/posts",leerlike)



 //agregar

 router.post("/posts", agregarlike)

 module.exports = router ;


 