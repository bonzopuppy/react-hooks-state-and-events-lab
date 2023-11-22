import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  const [mode, setMode] = useState(false);

  // function to change the state variable between true and false
  function changeMode() {
    setMode(!mode);
  }

  // variable to hold the class name to be used for the 'App' div
  const appClass = mode ? "App dark" : "App light"


  // variable to hold the text to be used for the button
  const buttonText = mode ? "Dark Mode" : "Light Mode"


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
