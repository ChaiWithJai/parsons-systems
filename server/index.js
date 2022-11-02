const express = require("express");
const { db } = require("./db");
const { Post } = require("./db/models/post");
const { Comment } = require("./db/models/comment");
const cors = require("cors");


const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.get("/posts/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ where: { id }, include: Comment });
    res.send(post);
  } catch (err) {
    res.send(`Error: ${err.message}`);
  }
});

app.post("/posts", async function (req, res) {
  console.log("run post request!");
  try {
    const post = await Post.create({ title: req.body.title, author: req.body.author, url: "axios.com", points: 420 });
    res.status(201).send(post);
  } catch (err) {
    res.send(`Error: ${err.message}`);
  }
});

async function init() {
  if (require.main === module) {
    try {
      await db.sync();
      app.listen(PORT, () => {
        console.log(`Server is up and running and listening on Port:  ${PORT}`);
      });
    } catch (e) {
      console.error(`Error starting server:  `, e);
    }
  }
}

init();
