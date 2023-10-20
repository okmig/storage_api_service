import { TaskService } from "../services/tasks";
import { Request, Response } from "express";

class taskController {
    async createTask(req: Request, res: Response) {
        try {
            const task = await TaskService.createTask(req.body);
            res.status(201).json({task});
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }

    async getTasks(req: Request, res: Response) {
        try {
            const tasks = await TaskService.getTasks();
            res.status(200).json({tasks});
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }

    async getTask(req: Request, res: Response) {
        try {
            const taskId = req.params.id;
            const task = await TaskService.getTask(taskId);
            if (!task) {
                res.status(404).json({msg: `No task with id: ${taskId}`}); 
            }
            res.status(200).json({task});
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const taskId = req.params.id;
            const body = req.body;
            const task = await TaskService.updateTask(taskId, body);
            if (!task) {
                res.status(404).json({msg: `No task with id: ${taskId}`}); 
            }
            res.status(200).json({task});
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const taskId = req.params.id;
            const body = req.body;
            const task = await TaskService.deleteTask(taskId);
            if (!task) {
                res.status(404).json({msg: `No task with id: ${taskId}`}); 
            }
            res.status(200).json({msg: `The task with id ${taskId} was deleted`});
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }
}

export const TaskController = new taskController();