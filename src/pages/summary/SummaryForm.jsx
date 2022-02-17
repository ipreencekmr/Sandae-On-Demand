import { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

// const popover = (
//     <Popover id="popover-basic">
//       <Popover.Header as="h3">Popover right</Popover.Header>
//       <Popover.Body>
//         And here's some <strong>amazing</strong> content. It's very engaging.
//         right?
//       </Popover.Body>
//     </Popover>
//   );

export default function SummaryForm() {
  const [disabled, setDisabled] = useState(true);

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
    <Form>
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
