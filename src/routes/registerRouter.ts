import { Router } from 'express';
import { ObjectSchema } from 'joi';
import { RegisterSchema } from '../schemas/registerSchemas';
import { validateBody } from '../middlewares/validationMiddlewere';


const RegisterRouter = Router();

RegisterRouter.post('/register', validateBody(RegisterSchema as ObjectSchema<any>), registerController.registerPost);


export { RegisterRouter };
