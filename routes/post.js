const { create,getPost,deletepost,updatepost} = require("../controllers/post")
const {veryfyUser} = require("../utils/veryfyUser")


const router = require("express").Router()


router.post('/create', veryfyUser, create)
router.get('/getpost', getPost)
router.delete('/deletepost/:postId/:userId', veryfyUser, deletepost)
router.put('/updatepost/:postId/:userId', veryfyUser, updatepost)
module.exports = router