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
      });

      response.send({ latestReviews });
    } catch (error) {
      console.log(error);
    }
  };

  const listCategories = async (request, response) => {
    try {
      const categories = await db.Category.findAll();
      response.send({ categories });
    } catch (error) {
      console.log(error);
    }
  };

  // listStallsByTown - average rating with avg sql function?

  // listStallsCategoryFilter

  // listItemsByStall

  // listReviewsByStall

  // login, logout, signup

  // stall onboarding private form
  // edit stall,item

  // post a review

  return {
    listTowns,
    listlatestReviews,
    listCategories,
  };
}
