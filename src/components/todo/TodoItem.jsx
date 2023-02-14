import CrossIcon from "../icons/CrossIcon";
import { useTodoContext } from "../../context/useTodoContext";
import React, { useContext } from "react";
import CheckIcon from "../icons/CheckIcon";

export default React.forwardRef(
    ({ todo: { id, title, completed }, ...props }, ref) => {
        const { updateTodo, deleteTodo } = useContext(useTodoContext);
        return (
            <article
                ref={ref}
                {...props}
                className="flex items-center gap-4 border-b-2 dark:border-gray-600 dark:bg-gray-800 "
            >
                <button
                    className={`h-6 w-6 rounded-full border-2 ${
                        completed &&
                        "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    } `}
                    onClick={() => updateTodo(id)}
                >
                    {completed && <CheckIcon />}
                </button>
                <p
                    className={`grow  ${
                        completed
                            ? "text-gray-400 line-through dark:text-gray-500"
                            : " text-gray-700 dark:text-gray-300"
                    }`}
                >
                    {title}
                </p>
                <button onClick={() => deleteTodo(id)}>
                    <CrossIcon />
                </button>
            </article>
        );
    }
);
