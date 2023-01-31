const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.tracksAPI.getTracks();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.tracksAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
