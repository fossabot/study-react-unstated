import React from "react";
import {StoreContainer} from "./store";

const FormComponent = () => {
    const form = StoreContainer.useContainer();
    return (
        <div>
            <p>Hello! {form.name}</p>
            <div>
                <input type="text" value={form.input} onChange={form.handleInput} />
                <button onClick={form.updateName}>Change Name</button>
            </div>
        </div>
    );
};

export default FormComponent;
