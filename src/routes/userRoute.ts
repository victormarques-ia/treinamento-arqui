import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const router = Router();

router.route('/users').post(UsersController.create);

export default router;
