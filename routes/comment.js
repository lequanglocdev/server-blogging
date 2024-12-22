const { createComment,likeComment,editComment,deleteComment,getComment,getPostComments} = require("../controllers/comment")
const {veryfyUser} = require("../utils/veryfyUser")


const router = require("express").Router()


router.post('/create', veryfyUser, createComment)
router.put('/likeComment/:commentId', veryfyUser, likeComment);
router.put('/editComment/:commentId', veryfyUser, editComment);
router.delete('/deleteComment/:commentId', veryfyUser, deleteComment);
router.get('/getcomment', veryfyUser, getComment);
router.get('/getPostComments/:postId', getPostComments);

module.exports = router