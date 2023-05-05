import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      <br />
      <br />
      <br />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> ALEEEERT </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
