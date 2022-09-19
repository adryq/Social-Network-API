const router = require('express').Router();
const apiRoutes = require('./api'); //importing all api routes

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('😝 404 Error!');
  });

module.exports = router;