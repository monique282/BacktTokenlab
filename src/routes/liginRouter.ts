import { Router } from 'express';
import { ObjectSchema } from 'joi';
import { loginController } from '../controllers/loginController';
import { validateBody } from '../middlewares/validationMiddlewere';
import { LoginSchema } from '../schemas/loginSchemas';


const LoginRouter = Router();

LoginRouter.post('/login', validateBody(LoginSchema as ObjectSchema<any>), loginController.loginPost);


export { LoginRouter };
