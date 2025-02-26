import { Router } from 'express';
import { validateBody } from '../middlewares/validationMiddlewere';
import { EventsSchema } from '../schemas/eventsSchemas';
import { authenticateToken } from '../middlewares/authenticationTokenMiddleware';
import { eventsController } from '../controllers/eventsController';
import { EventsUpdateSchema } from '../schemas/eventsUpdateSchemas';


const EventsRouter = Router();

EventsRouter.post('/events', authenticateToken, validateBody(EventsSchema), eventsController.eventsPost);
EventsRouter.get('/events', authenticateToken, eventsController.eventsGet);
EventsRouter.delete('/events/:id', authenticateToken, eventsController.eventsDelete);
EventsRouter.put('/events/:id', authenticateToken, validateBody(EventsUpdateSchema) ,eventsController.eventsUpdate)

export { EventsRouter };
