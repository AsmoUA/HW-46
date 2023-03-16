import React from "react";
import Registration from "./components/Registration";
import Products from "./components/Products";
import SaveList from "./components/SaveList";

  function App () {

return (
  <div className="wrapper">
    <div className="list">
      <h1>Product list</h1>
      <Products />
      <SaveList />
    </div>
    <Registration />
  </div> 
  );
}

export default App;
