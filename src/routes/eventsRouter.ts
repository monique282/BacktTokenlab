import { Router } from 'express';
import { validateBody } from '../middlewares/validationMiddlewere';
import { EventsSchema } from '../schemas/eventsSchemas';
import { eventsController } from '../controllers/eventsController';
import { authenticateToken } from '../middlewares/authenticationTokenMiddleware';


const EventsRouter = Router();

EventsRouter.post('/events', authenticateToken, validateBody(EventsSchema), eventsController.eventsPost);


export { EventsRouter };
