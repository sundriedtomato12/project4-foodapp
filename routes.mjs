import { resolve } from 'path';
import db from './models/index.mjs';
import initDataController from './controllers/data.mjs';

export default function routes(app) {
  const DataController = initDataController(db);

  app.get('/api/towns', DataController.listTowns);
  app.get('/api/latest-reviews', DataController.listlatestReviews);
  app.get('/api/categories', DataController.listCategories);
  app.get('/api/stalls/:townId', DataController.listStallsByTown);
  app.get('/api/rated-stalls/:townId', DataController.listStallsWithAvgRating);
  app.get('/api/category-stalls/:townId', DataController.listStallsCategoryFilter);
  app.get('/api/stall-items/:stallId', DataController.listItemsByStall);
  app.get('/api/stall-reviews/:stallId', DataController.listReviewsByStall);
  app.post('/api/new-review/:stallId', DataController.addReview);

  app.get('*', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
