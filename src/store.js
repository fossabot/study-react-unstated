import {useState} from "react";
import shotid from "shortid";
import {createContainer} from 'unstated-next';

export const useStore = () => {
    const list = [
        {id: 1, title: "write code"},
        {id: 2, title: "install VSC"}
    ];

    const [input, setValue] = useState("");

    const [name, setName] = useState("Ichiro");

    const [todos, addTodo] = useState(list);

    const [item, setTodo] = useState("");

    const handleInput = event => {
        setValue(event.target.value);
    };

    const updateName = event => {
        event.preventDefault();
        setName(input);
        setValue("")
    };

    const handleTodo = event => {
        setTodo(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const value = {
            id: shotid.generate(),
            title: item
        };
        addTodo(todos.concat(value));
        setTodo("");
    }

    return {
        input,
        name,
        handleInput,
        updateName,
        todos,
        item,
        handleTodo,
        handleSubmit
    };
};

export const StoreContainer = createContainer(useStore);
