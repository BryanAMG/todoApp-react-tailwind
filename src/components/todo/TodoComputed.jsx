import { useTodoContext } from "../../context/useTodoContext";
import { useContext } from "react";

export default () => {
    const { todosLeft, clearAll } = useContext(useTodoContext);
    return (
        <section className="flex justify-between rounded-b-md bg-white px-5 py-5 text-gray-400 shadow-md dark:bg-gray-800 ">
            <span>{todosLeft.length} items left</span>
            <button onClick={clearAll}>Clear Completed</button>
        </section>
    );
};
