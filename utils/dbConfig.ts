import mongoose, { connect } from "mongoose";
import env from "dotenv";

env.config();

const URL: string = process.env.DATABASE_URL!;

export const dbConfig = () => {
  try {
    return connect(URL)
      .then(() => {
        console.log("database connected...");
      })
      .catch(() => console.error());
  } catch (error) {
    return error;
  }
};