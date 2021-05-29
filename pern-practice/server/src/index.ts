import "reflect-metadata";
import express from "express";
import "dotenv-safe/config";
import { createConnection } from "typeorm";
import path from "path";
import { Post } from "./entities/Post";

const port = 4000;

const main = async () => {
  const connection = await createConnection({
    type: "postgres",
    database: "pern",
    username: "postgres",
    password: "Passw00rd12!",
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Post],
  });



  const app = express();

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

main().catch((error) => {
  console.error(error);
});
