import { exampleService } from "../app/example-serivce";

test("adds 1 + 2 to equal 3", () => {
  const reslut = exampleService();
  expect(reslut).toBe(3);
});
