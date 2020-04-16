const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      console.log(models);
      return models.user.findById(id);
    },
    // async allRecipes(root, args, { models }) {
    //   return models.Recipe.findAll();
    // },
    // async recipe(root, { id }, { models }) {
    //   return models.Recipe.findById(id);
    // },
  },
};

export default resolvers;
