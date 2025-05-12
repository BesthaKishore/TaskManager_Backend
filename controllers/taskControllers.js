import TaskData from "../models/taskModels.js";

// ADD NEW TASK IN LIST

const AddNewTask = async (req, res) => {
    try {
        const { title, description, date, status, remarks } = req.body;

        if (!title || !description || !date || !status) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const newTask = new TaskData({ title, description, date, status, remarks });
        await newTask.save();

        res.status(200).json({ success: true, message: "Successfully added" });
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// GET ALL TASK IN LIST
const GetAllTask = async (req, res) => {
    try {
        const ListTaks = await TaskData.find({});

        res.status(200).json({ success: true, task: ListTaks });
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }

}

// UPDATE TASK LIST BASE ON ID
const TaskUpdate = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, date, status, remarks } = req.body;

        const updateDate = await TaskData.findByIdAndUpdate(id, { title, description, date, status, remarks })

        if (!updateDate) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.status(200).json({ success: true, task: updateDate, message: "Task updated successfully" })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// EACH TASK DELETE BASE ON ID
const TaskDelete = async (req, res) => {
    try {
        const { id } = req.params

        const DeleteTask = await TaskData.findByIdAndDelete(id);

        if (!DeleteTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.status(200).json({ success: true, message: "Task Delete successfully" })

    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }
}

// DELETE ALL TASK IN LIST
const DeleteAllTask = async (req, res) => {

    try {
        await TaskData.deleteMany({});
        res.status(200).json({ success: true, message: "All tasks deleted successfully" });
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, message: error.message })
    }

}

export { AddNewTask, GetAllTask, TaskUpdate, TaskDelete, DeleteAllTask };