import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
// import Message from "./Message";

function App() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
    "Here item selected  using state",
  ];
  //  return <div><Message /></div>;
  const handleSelectedItem = (item: string) => {
    console.log(item, "selected");
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="List of items"
        onSelectItem={handleSelectedItem}
      />
      {/* <Alert text="Hello World" /> OR */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <span> World</span>
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Click Me
      </Button>
      {/* <ListGroup /> */}
    </div>
  );
}

export default App;
