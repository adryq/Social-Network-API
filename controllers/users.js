const { User } = require('../models');

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
    .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.userId })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData =>{
        if (!dbUserData) {
            res.status(404).json({message: 'sorry, no user found with this id'});
            return 
        } res.json(dbUserData);
        
    } )
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.userId }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'sorry, no user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // delete User
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

 
  // add friend
  addFriend({params, body}, res) {
    User.findOneAndUpdate(
        {_id: params.userId},
         {$push: {friends: params.friendId}}, 
         {new: true, runValidators: true})
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message: 'sorry, no user found with this id!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));

 
    
},
//delete  a friend from a user's friend list
deleteFriend({params}, res) {
    User.findOneAndUpdate(
        {_id: params.userId}, 
        {$pull: {friends: params.friendId}}, 
        {new: true, runValidators: true})
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message: 'sorry, no user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));



  }

};



module.exports = userController;
