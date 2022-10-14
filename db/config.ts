import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN ?? '');
        console.log('Database online')
    } catch (error:any) {
        throw new Error(error.toString());
    }
}