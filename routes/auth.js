const { register,login ,loginGoogle,logout} = require("../controllers/auth")

const router = require("express").Router()

router.post("/register",register)
router.post("/login",login)
router.post("/loginGoogle",loginGoogle)
router.post('/logout', logout);
module.exports = router