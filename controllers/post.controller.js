
const Post = require('../models/posts')
const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

const getAllPosts = async (req, res) => {
    try {
      // Fetch all posts from the database
      const posts = await Post.find();
      
      // Send the list of posts as a response
      res.status(200).json(posts);
    } catch (error) {
      // Send an error response if something goes wrong
      res.status(500).json({ message: error.message });
    }
  };

  const updatePost = async (req, res) => {
    try {
      const { id } = req.params;
  
      const post = await Post.findByIdAndUpdate(id, req.body);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      const updatedPost = await Post.findById(id);
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const deletePost = async (req, res) => {
    try {
      const { id } = req.params;
  
      const post = await Post.findByIdAndDelete(id);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    createPost, getAllPosts, updatePost, deletePost
}

