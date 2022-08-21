import { resolve } from 'path';
import db from './models/index.mjs';
import initDataController from './controllers/data.mjs';

export default function routes(app) {
  const DataController = initDataController(db);

  app.get('/towns', DataController.listTowns);
  app.get('/latest-reviews', DataController.listlatestReviews);
  app.get('/categories', DataController.listCategories);
  app.get('/stalls/:townId', DataController.listStallsByTown);
  app.get('/rated-stalls/:townId', DataController.listStallsWithAvgRating);
  app.get('/category-stalls/:townId', DataController.listStallsCategoryFilter);
  app.get('/stall-items/:stallId', DataController.listItemsByStall);
  app.get('/stall-reviews/:stallId', DataController.listReviewsByStall);
  app.post('/new-review/:stallId', DataController.addReview);

  app.get('*', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
