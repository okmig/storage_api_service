import { Task } from "../models/Task";

export class taskService {
    //create a task
    async createTask(data: any) {
        try {
            const newTask = await Task.create(data);
            return newTask;
        } catch (error) {
            console.log(error);
        }
    }

    //get tasks
    async getTasks() {
        try {
            const tasks = await Task.find({});
            return tasks;
        } catch (error) {
            console.log(error);
        }
    }

    //get a task
    async getTask(id: string) {
        try {
            const task = await Task.findById({_id:id});
            return task;
        } catch (error) {
            console.log(error);
        }
    }

    //update a task
    async updateTask(id: string, body: any) {
        try {
            const task = await Task.findByIdAndUpdate({_id:id}, body, {new: true});
            return task;
        } catch (error) {
            console.log(error);
        }
    }

    //delete a task
    async deleteTask(id: string) {
        try {
            const task = await Task.findByIdAndDelete({_id:id});
            return task;
        } catch (error) {
            console.log(error);
        }
    }
}

export const TaskService = new taskService();