import express from "express"

import { AddNewTask, GetAllTask, TaskUpdate, TaskDelete, DeleteAllTask } from "../controllers/taskControllers.js";

const routers = express.Router();

routers.post('/add', AddNewTask);
routers.get('/list', GetAllTask);
routers.put('/update/:id', TaskUpdate);
routers.delete('/delete/:id', TaskDelete);
routers.delete('/deleteAll', DeleteAllTask);

export default routers;