import { Router } from 'express';
import NewsController from '../controller/news.controller';

const newsRouter: Router = Router({ mergeParams: true });

/** ALL NEWS ROUTES. */

newsRouter.get('/:md/head', NewsController.getNewsHead);
newsRouter.get('/headmapping', NewsController.getNewsMapping);
newsRouter.get('/:md', NewsController.getSingleNews);
newsRouter.get('/', NewsController.getAvailableContent);

export default newsRouter;
