//  /
//  /new
//  /edit/:id
const router = require("express").Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
   // // If the user is not logged in, redirect the user to the login page
   // if (!req.session.loggedIn) {
   //   res.redirect('/login');
   // } else {
   // //   If the user is logged in, allow them to view the dashboard
     try {
       const dashboardData = await Post.findAll({ where: {user_id: req.sessions.user_id}}); 
       const dashboardPost = dashboardData.map(post => post.get({ plain: true }));
       res.render('all-posts-admin', { layout: 'dashboard', posts });
     } catch (err) {
       console.log(err);      
       res.status(500).json(err);
     }
   // }
   });



module.exports = router;