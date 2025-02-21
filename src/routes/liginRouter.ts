import { Router } from 'express';
import { ObjectSchema } from 'joi';
import { validateBody } from '../middlewares/validationMiddlewere';
import { LoginSchema } from '../schemas/loginSchemars';


const UserRouter = Router();

UserRouter.post('/login', validateBody(LoginSchema as ObjectSchema<any>), loginController.loginPost);


export { UserRouter };
