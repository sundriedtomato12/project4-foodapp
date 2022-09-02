import { Sequelize } from 'sequelize';
import jsSHA from 'jssha';
import Cookies from 'js-cookie';

const { SALT } = process.env;

const generateHash = (string) => {
  // eslint-disable-next-line new-cap
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  const unhashedString = `${string}-${SALT}`;
  shaObj.update(unhashedString);
  const hashedString = shaObj.getHash('HEX');
  return hashedString;
};

// compare value between two hashes, return true/false
const verifyHash = (input, hashExpected) => {
  const hashedInput = generateHash(input);
  return hashedInput === hashExpected;
};

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

  const listStallsByMerchant = async (request, response) => {
    try {
      const stallsByMerchant = await db.Stall.findAll({
        where: {
          user_id: request.cookies.userId,
          // user_id: 1,
        },
        include: [
          {
            model: db.Town,

          },
        ],
      });

      response.json({ stallsByMerchant });
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
        include: [
          {
            model: db.User,
          },
        ],
      });

      response.json({ reviewsOnStall });
    } catch (error) {
      console.log(error);
    }
  };

  // post a review

  // const addReview = async (request, response) => {
  //   console.log(request.body);
  //   try {
  //     const newReview = await db.Review.create({
  //       // user_id: request.cookies.user_id,
  //       user_id: 1,
  //       stall_id: request.params.stall_id,
  //       rating: Number(request.body.rating),
  //       comments: request.body.comments,
  //     });
  //     console.log(newReview);
  //     response.send({ newReview });
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // };

  const addReview = async (request, response) => {
    try {
      const newReview = await db.Review.create({
        // user_id: request.cookies.user_id,
        user_id: request.body.userId,
        stall_id: Number(request.body.stall_id),
        rating: Number(request.body.rating),
        comments: request.body.comments,
        created_at: new Date(),
        updated_at: new Date(),
      });
      response.redirect(`/stall/${request.body.stall_id}`);
      window.location.reload();
    }
    catch (error) {
      console.log(error);
    }
  };

  const stallOnboard = async (request, response) => {
    console.log(request.body);
    try {
      const newStall = await db.Stall.create({
        name: request.body.name,
        address: request.body.address,
        user_id: request.cookies.userId,
        // user_id: 1,
        town_id: Number(request.body.town),
        category_id: Number(request.body.category),
        photo: 'https://loremflickr.com/200/200/business?15378',
        created_at: new Date(),
        updated_at: new Date(),
      });
      console.log(newStall);
      response.send({ newStall });
    }
    catch (error) {
      console.log(error);
    }
  };

  const addMenuItem = async (request, response) => {
    console.log(request.body);
    try {
      const newItem = await db.Item.create({
        // user_id: request.cookies.user_id,
        name: request.body.name,
        description: request.body.description,
        stall_id: Number(request.body.stall_id),
        created_at: new Date(),
        updated_at: new Date(),
      });
      console.log(newItem);
      response.send({ newItem });
    }
    catch (error) {
      console.log(error);
    }
  };

  // login, logout, signup
  const signup = async (request, response) => {
    try {
      const hashedPassword = generateHash(request.body.password);
      const [user, created] = await db.User.findOrCreate({
        where: {
          email: request.body.email,
        },
        defaults: {
          name: request.body.name,
          password: hashedPassword,
          created_at: new Date(),
          updated_at: new Date(),
        },
      });
      if (created) {
        response.json({ newUser: true });
      } else if (user) {
        response.json({ existingUser: true });
      }
    }

    catch (error) {
      console.log(error);
    }
  };

  const login = async (request, response) => {
    try {
      const userInfo = await db.User.findOne({
        where: {
          email: request.body.email,
        },
      });
      if (userInfo === null) {
        console.log('user info null');
      } else if (userInfo != null) {
        if (verifyHash(request.body.password, userInfo.password)) {
          console.log('logged in!');
          response.cookie('loggedInHash', generateHash(userInfo.id));
          response.cookie('userId', userInfo.id);
          response.json({ userInfo });
        } else {
          console.log(userInfo);
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  const verify = (request, response) => {
    const { userId } = request.cookies;
    const { loggedInHash } = request.cookies;

    const hashedCookieString = generateHash(userId);

    if (hashedCookieString === loggedInHash) {
      response.json({ userId, loggedIn: true });
      console.log(userId);
    } else {
      response.clearCookie('loggedInHash');
      response.clearCookie('userId');
      response.json({ redirect: '/', userId: '', loggedIn: false });
    }
  };

  const logout = (request, response) => {
    response.clearCookie('loggedInHash');
    response.clearCookie('userId');
    response.redirect('/');
  };

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
    stallOnboard,
    listStallsByMerchant,
    addMenuItem,
    signup,
    login,
    verify,
    logout,
  };
}
