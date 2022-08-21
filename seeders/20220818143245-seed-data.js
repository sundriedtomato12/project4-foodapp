module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoriesList = [
      {
        category_name: 'Japanese',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'Korean',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: 'Thai',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    try {
      const result = await queryInterface.bulkInsert('categories', categoriesList);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

/* sudo service postgresql start */
/* npx sequelize db:seed:all */
