const postRouter = require('express').Router();


postRouter.get('/', async (req, res) => {

});

postRouter.get('/', async (req, res) => {

});

postRouter.post('/addcomment', async (req, res) => {

});

postRouter.put('/addcomment', async (req, res) => {

});

postRouter.delete('/:id', async (req, res) => {
        try {
          const postData = await Post.destroy({
            where: {
              id: req.params.id,
              user_id: req.session.user_id,
            },
          });
      
          if (!postData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
          }
      
          res.status(200).json(prostData);
        } catch (err) {
          res.status(500).json(err);
        }
      });

module.exports = postRouter;


  
  module.exports = router;
  


