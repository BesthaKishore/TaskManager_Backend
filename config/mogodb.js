// import mongoose from "mongoose";

// const ConnectDb = async () => {
//   try {
//     console.log("🔁 Connecting to MongoDB...");
//     await mongoose.connect(process.env.MONGODB_URL);

//     mongoose.connection.on("connected", () => {
//       console.log("✅ MongoDB connected successfully");
//     });

//     mongoose.connection.on("error", (err) => {
//       console.error("❌ MongoDB connection error:", err);
//     });
//   } catch (error) {
//     console.error("❌ Failed to connect to MongoDB:", error.message);
//     process.exit(1);
//   }
// };

// export default ConnectDb;

import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "task-manager", // make sure you're specifying dbName directly
    });

    console.log(`✅ MongoDB connected`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default ConnectDb;
