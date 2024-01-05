import mongoose from "mongoose";

const connectionMongoDB = async () => {
    try {
      await  mongoose.connect("mongodb+srv://mashrafiahnam:IOwrG4DoOlIGCD3G@cluster0.yhuz2xd.mongodb.net/exclusive")
    } catch (error) {
        console.log(error)
    }
}

export default connectionMongoDB