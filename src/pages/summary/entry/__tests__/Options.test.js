import { render, screen } from "../../../../test-utils/testing-library-utils";
import Options from "../Options";

test("displays image for each scoop from server", async () => {
  render(<Options optionType={"scoops"}></Options>);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altTexts = scoopImages.map((element) => element.alt);
  expect(altTexts).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for each toppings from server", async () => {
  render(<Options optionType={"toppings"}></Options>);

  //find images
  const toppingsImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingsImages).toHaveLength(3);

  //confirm alt text of images
  const altTexts = toppingsImages.map((element) => element.alt);
  expect(altTexts).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
