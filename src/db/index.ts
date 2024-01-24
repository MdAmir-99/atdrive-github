import mongoose from "mongoose";
import dotenv from "dotenv";


import {DB_NAME} from "../utils/constant";
dotenv.config();

const dbUrl: string=`${process.env.MONGODB_URI}`;

const connectDB=async () => {
    try {
        const dbInstance=await mongoose.connect(dbUrl||'');
        console.log(`DB connection established !! DB HOST: ${dbInstance.connection.host}`);
    } catch(error: any) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB;