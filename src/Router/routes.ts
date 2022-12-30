import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";

import { UserController } from "../controllers/UserController";

export const router = Router();

const userBusiness = new UserBusiness();
const userController = new UserController(userBusiness);

router.get('/', userController.getUsers);
router.get('/users', userController.getUsersSince);
router.get('/users/:username/details', userController.getUserDetail);
router.get('/users/:username/repos', userController.getUserRepos);