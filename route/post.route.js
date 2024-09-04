const express = require('express')
const router = express.Router()
const {createPost, getAllPosts, updatePost, deletePost} = require('../controllers/post.controller.js')


router.post('/post/new', createPost)
router.get('/', getAllPosts);
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
module.exports = router