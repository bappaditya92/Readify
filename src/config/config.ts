import { config as conf } from "dotenv";
conf();
const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
  env: process.env.NODE_DEV,
  jwtSecret: process.env.JWT_SECTRET,
};
export const config = Object.freeze(_config);
