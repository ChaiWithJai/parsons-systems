const { DataTypes, Model } = require("sequelize");
const { db } = require("../");

const tableName = "comments";

class Comment extends Model {
    title;
    author;
    url;
    points;
}

Comment.init(
    {
        comment: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
        },
    },
    { sequelize: db, tableName }
    );
    
module.exports = { Comment };
