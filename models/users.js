const { Schema, model } = require('mongoose');


const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        
    },
    
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
              ],
        
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thoughts'
        }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
         }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }  
)      
        
//virtual that retrieves the length of the user's friends array field on query
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;


