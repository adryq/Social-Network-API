const router = require('express').Router();

// Set up GET all and POST
router
  .route('/')
  .get()
  .post();

// Set up GET one, PUT, and DELETE 
router
  .route('/:id')
  .get()
  .put()
  .delete();

module.exports = router;

// /api/users

// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// example data
// {
  // "username": "lernantino",
  // "email": "lernantino@gmail.com"
// }
// PUT to update a user by its _id

// DELETE to remove user by its _id

