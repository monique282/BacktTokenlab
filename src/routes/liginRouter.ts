import { Router } from 'express';
import { ObjectSchema } from 'joi';
import { validateBody } from '../middlewares/validationMiddlewere';
import { LoginSchema } from '../schemas/loginSchemars';
import { loginController } from '../controllers/loginController';


const LoginRouter = Router();

LoginRouter.post('/login', validateBody(LoginSchema as ObjectSchema<any>), loginController.loginPost);


export { LoginRouter };
