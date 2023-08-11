/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require("@faker-js/faker");

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

module.exports = () => {
  const data = {
    movies: [],
  };

  for (let i = 1; i <= 1000; i++) {
    data.movies.push({
      id: `movie-${i}`,
      title: capitalizeFirstLetter(faker.lorem.words()),
      director: faker.person.fullName(),
      description: faker.lorem.paragraph(),
      year: faker.date.past({ years: 23 }).getFullYear(),
      coverImage: faker.image.urlLoremFlickr({ category: "business" }),
    });
  }

  return data;
};
