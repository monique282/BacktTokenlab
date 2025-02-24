import { Router } from 'express';
import { validateBody } from '../middlewares/validationMiddlewere';
import { EventsSchema } from '../schemas/eventsSchemas';


const EventsRouter = Router();

EventsRouter.post('/events', validateBody(EventsSchema), eventsController.eventsPost);


export { EventsRouter };
