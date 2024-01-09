import mongoose, { connect } from "mongoose";
import env from "dotenv";

env.config();

const URL: string = process.env.PORT!;

export const dbConfig = () => {
  try {
    return connect(URL)
      .then(() => {
        console.log("database connected...");
      })
      .catch((err) => console.error());
  } catch (error) {
    return error;
  }
};