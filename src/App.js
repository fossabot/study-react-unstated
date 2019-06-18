import React from 'react';
import {StoreContainer} from "./unstated/store";
import {default as FormComponentUnstated} from "./unstated/form";
import {default as TodoComponentUnstated} from "./unstated/todo";
import {default as FormComponentContext} from "./context/form";
import {default as TodoComponentContext} from "./context/todo";
import {Context, useStore} from "./context/context";

function App() {
    const contextStore = useStore();
    return (
        <div className="App">
            <h1>With unstated</h1>
            <StoreContainer.Provider>
                <FormComponentUnstated/>
                <TodoComponentUnstated/>
            </StoreContainer.Provider>

            <h1>With Context</h1>
            <Context.Provider value={contextStore}>
                <FormComponentContext />
                <TodoComponentContext/>
            </Context.Provider>
        </div>
    );
}

export default App;
