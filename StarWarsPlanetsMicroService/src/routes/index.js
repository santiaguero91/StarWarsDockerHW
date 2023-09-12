const {Router} = require('express');
const controllers = require("../controllers")

const router = Router();
router.get("/",controllers.createPlanets)
router.post("/",controllers.createPlanets)

module.exports = router;