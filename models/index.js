// establish relationships
const User = require('./user');
const Post= require('./post');
const Comment = require('./comment');

Post.hasMany(Comment, {
  foreignKey: 'postId'
});

Post.belongsTo(User, {
  foreignKey: 'UserId'
});

Comment.belongsTo(User, {
    foreignKey: 'UserId'
});

module.exports = { User, Post, Comment };


