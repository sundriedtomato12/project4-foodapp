import { resolve } from 'path';
import db from './models/index.mjs';
import initDataController from './controllers/data.mjs';

export default function routes(app) {
  const DataController = initDataController(db);

  app.get('/api/towns', DataController.listTowns);
  app.get('/api/latest-reviews', DataController.listlatestReviews);
  app.get('/api/categories', DataController.listCategories);
  app.get('/api/town/:town_id', DataController.listStallsByTown);
  // this route doesn't work
  app.get('/api/town/:town_id/avg-rating', DataController.listStallsWithAvgRating);
  // test again when we setup the page with category dropdown
  app.get('/api/town/:town_id/category-stalls', DataController.listStallsCategoryFilter);
  app.get('/api/stall/:stall_id/items', DataController.listItemsByStall);
  app.get('/api/stall/:stall_id/reviews', DataController.listReviewsByStall);
  // post not tested
  app.post('/api/stall/:stall_id/new-review', DataController.addReview);

  app.get('*', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
