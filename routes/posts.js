const express = require('express');
const router = express.Router();

const Post = require('../models/Post');
// get all items
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
        }catch(err){
            res.json({message:err});
        }
});
// submit a post
router.post('/', async (req, res) =>{
  //  console.log(req.body);

   const post = new Post({
       title: req.body.title,
       description: req.body.description
   });

   try{
   const savePost = await post.save();
   res.json(savePost);
   }catch(err){
       res.json({message:err});
   }
});

// Get a specific post
router.get('/:postId', async (req, res) => {
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
 }catch(err){
    res.json({message:err});
}
});


// delete an entry new change now
router.delete('/:postId', async (req, res) => {
    try{
      const removedPost = await Post.remove({_id: req.params.postId});
      res.json(removedPost);
   }catch(err){
      res.json({message:err});
  }
  });

// update an entry
router.patch('/:postId', async (req, res) => {
    try{
      const updatedPost = await Post.updateOne({_id: req.params.postId},
        { $set: {title: req.body.title,
            description: req.body.description
        }});
      res.json(removedPost);
   }catch(err){
      res.json({message:err});
  }
  });

module.exports = router;
