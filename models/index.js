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
// check these?
Comment.belongsTo(Post, {
  foreignKey: 'postId'
})
// check these?
User.hasMany( comment, {
  foreignKey: 'commentId'
})

module.exports = { User, Post, Comment };


