const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/posts/:id", async function (req, res) {
  try {
    const { id } = req.params;
    console.log("id is:  ", id);
    res.send(`<h1>Pablo, Picasso, Rothkos, Rilkes!</h1>`);
  } catch (err) {
    res.send(`Error: ${err.message}`);
  }
});

app.post("/posts", async function (req, res) {
  console.log("run post request!");
  try {
    res.status(201).send(`
            <h2>Yo yo yo!</h2>
            <span>${req.body.comment}</span>
        `);
  } catch (err) {
    res.send(`Error: ${err.message}`);
  }
});

async function init() {
  if (require.main === module) {
    try {
      // TODO Add DB
      app.listen(PORT, () => {
        console.log(`Server is up and running and listening on Port:  ${PORT}`);
      });
    } catch (e) {
      console.error(`Error starting server:  `, e);
    }
  }
}

init();
