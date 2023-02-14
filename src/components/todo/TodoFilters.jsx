import { useTodoContext } from "../../context/useTodoContext";
import { useContext } from "react";

export default () => {
    const {
        showActives,
        showCompleted,
        showAll,
        filters: { active, completed },
    } = useContext(useTodoContext);
    return (
        <section className="container mx-auto mt-4">
            <div className="flex justify-center gap-5 rounded-md bg-white p-4 dark:bg-gray-800 dark:text-gray-500">
                <button
                    onClick={showAll}
                    className={`hover:text-blue-700 ${
                        !active && !completed && "font-bold text-blue-900"
                    }`}
                >
                    All
                </button>
                <button
                    onClick={showActives}
                    className={`hover:text-blue-700 ${
                        active && "font-bold text-blue-900"
                    }`}
                >
                    Active
                </button>
                <button
                    onClick={showCompleted}
                    className={`hover:text-blue-700 ${
                        completed && "font-bold text-blue-900"
                    }`}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};
