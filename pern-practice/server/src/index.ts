import express from "express";
import "dotenv-safe/config";

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
