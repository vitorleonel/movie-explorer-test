export const movieMock = {
  id: "test-1",
  title: "Test title",
  director: "Test director",
  description: "Test description",
  year: 2023,
  coverImage: "https://localhost/test-image.png",
};

export const moviesMock = Array.from({ length: 11 }).map((_, index) => ({
  ...movieMock,
  id: `test-${index}`,
  title: `Test title ${index}`,
}));
