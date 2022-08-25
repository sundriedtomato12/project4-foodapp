import { Sequelize } from 'sequelize';

export default function initDataController(db) {
  const listTowns = async (request, response) => {
    try {
      const towns = await db.Town.findAll();
      response.json({ towns });
    } catch (error) {
      console.log(error);
    }
  };

  // need some inner join to get stall id/name,town
  // this one doesn't work :(
  const listlatestReviews = async (request, response) => {
    try {
      const latestReviews = await db.Review.findAll({
        limit: 5,
        order: [['created_at', 'DESC']],
        include: [
          {
            model: db.Stall,
            required: true,
            include: [{ model: db.Town, required: true }],
          },
        ],
      });

      response.json({ latestReviews });
    } catch (error) {
      console.log(error);
    }
  };

  const listCategories = async (request, response) => {
    try {
      const categories = await db.Category.findAll();
      response.json({ categories });
    } catch (error) {
      console.log(error);
    }
  };

  // listStallsByTown - average rating with avg sql function?

  const listStallsByTown = async (request, response) => {
    try {
      const stallsInTown = await db.Stall.findAll({
        where: {
          town_id: request.params.town_id,
        },
        include: [
          {
            model: db.Town,
            where: {
              id: request.params.town_id,
            },
          },
        ],
      });

      response.json({ stallsInTown });
    } catch (error) {
      console.log(error);
    }
  };

  const listStallsWithAvgRating = async (request, response) => {
    try {
      const stallsWithAvgRating = await db.Review.findAll({
        attributes: [[Sequelize.fn('avg', Sequelize.col('rating')), 'rating']],
        include: [
          {
            model: db.Stall,
            where: {
              town_id: request.params.town_id,
            },
          },
        ],
        group: ['stall_id'],
        raw: true,
      });

      response.json({ stallsWithAvgRating });
    } catch (error) {
      console.log(error);
    }
  };

  // listStallsCategoryFilter

  const listStallsCategoryFilter = async (request, response) => {
    try {
      const stallsCatFiltered = await db.Stall.findAll({
        where: {
          town_id: request.params.town_id,
          category_id: request.body.category_id,
        },
      });

      response.json({ stallsCatFiltered });
    } catch (error) {
      console.log(error);
    }
  };

  // listItemsByStall
  const listItemsByStall = async (request, response) => {
    try {
      const itemsInStall = await db.Item.findAll({
        where: {
          stall_id: request.params.stall_id,
        },
        include: [
          {
            model: db.Stall,
            where: {
              id: request.params.stall_id,
            },
          },
        ],
      });

      response.json({ itemsInStall });
    } catch (error) {
      console.log(error);
    }
  };

  // listReviewsByStall
  const listReviewsByStall = async (request, response) => {
    try {
      const reviewsOnStall = await db.Review.findAll({
        where: {
          stall_id: request.params.stall_id,
        },
      });

      response.json({ reviewsOnStall });
    } catch (error) {
      console.log(error);
    }
  };

  // post a review

  const addReview = async (request, response) => {
    console.log(request.body);
    try {
      const newReview = await db.Review.create({
        user_id: request.cookies.user_id,
        stall_id: request.params.stall_id,
        rating: Number(request.body.rating),
        comments: request.body.comments,
      });
      console.log(newReview);
      response.send({ newReview });
    }
    catch (error) {
      console.log(error);
    }
  };

  // login, logout, signup

  // stall onboarding private form
  // edit stall,item
  // add or change owner/manager

  return {
    listTowns,
    listlatestReviews,
    listCategories,
    listStallsByTown,
    listStallsCategoryFilter,
    listItemsByStall,
    listReviewsByStall,
    listStallsWithAvgRating,
    addReview,
  };
}
