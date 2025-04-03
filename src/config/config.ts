import { config as conf } from "dotenv";
conf();
const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
  env: process.env.NODE_DEV,
};
export const config = Object.freeze(_config);
