import { useState } from "react";

const TodoList = () => {
    const [addtask, setAddtask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setAddtask(e.target.value);
    };

    const handleClick = () => {
        if (addtask.trim() === "") return;

        const newTask = {
            id: Date.now(),
            task: addtask,
            isComplete: false,
        };

        setTasks([...tasks, newTask]);
        setAddtask("");
    };

    const tackComplete = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, isComplete: !task.isComplete } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="container mx-auto">
            <div className="text-center">
                <div className="inline-block border-2 p-6 rounded-lg">
                    <h1 className="font-bold text-4xl my-5">✅ Todo List</h1>
                    <div className="flex gap-2 justify-center pb-4">
                        <input
                            className="border-2 p-2 rounded-lg w-80"
                            value={addtask}
                            type="text"
                            placeholder="Add Any Task ✍️"
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="bg-red-950 text-white rounded-lg p-2"
                            onClick={handleClick}
                        >
                            Add Task
                        </button>
                    </div>
                </div>

                <div className="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="p-4">#</th>
                                <th className="px-6 py-3">Task</th>
                                <th className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((taskItem) => (
                                <tr
                                    key={taskItem.id}
                                    className="bg-white border-b hover:bg-gray-50"
                                >
                                    <td className="w-4 p-4">
                                        <input
                                            type="checkbox"
                                            checked={taskItem.isComplete}
                                            onChange={() => taskComplete(taskItem.id)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        {taskItem.task}
                                    </td>
                                    <td className="px-6 py-4 text-black font-semibold">
                                        {taskItem.isComplete ? "✅ Completed" : "❌ Incomplete"}
                                    </td>
                                </tr>
                            ))}
                            {tasks.length === 0 && (
                                <tr>
                                    <td colSpan="3" className="text-center py-4 text-gray-500">
                                        No tasks added yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
