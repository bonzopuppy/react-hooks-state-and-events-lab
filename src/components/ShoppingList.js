import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  //create a state variable called SelectedCategory and set it to "All"
  const [selectedCategory, setSelectedCategory] = useState("All");

  //create a function called handleCategoryChange that takes in an event as an argument
  function handleCategoryChange(event) {
    //update the state variable SelectedCategory to be whatever value the user selected
    setSelectedCategory(event.target.value);
  }

  //create a variable called itemsToDisplay that filters the items based on what category is selected
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true}
    else {
      return item.category === selectedCategory;
    }   
  });

  //function to add the itemsToDisplay as list items
  const displayItems = itemsToDisplay.map((item) => {
    return (
      <Item key={item.id} name={item.name} category={item.category} />
    )
  })



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter Items</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
