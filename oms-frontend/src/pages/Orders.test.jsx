import { render, screen } from "@testing-library/react";
import Orders from "./Orders";
import { BrowserRouter } from "react-router-dom";
import * as service from "../services/orderService";
import { vi } from "vitest";

vi.spyOn(service, "getOrders").mockResolvedValue({
  data: [{ id: 1, product: "Phone", status: "PENDING" }],
});

test("renders orders list", async () => {
  render(
    <BrowserRouter>
      <Orders />
    </BrowserRouter>
  );

  expect(await screen.findByText("Phone")).toBeInTheDocument();
});
