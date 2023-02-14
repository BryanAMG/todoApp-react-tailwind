import { useEffect, useState } from "react";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

const initialTheme = localStorage.theme === "dark";

export default () => {
    const [isDarkMode, setIsDarkMode] = useState(initialTheme);

    useEffect(() => {
        isDarkMode
            ? (document.documentElement.classList.add("dark"),
              localStorage.setItem("theme", "dark"))
            : (document.documentElement.classList.remove("dark"),
              localStorage.setItem("theme", "light"));
    }, [isDarkMode]);

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between ">
                <h1 className="text-3xl font-semibold uppercase tracking-[.7rem] text-white">
                    Todo
                </h1>
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
};
