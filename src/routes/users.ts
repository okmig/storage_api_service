import express, { Router } from "express";
import UserController from "../controllers/users";

const router: Router = express.Router();

router.get('/users', UserController.getUsers);
router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUser);
router.patch('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

export default router;