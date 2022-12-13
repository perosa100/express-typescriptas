import { ConnectionOptions } from "typeorm";
import { User, Post, Comment } from "../models";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "perosa2909",
  database: process.env.POSTGRES_DB || "testeteste",
  entities: [User, Post, Comment],
  synchronize: true,
};

export default config;
