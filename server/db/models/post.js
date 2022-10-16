const { DataTypes, Model } = require("sequelize");
const { db } = require("../");
const { Comment } = require("./comment");


const tableName = "posts";

class Post extends Model {
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false,
      },
  },
  { sequelize: db, tableName }
);

Post.prototype.create = async (
  post
) => {
  try {
    console.log('model method called')
    return Post.create(post);
  } catch (err) {
    throw new Error(`Error:  ${err.message}`);
  }
};

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = { Post };
