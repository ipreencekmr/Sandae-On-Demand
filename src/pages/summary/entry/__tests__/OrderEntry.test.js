import {
  render,
  screen,
  waitFor,
} from "../../../../test-utils/testing-library-utils";
import OrderEntry from "../OrderEntry";

import { rest } from "msw";
import { server } from "../../../../mocks/server";

test.only("handles error for scroops and toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<OrderEntry setOrderPhase={jest.fn()}></OrderEntry>);

  //to keep it wait untill completes all to wrap in waitFor
  await waitFor(async () => {
    //async findBy (didn't wait for both alerts)
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});

test.skip("not a real test", () => {});
