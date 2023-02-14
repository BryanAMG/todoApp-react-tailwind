import { createContext, useEffect, useState } from "react";

export const useTodoContext = createContext();

const newTodos = JSON.parse(localStorage.getItem("todoList")) || [];
const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

export default ({ children }) => {
    const [todos, setTodos] = useState(newTodos);
    const [filters, setFilters] = useState({ active: false, completed: false });

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (todo) => setTodos((old) => [...old, todo]);
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    const updateTodo = (id) =>
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    const clearAll = () => setTodos(todos.filter((todo) => !todo.completed));
    const todosLeft = todos.filter((todo) => !todo.completed);

    const showActives = () => setFilters({ active: true, completed: false });
    const showCompleted = () => setFilters({ active: false, completed: true });
    const showAll = () => setFilters({ active: false, completed: false });

    const handleDrangAndDrop = ({ destination, source }) => {
        if (!destination) return;
        if (
            source.index === destination.index &&
            destination.droppableId === source.droppableId
        )
            return;

        setTodos((prevTask) =>
            reorder(prevTask, source.index, destination.index)
        );
    };

    return (
        <useTodoContext.Provider
            value={{
                todos,
                todosLeft,
                filters,
                showActives,
                showCompleted,
                showAll,
                createTodo,
                deleteTodo,
                updateTodo,
                clearAll,
                handleDrangAndDrop,
            }}
        >
            {children}
        </useTodoContext.Provider>
    );
};
