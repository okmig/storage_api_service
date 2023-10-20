import express from "express";
import { UserController } from "../controllers/users";

export const userRouter = express.Router();

userRouter.post('/', UserController.createUser);