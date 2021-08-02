const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./API');


router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', APIRoutes);

module.exports = router;