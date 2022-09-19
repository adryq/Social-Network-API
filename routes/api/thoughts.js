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

// /api/thoughts

// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id