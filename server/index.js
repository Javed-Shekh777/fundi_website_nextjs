require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = require("./src/app");
const dbConnection = require("./src/config/db");

dbConnection()
  .then(() => {
    app.listen(PORT, (error) => {
      if (error) {
        console.log(`Server is not running ${error}`);
        throw new Error(error);
      }
      console.log(`SERVER IS RUNNING ON HOST : http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Something went wrong :\n${error}`);
  });
