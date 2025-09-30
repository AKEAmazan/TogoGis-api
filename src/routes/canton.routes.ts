import { CantonController } from './../controllers/canton.controllers';
import {Router} from 'express';

const cantonRouter = Router();

cantonRouter.get('/', CantonController.getAll);
cantonRouter.get('/search', CantonController.getCantonByLocation);
export default cantonRouter;