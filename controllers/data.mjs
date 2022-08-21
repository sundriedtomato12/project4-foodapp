export default function initDataController(db) {
  const listTowns = async (request, response) => {
    try {
      const towns = await db.Town.findAll();
      response.send({ towns });
    } catch (error) {
      console.log(error);
    }
  };

  // need some inner join to get stall id/name,town
  const listlatestReviews = async (request, response) => {
    try {
      const latestReviews = await db.Review.findAll({
        limit: 5,
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: Stall,
            required: true,
            include: [{ model: Town, required: true }],
          },
        ],
      });

      response.send({ latestReviews });
    } catch (error) {
      console.log(error);
    }
  };

  const listCategories = async (request, response) => {
    try {
      const categories = await db.Category.findAll();
      console.log(categories);
      response.send({ categories });
    } catch (error) {
      console.log(error);
    }
  };

  // listStallsByTown - average rating with avg sql function?

  const listStallsByTown = async (request, response) => {
    try {
      const stallsInTown = await db.Stall.findAll({
        where: {
          townId: request.params.townId,
        },
      });

      response.send({ stallsInTown });
    } catch (error) {
      console.log(error);
    }
  };

  const listStallsWithAvgRating = async (request, response) => {
    try {
      const stallsWithAvgRating = await db.Review.findAll({
        attributes: [[sequelize.fn('avg', sequelize.col('rating')), 'rating']],
        include: [
          {
            model: Stall,
          },
        ],
        where: {
          townId: request.params.townId,
        },
        group: ['stall_id'],
        raw: true,
      });

      response.send({ stallsWithAvgRating });
    } catch (error) {
      console.log(error);
    }
  };

  // listStallsCategoryFilter

  const listStallsCategoryFilter = async (request, response) => {
    try {
      const stallsCatFiltered = await db.Stall.findAll({
        where: {
          townId: request.params.townId,
          categoryId: request.body.categoryId,
        },
      });

      response.send({ stallsCatFiltered });
    } catch (error) {
      console.log(error);
    }
  };

  // listItemsByStall
  const listItemsByStall = async (request, response) => {
    try {
      const itemsInStall = await db.Item.findAll({
        where: {
          stallId: request.params.stallId,
        },
      });

      response.send({ itemsInStall });
    } catch (error) {
      console.log(error);
    }
  };

  // listReviewsByStall
  const listReviewsByStall = async (request, response) => {
    try {
      const reviewsOnStall = await db.Review.findAll({
        where: {
          stallId: request.params.stallId,
        },
      });

      response.send({ reviewsOnStall });
    } catch (error) {
      console.log(error);
    }
  };

  // post a review

  const addReview = async (request, response) => {
    console.log(request.body);
    try {
      const newReview = await db.Review.create({
        user_id: request.cookies.userId,
        stall_id: request.params.stallId,
        rating: Number(request.body.rating),
        comments: request.body.comments,
      });
      console.log(newReview);
      res.send({ newReview });
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
