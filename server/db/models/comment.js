const { DataTypes, Model } = require("sequelize");
const { db } = require("../");

const tableName = "comments";

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, tableName }
);

Comment.prototype.create = async (comment) => {
  try {
    return Comment.create(comment);
  } catch (err) {
    throw new Error(`Error:  ${err.message}`);
  }
};

module.exports = { Comment };
