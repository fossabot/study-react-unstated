import React from 'react';
import {StoreContainer} from "./store";
import FormComponent from "./form";
import TodoComponent from "./todo";

function App() {
  return (
    <div className="App">
      <StoreContainer.Provider>
        <FormComponent/>
        <TodoComponent/>
      </StoreContainer.Provider>
    </div>
  );
}

export default App;
