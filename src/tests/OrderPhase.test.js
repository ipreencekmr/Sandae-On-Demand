import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("order phases for happy path", () => {
  //render app
  render(<App></App>);

  // add ice cream scoops and toppings
  //find and click the order button
  //check summary information based on order
  //accept terms and conditions and click button to confirm order
  //confirm order number on the confirmation page
  //click new orde rbutton o nthe cornfirmation page
  //check that scoops and toppings subtotals have been reset
  //do we need to await anything to avoid test errors?
});
