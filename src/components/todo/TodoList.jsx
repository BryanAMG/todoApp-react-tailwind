import { Draggable, Droppable } from "@hello-pangea/dnd";
import { useContext } from "react";
import { useTodoContext } from "../../context/useTodoContext";
import TodoItem from "./TodoItem";

export default () => {
    const {
        todos,
        filters: { active, completed },
    } = useContext(useTodoContext);

    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className="mt-4  rounded-t-md bg-white dark:bg-gray-800 [&>article]:p-4"
                >
                    {todos
                        .filter((todo) => {
                            if (!active && !completed) return true;
                            if (active) return !todo.completed;
                            else return todo.completed;
                        })
                        .map((todo, index) => (
                            <Draggable
                                key={todo.id}
                                index={index}
                                draggableId={`${todo.id}`}
                            >
                                {(draggableProvided) => (
                                    <TodoItem
                                        todo={todo}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.dragHandleProps}
                                        {...draggableProvided.draggableProps}
                                    />
                                )}
                            </Draggable>
                        ))}
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};
