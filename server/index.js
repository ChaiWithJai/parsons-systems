const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
