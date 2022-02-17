import { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

export default function SummaryForm({ setOrderPhase }) {
  const [disabled, setDisabled] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    //the next page will handle submitting order
    setOrderPhase("completed");
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={!disabled}
          onChange={(e) => setDisabled(!e.target.checked)}
          label={checkboxLabel}
        ></Form.Check>
        <Button variant="primary" type="submit" disabled={disabled}>
          Confirm Order
        </Button>
      </Form.Group>
    </Form>
  );
}
