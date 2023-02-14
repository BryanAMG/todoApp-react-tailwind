import { useTodoContext } from "../../context/useTodoContext";
import { useContext } from "react";

export default () => {
    const { createTodo } = useContext(useTodoContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value.trim();
        if (!title) return (e.target.elements.title.value = "");
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };
        createTodo(newTodo);
        e.target.elements.title.value = "";
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="mt-8 flex items-center gap-3 overflow-hidden rounded-md bg-white p-4 dark:bg-gray-800"
        >
            <span className="inline-block h-6 w-6 rounded-full border-2"></span>
            <input
                type="text"
                name="title"
                className="w-full text-gray-400 outline-none dark:bg-gray-800"
                placeholder="create a new todo ..."
            />
        </form>
    );
};
