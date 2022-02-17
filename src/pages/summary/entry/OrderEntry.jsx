import Options from "./Options";
import { useOrderDetails } from "../../../context/OrderDetails";
import { Button } from "react-bootstrap";

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops"></Options>
      <Options optionType="toppings"></Options>
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button onClick={() => setOrderPhase("review")}>Order Sundae!</Button>
    </div>
  );
}
