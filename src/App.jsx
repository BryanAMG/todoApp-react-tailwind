import Header from "./components/header/Header";
import {
    TodoCreate,
    TodoList,
    TodoComputed,
    TodoFilters,
} from "./components/todo";
import { useTodoContext } from "./context/useTodoContext";

import { DragDropContext } from "@hello-pangea/dnd";
import { useContext } from "react";

function App() {
    const { handleDrangAndDrop } = useContext(useTodoContext);
    return (
        <div className="mx-auto min-h-screen bg-gray-100 bg-mobile-light bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-mobile-dark md:bg-desk-light md:dark:bg-desk-dark">
            <div className="mx-auto max-w-xl">
                <Header />
                <main className="container mx-auto px-4">
                    <TodoCreate />
                    <DragDropContext onDragEnd={handleDrangAndDrop}>
                        <TodoList />
                    </DragDropContext>
                    <TodoComputed />
                    <TodoFilters />
                </main>

                <footer className="m-8 text-center dark:text-gray-500">
                    Drag and drop to reoder list
                </footer>
            </div>
        </div>
    );
}

export default App;
