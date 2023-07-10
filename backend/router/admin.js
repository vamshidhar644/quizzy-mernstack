import { Router } from 'express';
const adminRouter = Router();

/** import controllers */
import * as adminController from '../controllers/adminController.js';

/** Questions Routes API */

adminRouter.route('/login').post(adminController.loginUser);

adminRouter.route('/signup').post(adminController.signupUser);

export default adminRouter;
