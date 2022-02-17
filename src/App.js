import "./App.css";

import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/summary/entry/OrderEntry";
import { OrderDetailsProvider } from "./context/OrderDetails";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/* summary page and entry page needs provider */}
        <OrderEntry></OrderEntry>
      </OrderDetailsProvider>
      {/* confirmation page does not need */}
    </Container>
  );
}

export default App;
