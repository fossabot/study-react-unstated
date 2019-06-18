import React, {useContext} from "react";
import {Context} from "./context";

const FormComponent = () => {
    const form = useContext(Context);
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
