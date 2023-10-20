import UserService from "../services/users";
import { Request, Response } from "express";

export default class UserController {
    public static async createUser(req: Request, res: Response) {
        try {
            const user = await UserService.createUser(req.body);
            if (user === false) {
                res.status(409).json({
                    msg: 'The username is already taken',
                    status: false
                });
            }
            res.status(201).json({
                msg: 'You have registered successfully',
                status: true
            });
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }

    public static async getUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getUsers();
            res.status(200).json({users});
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }

    public static async getUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const user = await UserService.getUser(userId);
            if (!user) {
                res.status(404).json({msg: `No user with id: ${userId}`}); 
            }
            res.status(200).json({user});
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }

    public static async updateUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const body = req.body;
            const user = await UserService.updateUser(userId, body);
            if (!user) {
                res.status(404).json({msg: `No user with id: ${userId}`}); 
            }
            res.status(200).json({user});
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }

    public static async deleteUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const body = req.body;
            const user = await UserService.deleteUser(userId);
            if (!user) {
                res.status(404).json({msg: `No user with id: ${userId}`}); 
            }
            res.status(200).json({msg: `The user with id ${userId} was deleted`});
        } catch (error) {
            res.status(500).json({msg: error});
        }
    }
}