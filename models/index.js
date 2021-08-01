// establish relationships
const User = require('./user');
const Post= require('./post');
const Comment = require('./comment');

Post.hasMany(Comments, {
  foreignKey: 
});

Post.belongsTo(User, {
  foreignKey: 
});

Comment.belongsTo(User, {
    foreignKey:
});

module.exports = { User, Gallery, Painting };


