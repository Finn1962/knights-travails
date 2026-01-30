import { Knight } from "../assets/create-knight.js";

test("create knight", () => {
  const knight = new Knight({ x: 3, y: 4 });
  expect(knight).toMatchObject({
    position: expect.any(Object),
  });
});
