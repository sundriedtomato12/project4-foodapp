const { faker } = require('@faker-js/faker');

// BEFORE SEEDING, ADD 1 ENTRY INTO THE DATABASE AS USER ID: 1
// MAKE SURE ALL TABLES ARE EMPTY AND IDs ARE STARTING FROM 1

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
        created_at: new Date(),
        updated_at: new Date(),
      };
      usersList.push(fakeUser);
      i += 1;
    }

    const townsList = [{
      town_name: 'Ang Mo Kio',
      photo: faker.image.city(200, 200, true),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      town_name: 'Tiong Bahru',
      photo: faker.image.city(200, 200, true),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      town_name: 'Orchard',
      photo: faker.image.city(200, 200, true),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      town_name: 'Jurong',
      photo: faker.image.city(200, 200, true),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      town_name: 'Tampines',
      photo: faker.image.city(200, 200, true),
      created_at: new Date(),
      updated_at: new Date(),
    }];

    const categoriesList = [{
      category_name: 'Chinese',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      category_name: 'Western',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      category_name: 'Indian',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      category_name: 'Malay',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      category_name: 'Japanese',
      created_at: new Date(),
      updated_at: new Date(),
    }];

    let j = 0;
    let fakeStall;
    const stallsList = [];
    while (j < 25) {
      fakeStall = {
        name: faker.company.name(),
        address: faker.internet.password(),
        owner_id: 1,
        town_id: Math.ceil(Math.random() * 5),
        category_id: Math.ceil(Math.random() * 5),
        photo: faker.image.business(200, 200, true),
        created_at: new Date(),
        updated_at: new Date(),
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
        photo: faker.image.food(200, 200, true),
        stall_id: Math.ceil(Math.random() * 25),
        created_at: new Date(),
        updated_at: new Date(),
      };
      itemsList.push(fakeItem);
      k += 1;
    }

    let l = 0;
    let fakeReview;
    const reviewsList = [];
    while (l < 100) {
      fakeReview = {
        user_id: 1,
        stall_id: Math.ceil(Math.random() * 25),
        comments: `This stall is ${faker.word.adjective()}! I have eaten here ${faker.word.adverb()}`,
        rating: Math.ceil(Math.random() * 5),
        created_at: new Date(),
        updated_at: new Date(),
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
