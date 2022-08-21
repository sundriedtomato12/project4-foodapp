const faker = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface) => {
    let i = 0;
    let fakeUser;
    const usersList = [];
    while (i < 50) {
      fakeUser = {
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.name.fullName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      usersList.push(fakeUser);
      i += 1;
    }

    const townsList = [{
      townName: 'Ang Mo Kio',
      photo: faker.image.city(),
    },
    {
      townName: 'Tiong Bahru',
      photo: faker.image.city(),
    },
    {
      townName: 'Orchard',
      photo: faker.image.city(),
    },
    {
      townName: 'Jurong',
      photo: faker.image.city(),
    },
    {
      townName: 'Tampines',
      photo: faker.image.city(),
    }];

    const categoriesList = [{
      categoryName: 'Chinese',
    }, {
      categoryName: 'Western',
    }, {
      categoryName: 'Indian',
    }, {
      categoryName: 'Malay',
    }, {
      categoryName: 'Japanese',
    }];

    let j = 0;
    let fakeStall;
    const stallsList = [];
    while (j < 25) {
      fakeStall = {
        name: faker.company.name(),
        address: faker.internet.password(),
        ownerId: 1,
        townId: Math.ceil(Math.random() * 5),
        categoryId: Math.ceil(Math.random() * 5),
        photo: faker.image.business(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      stallsList.push(fakeStall);
      j += 1;
    }

    let k = 0;
    let fakeItem;
    const itemsList = [];
    while (k < 100) {
      fakeItem = {
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        photo: faker.image.food(),
        stallId: Math.ceil(Math.random() * 25),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      itemsList.push(fakeItem);
      k += 1;
    }

    let l = 0;
    let fakeReview;
    const reviewsList = [];
    while (l < 100) {
      fakeReview = {
        userId: 1,
        stallId: Math.ceil(Math.random() * 25),
        comments: `This stall is ${faker.word.adjective()}! I have eaten here ${faker.word.adverb()}`,
        rating: Math.ceil(Math.random() * 5),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      reviewsList.push(fakeReview);
      l += 1;
    }

    // Insert categories before items because items reference categories
    const users = await queryInterface.bulkInsert(
      'users',
      usersList,
      { returning: true },
    );
    const towns = await queryInterface.bulkInsert(
      'towns',
      townsList,
      { returning: true },
    );
    const categories = await queryInterface.bulkInsert(
      'categories',
      categoriesList,
      { returning: true },
    );
    const stalls = await queryInterface.bulkInsert(
      'stalls',
      stallsList,
      { returning: true },
    );
    const items = await queryInterface.bulkInsert(
      'items',
      itemsList,
      { returning: true },
    );
    const reviews = await queryInterface.bulkInsert(
      'reviews',
      reviewsList,
      { returning: true },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('towns', null, {});
    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.bulkDelete('stalls', null, {});
    await queryInterface.bulkDelete('items', null, {});
    await queryInterface.bulkDelete('reviews', null, {});
  },
};
