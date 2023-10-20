import express from "express";
import { TaskController } from "../controllers/tasks";

export const taskRouter = express.Router();

taskRouter.route('/').get(TaskController.getTasks).post(TaskController.createTask);
taskRouter.route('/:id').get(TaskController.getTask).patch(TaskController.updateTask).delete(TaskController.deleteTask);