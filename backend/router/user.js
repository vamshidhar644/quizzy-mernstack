import { Router } from 'express';
const userRouter = Router();

/** import controllers */
import * as userController from '../controllers/userController.js';

/** Questions Routes API */

userRouter.route('/login').post(userController.loginUser);

userRouter.route('/signup').post(userController.signupUser);

export default userRouter;
