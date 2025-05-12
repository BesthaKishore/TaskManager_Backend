import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date },
    status: { type: String, required: true },
    remarks: { type: String },
});

const TaskData = mongoose.model("TaskData", taskSchema);

export default TaskData;
