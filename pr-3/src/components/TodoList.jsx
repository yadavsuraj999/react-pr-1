const TodoList = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <div className="inline-block border-2 ">
                    <h1 className="font-bold text-4xl my-5">
                        ✅Todo List
                    </h1>
                    <div className="flex gap-2 px-6 pb-4">
                        <input className="border-2 p-2 rounded-lg" type="text" placeholder="Add Any Task✍️" />
                        <button type="button" className=" bg-red-950 text-white rounded-lg p-2">
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
