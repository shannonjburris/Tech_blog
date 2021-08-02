// establish relationships
const User = require('./user');
const Post= require('./post');
const Comment = require('./comment');

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_Id'
});

module.exports = { User, Post, Comment };


