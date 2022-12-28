import { Router } from "express";

import { UsersController } from "../controllers/usersController";

export const router = Router();

const usersController = new UsersController()

router.get('/', usersController.getHello);