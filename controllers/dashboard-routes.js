//  /
//  /new
//  /edit/:id
const router = require("express").Router();


router.get('/edit/:id', async (req, res) => {
   // If the user is not logged in, redirect the user to the login page
   if (!req.session.loggedIn) {
     res.redirect('/login');
   } else {
     // If the user is logged in, allow them to view the gallery
//      try {
//        const postData = await Post.findByPk(req.params.id, {
//          include: [
//            {
//              model: Painting,
//              attributes: [
//                'id',
//                'title',
//                'artist',
//                'exhibition_date',
//                'filename',
//                'description',
//              ],
//            },
//          ],
//        });
//        const gallery = dbGalleryData.get({ plain: true });
//        res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//      } catch (err) {
//        console.log(err);
//        res.status(500).json(err);
//      }
//    }
//  });



module.exports = router;