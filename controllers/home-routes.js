const router = require("express").Router();
const { Comment, Post, User }  = require("../models")


// get all posts for homepage
router.get("/", async (req, res) => {
   try {
      const dbBlogData = await Post.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
  
      const post = dbBlogData.map((post) =>
        post.get({ plain: true })
      );
  
      res.render('./layouts/main', {
        post,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });




module.exports = router;