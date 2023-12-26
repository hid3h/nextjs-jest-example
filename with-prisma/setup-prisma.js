jest.mock("./db", () => {
  return jestPrisma.client;
});
